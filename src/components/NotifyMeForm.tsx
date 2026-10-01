"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content/site";

const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact/";

export function NotifyMeForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("form_type", "notify");

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      const raw = await res.text();
      let payload: { ok?: boolean; error?: string } | null = null;
      try {
        payload = raw ? (JSON.parse(raw) as { ok?: boolean; error?: string }) : null;
      } catch {
        throw new Error(
          `Server returned an unexpected response (${res.status}). Please email ${site.email} directly.`
        );
      }

      if (!res.ok || !payload?.ok) {
        throw new Error(payload?.error || "Request failed");
      }

      setStatus("success");
      setMessage("You're on the list — we'll notify you when the app launches.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error && error.message
          ? error.message
          : `Could not submit right now. Please email ${site.email}.`
      );
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-line bg-background px-4 py-3 text-sm outline-none ring-accent focus:ring-2";

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">Full name</span>
          <input required name="full_name" className={fieldClass} placeholder="Your name" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">Phone</span>
          <input required name="phone" type="tel" className={fieldClass} placeholder="+91 …" />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">Email</span>
        <input required type="email" name="email" className={fieldClass} placeholder="you@email.com" />
      </label>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">City</span>
        <input required name="city" className={fieldClass} placeholder="Your city" />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-accent-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Submitting…" : "Notify me"}
      </button>
      {message ? (
        <p className={`text-sm ${status === "success" ? "text-green-700" : "text-red-700"}`}>{message}</p>
      ) : null}
    </form>
  );
}
