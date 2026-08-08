import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail, type ContactPayload } from "@/lib/mail";

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

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData();
    const formType = field(form, "form_type");

    if (formType !== "enquiry" && formType !== "partner") {
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

    if (formType === "enquiry") {
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
      error instanceof Error && error.message.startsWith("Missing required environment variable")
        ? error.message
        : "Unable to send email right now. Please try again later.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
