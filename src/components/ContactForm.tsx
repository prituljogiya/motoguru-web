"use client";

import { FormEvent, useState } from "react";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xqkdplaceholder";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setMessage("Thanks — your message was sent. We’ll get back to you soon.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "Could not send right now. Email us at support@motoguru.in or set NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env.local."
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-line bg-surface p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">Name</span>
          <input
            required
            name="name"
            className="w-full rounded-xl border border-line bg-background px-4 py-3 outline-none ring-accent focus:ring-2"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">Email</span>
          <input
            required
            type="email"
            name="email"
            className="w-full rounded-xl border border-line bg-background px-4 py-3 outline-none ring-accent focus:ring-2"
            placeholder="you@email.com"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">Phone</span>
        <input
          name="phone"
          className="w-full rounded-xl border border-line bg-background px-4 py-3 outline-none ring-accent focus:ring-2"
          placeholder="+91 ..."
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full resize-y rounded-xl border border-line bg-background px-4 py-3 outline-none ring-accent focus:ring-2"
          placeholder="How can we help?"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-accent-dark disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
      {message ? (
        <p
          className={`text-sm ${
            status === "success" ? "text-green-700" : "text-red-700"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
