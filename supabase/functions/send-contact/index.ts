import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const jsonResponse = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char] ?? char));

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const sanitizeHeader = (value: string) => value.replace(/[\r\n]/g, " ").trim();

const sendSmtpMail = async ({
  host,
  port,
  user,
  pass,
  replyTo,
  subject,
  text,
}: {
  host: string;
  port: number;
  user: string;
  pass: string;
  replyTo: string;
  subject: string;
  text: string;
}) => {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const conn = await Deno.connectTls({ hostname: host, port });

  const readResponse = async () => {
    let response = "";
    for (let i = 0; i < 12; i += 1) {
      const buffer = new Uint8Array(4096);
      const read = await Promise.race([
        conn.read(buffer),
        new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000)),
      ]);
      if (!read) break;
      response += decoder.decode(buffer.subarray(0, read));
      const lines = response.split(/\r?\n/).filter(Boolean);
      const lastLine = lines[lines.length - 1] ?? "";
      if (/^\d{3} /.test(lastLine)) return response;
    }
    return response;
  };

  const write = async (value: string) => {
    await conn.write(encoder.encode(value));
  };

  const command = async (value: string, expected: string[]) => {
    await write(`${value}\r\n`);
    const response = await readResponse();
    if (!expected.some((code) => response.startsWith(code))) {
      throw new Error(`SMTP command failed: ${response || value}`);
    }
  };

  try {
    const greeting = await readResponse();
    if (!greeting.startsWith("220")) throw new Error(`SMTP greeting failed: ${greeting}`);

    await command("EHLO studyhelpertools.com", ["250"]);
    await command("AUTH LOGIN", ["334"]);
    await command(btoa(user), ["334"]);
    await command(btoa(pass), ["235"]);
    await command(`MAIL FROM:<${user}>`, ["250"]);
    await command(`RCPT TO:<${user}>`, ["250", "251"]);
    await command("DATA", ["354"]);

    const safeSubject = sanitizeHeader(subject);
    const safeReplyTo = sanitizeHeader(replyTo);
    const safeText = text.replace(/^\./gm, "..");

    await write([
      `From: StudyHelperTools <${user}>`,
      `To: ${user}`,
      `Reply-To: ${safeReplyTo}`,
      `Subject: ${safeSubject}`,
      "MIME-Version: 1.0",
      'Content-Type: text/plain; charset="UTF-8"',
      "",
      safeText,
      ".",
      "",
    ].join("\r\n"));

    const dataResponse = await readResponse();
    if (!dataResponse.startsWith("250")) throw new Error(`SMTP data failed: ${dataResponse}`);
    await command("QUIT", ["221"]);
  } finally {
    try {
      conn.close();
    } catch (_) {
      // Connection already closed.
    }
  }
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const smtpHost = Deno.env.get("SMTP_HOST");
    const smtpPort = Number(Deno.env.get("SMTP_PORT") ?? "465");
    const smtpUser = Deno.env.get("SMTP_USER");
    const smtpPass = Deno.env.get("SMTP_PASS");

    if (!smtpHost || !smtpUser || !smtpPass) {
      return jsonResponse({ error: "Email service is not configured" }, 500);
    }

    const body = await req.json().catch(() => null) as Record<string, unknown> | null;
    const name = String(body?.name ?? "").trim().slice(0, 120);
    const email = String(body?.email ?? "").trim().slice(0, 180);
    const subject = String(body?.subject ?? "General question").trim().slice(0, 160);
    const message = String(body?.message ?? "").trim().slice(0, 5000);

    if (!name || !isValidEmail(email) || !message) {
      return jsonResponse({ error: "Please provide a valid name, email, and message." }, 400);
    }

    await sendSmtpMail({
      host: smtpHost,
      port: smtpPort,
      user: smtpUser,
      pass: smtpPass,
      replyTo: email,
      subject: `StudyHelperTools contact: ${subject}`,
      text: `New message from ${name} <${email}>\n\nSubject: ${subject}\n\n${message}`,
    });

    return jsonResponse({ success: true });
  } catch (error) {
    console.error("send-contact error", error);
    return jsonResponse({ error: "Unable to send message right now." }, 500);
  }
});
