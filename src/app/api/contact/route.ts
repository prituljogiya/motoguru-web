import { NextRequest, NextResponse } from "next/server";
import { missingSmtpEnv, sendContactEmail, type ContactPayload } from "@/lib/mail";

export const runtime = "nodejs";

function field(form: FormData, key: string): string {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function servicesFromForm(form: FormData): string[] {
  const values = form.getAll("services[]");
  return values
    .map((value) => (typeof value === "string" ? value.trim() : ""))
    .filter(Boolean);
}

export async function GET() {
  const missing = missingSmtpEnv();
  if (missing.length > 0) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        missing,
        hint: "Add EMAIL_* variables in Vercel → Settings → Environment Variables, then redeploy.",
      },
      { status: 503 }
    );
  }

  return NextResponse.json({
    ok: true,
    configured: true,
    endpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact/",
  });
}

export async function POST(request: NextRequest) {
  try {
    const missing = missingSmtpEnv();
    if (missing.length > 0) {
      return NextResponse.json(
        {
          ok: false,
          error: `Email is not configured on the server (missing: ${missing.join(", ")}).`,
        },
        { status: 503 }
      );
    }

    const form = await request.formData();
    const formType = field(form, "form_type");

    if (formType !== "enquiry" && formType !== "partner" && formType !== "notify") {
      return NextResponse.json({ ok: false, error: "Invalid form type." }, { status: 400 });
    }

    const email = field(form, "email");
    const phone = field(form, "phone");
    const city = field(form, "city");

    if (!email || !phone || !city) {
      return NextResponse.json(
        { ok: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const payload: ContactPayload = {
      formType,
      email,
      phone,
      city,
    };

    if (formType === "notify") {
      payload.fullName = field(form, "full_name");
      if (!payload.fullName) {
        return NextResponse.json(
          { ok: false, error: "Please fill in all required fields." },
          { status: 400 }
        );
      }
    } else if (formType === "enquiry") {
      payload.fullName = field(form, "full_name");
      payload.message = field(form, "message");
      if (!payload.fullName || !payload.message) {
        return NextResponse.json(
          { ok: false, error: "Please fill in all required fields." },
          { status: 400 }
        );
      }
    } else {
      payload.workshopName = field(form, "workshop_name");
      payload.ownerName = field(form, "owner_name");
      payload.services = servicesFromForm(form);
      if (!payload.workshopName || !payload.ownerName) {
        return NextResponse.json(
          { ok: false, error: "Please fill in all required fields." },
          { status: 400 }
        );
      }
    }

    await sendContactEmail(payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact]", error);
    const message =
      error instanceof Error ? error.message : "Unable to send email right now. Please try again later.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
