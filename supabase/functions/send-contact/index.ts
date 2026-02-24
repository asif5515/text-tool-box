import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-auth-token",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

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

    // Hum email bhejenge par browser ko pehle hi Success response bhej denge
    // Isse "Timeout" wala error nahi aayega
    const sendEmailPromise = client.send({
      from: `StudyHelperTools Support <${Deno.env.get("SMTP_USER")}>`,
      to: Deno.env.get("SMTP_USER")!,
      replyTo: email,
      subject: `[Contact Form] ${subject} - from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #2563eb;">New Message from StudyHelperTools</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px;">${message}</p>
          <footer style="margin-top: 20px; font-size: 12px; color: #666;">
            Sent via StudyHelperTools Contact System
          </footer>
        </div>
      `,
    });

    // Wait for a very short time or just proceed to return success
    // SMTP will complete in the background
    await Promise.race([
        sendEmailPromise,
        new Promise(resolve => setTimeout(resolve, 1500)) 
    ]);

    return new Response(JSON.stringify({ success: true, message: "Request received" }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Function Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
