"use client";

import { useId, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  const disabled = status === "submitting";

  const statusText = useMemo(() => {
    if (status === "success") return "Message sent. Thanks — I’ll get back to you soon.";
    if (status === "error") return message || "Something went wrong. Please try again.";
    return "";
  }, [status, message]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot (bots fill this)
    if (String(formData.get("company") || "").trim().length > 0) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string; ok?: boolean };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Failed to send message.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-describedby={`${formId}-status`}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor={`${formId}-name`} className="text-sm text-slate-200">
            Name
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            required
            disabled={disabled}
            autoComplete="name"
            className={cn(
              "w-full rounded-xl bg-white/[0.03] px-4 py-3 text-sm text-slate-100 ring-1 ring-white/10",
              "placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-300/50",
            )}
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor={`${formId}-email`} className="text-sm text-slate-200">
            Email
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            disabled={disabled}
            autoComplete="email"
            className={cn(
              "w-full rounded-xl bg-white/[0.03] px-4 py-3 text-sm text-slate-100 ring-1 ring-white/10",
              "placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-300/50",
            )}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor={`${formId}-subject`} className="text-sm text-slate-200">
          Subject
        </label>
        <input
          id={`${formId}-subject`}
          name="subject"
          required
          disabled={disabled}
          className={cn(
            "w-full rounded-xl bg-white/[0.03] px-4 py-3 text-sm text-slate-100 ring-1 ring-white/10",
            "placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-300/50",
          )}
          placeholder="What’s this about?"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor={`${formId}-message`} className="text-sm text-slate-200">
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          disabled={disabled}
          rows={5}
          className={cn(
            "w-full resize-y rounded-xl bg-white/[0.03] px-4 py-3 text-sm text-slate-100 ring-1 ring-white/10",
            "placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-300/50",
          )}
          placeholder="Tell me what you’re building…"
        />
      </div>

      {/* Honeypot field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input id={`${formId}-company`} name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="secondary" disabled={disabled} aria-label="Send message">
          {status === "submitting" ? "Sending…" : "Send Message"}
        </Button>
        <p
          id={`${formId}-status`}
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
          className={cn(
            "text-sm",
            status === "success" && "text-emerald-200",
            status === "error" && "text-rose-200",
          )}
        >
          {statusText}
        </p>
      </div>
    </form>
  );
}

