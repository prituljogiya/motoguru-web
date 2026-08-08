"use client";

import { FormEvent, useMemo, useState } from "react";
import { partnerServices } from "@/content/site";

type FormType = "enquiry" | "partner";

const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact/";

function randomCaptcha() {
  const a = Math.floor(Math.random() * 8) + 2;
  const b = Math.floor(Math.random() * 8) + 2;
  return { a, b, answer: a + b };
}

export function ContactForm() {
  const [formType, setFormType] = useState<FormType>("enquiry");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState(randomCaptcha);
  const serviceOptions = useMemo(() => partnerServices, []);

  function refreshCaptcha() {
    setCaptcha(randomCaptcha());
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const captchaValue = Number(data.get("security_check"));

    if (captchaValue !== captcha.answer) {
      setStatus("error");
      setMessage("Security check failed. Please solve the sum and try again.");
      refreshCaptcha();
      return;
    }

    data.set("form_type", formType);
    data.delete("security_check");

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      const payload = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (!res.ok || !payload?.ok) {
        throw new Error(payload?.error || "Request failed");
      }

      setStatus("success");
      setMessage(
        formType === "partner"
          ? "Thanks — your partner enquiry was sent. We’ll get back to you soon."
          : "Thanks — your message was sent. We’ll get back to you soon."
      );
      form.reset();
      refreshCaptcha();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error && error.message
          ? error.message
          : "Could not send right now. Please email support@motoguru.in or try again later."
      );
      refreshCaptcha();
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-line bg-background px-4 py-3 outline-none ring-accent focus:ring-2";

  return (
    <div className="rounded-3xl border border-line bg-surface p-6 md:p-8">
      <div className="mb-6 grid grid-cols-2 gap-2 rounded-2xl bg-background p-1.5">
        <button
          type="button"
          onClick={() => {
            setFormType("enquiry");
            setStatus("idle");
            setMessage("");
          }}
          className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
            formType === "enquiry" ? "bg-accent text-ink" : "text-muted hover:text-ink"
          }`}
        >
          General Enquiry
        </button>
        <button
          type="button"
          onClick={() => {
            setFormType("partner");
            setStatus("idle");
            setMessage("");
          }}
          className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
            formType === "partner" ? "bg-accent text-ink" : "text-muted hover:text-ink"
          }`}
        >
          Join as Partner
        </button>
      </div>

      <form key={formType} onSubmit={onSubmit} className="space-y-4">
        {formType === "enquiry" ? (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">Full name</span>
                <input required name="full_name" className={fieldClass} placeholder="Your full name" />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">Phone number</span>
                <input
                  required
                  name="phone"
                  type="tel"
                  className={fieldClass}
                  placeholder="+91 ..."
                />
              </label>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className={fieldClass}
                  placeholder="you@email.com"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">City</span>
                <input required name="city" className={fieldClass} placeholder="Your city" />
              </label>
            </div>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-ink">How can we help?</span>
              <textarea
                required
                name="message"
                rows={5}
                className={`${fieldClass} resize-y`}
                placeholder="Tell us how we can help"
              />
            </label>
          </>
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">Workshop / garage name</span>
                <input
                  required
                  name="workshop_name"
                  className={fieldClass}
                  placeholder="Workshop name"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">Owner name</span>
                <input required name="owner_name" className={fieldClass} placeholder="Owner name" />
              </label>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">Phone</span>
                <input
                  required
                  name="phone"
                  type="tel"
                  className={fieldClass}
                  placeholder="+91 ..."
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className={fieldClass}
                  placeholder="you@email.com"
                />
              </label>
            </div>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-ink">City</span>
              <input required name="city" className={fieldClass} placeholder="City" />
            </label>
            <fieldset>
              <legend className="mb-3 text-sm font-medium text-ink">
                Services your workshop offers
              </legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {serviceOptions.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-2.5 rounded-xl border border-line bg-background px-3 py-2.5 text-sm text-ink"
                  >
                    <input
                      type="checkbox"
                      name="services[]"
                      value={service}
                      className="h-4 w-4 accent-[var(--accent-dark)]"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </fieldset>
          </>
        )}

        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">
            Security check: What is {captcha.a} + {captcha.b}?
          </span>
          <input
            required
            name="security_check"
            type="number"
            inputMode="numeric"
            className={fieldClass}
            placeholder="Enter the answer"
          />
        </label>

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-accent-dark disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : formType === "partner" ? "Submit partner request" : "Send enquiry"}
        </button>

        {message ? (
          <p className={`text-sm ${status === "success" ? "text-green-700" : "text-red-700"}`}>
            {message}
          </p>
        ) : null}
      </form>
    </div>
  );
}
