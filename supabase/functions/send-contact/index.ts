import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-auth-token",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const client = new SMTPClient({
      connection: {
        hostname: Deno.env.get("SMTP_HOST")!,
        port: parseInt(Deno.env.get("SMTP_PORT") || "465"),
        tls: true,
        auth: {
          username: Deno.env.get("SMTP_USER")!,
          password: Deno.env.get("SMTP_PASS")!,
        },
      },
    });

    await client.send({
      from: `StudyHelperTools Support <${Deno.env.get("SMTP_USER")}>`,
      to: Deno.env.get("SMTP_USER")!,
      replyTo: email,
      subject: `[Contact Form] ${subject} - from ${name}`,
      content: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #2563eb;">New Message from StudyHelperTools</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="white-space: pre-wrap;">${message}</p>
          <footer style="margin-top: 20px; font-size: 12px; color: #666;">
            Sent via StudyHelperTools Contact System
          </footer>
        </div>
      `,
    });

    await client.close();

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("SMTP Error:", error.message);
    return new Response(JSON.stringify({ error: "Failed to send message", details: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
