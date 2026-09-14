"use client";

import { FormEvent, useState } from "react";
import PageHeader from "@/components/PageHeader";

const eventTypes = ["Conference", "Men", "Leaders", "Youth"] as const;

export default function SpeakingRequestPage() {
  const [eventType, setEventType] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function toggleEventType(type: string) {
    setEventType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (name: string) => (data.get(name) as string) || "";

    const lines = [
      "HOST INFORMATION",
      `Church/Organization Name: ${get("orgName")}`,
      `Name of Senior Pastor / Leader: ${get("leaderName")}`,
      `Contact Name: ${get("contactName")}`,
      `Contact Title: ${get("contactTitle")}`,
      `Contact Email: ${get("contactEmail")}`,
      `Contact Phone: ${get("contactPhone")}`,
      `Church/Organization Address: ${get("orgAddress")}`,
      `Church/Organization Website: ${get("orgWebsite")}`,
      "",
      "EVENT DETAILS",
      `Event Dates: ${get("eventDates")}`,
      `Alternate Dates: ${get("altDates")}`,
      `Event Type: ${eventType.join(", ")}`,
      `Estimated Number of Attendees: ${get("estAttendees")}`,
      `Previous Number of Attendees: ${get("prevAttendees")}`,
      `Honorarium / Love Offering: ${get("honorarium")}`,
    ];

    const subject = `Speaking Request: ${get("orgName") || "New Inquiry"}`;
    const mailto = `mailto:info@missionspower.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <div>
      <PageHeader
        eyebrow="Invite Dr. Terry Wong"
        title="Speaking Request"
        subtitle="Please complete the form below. Fields marked with * are required."
      />
      <div className="mx-auto max-w-3xl px-6 py-14">
        <form onSubmit={handleSubmit} className="space-y-12">
          <fieldset className="space-y-5">
            <legend className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Host Information
            </legend>

            <Field label="Church/Organization Name" name="orgName" required />
            <Field
              label="Name of Senior Pastor / Leader"
              name="leaderName"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Contact Name" name="contactName" required />
              <Field label="Contact Title" name="contactTitle" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Contact Email"
                name="contactEmail"
                type="email"
                required
              />
              <Field
                label="Contact Phone"
                name="contactPhone"
                type="tel"
                required
              />
            </div>
            <Field label="Church/Organization Address" name="orgAddress" />
            <Field
              label="Church/Organization Website"
              name="orgWebsite"
              type="url"
              required
            />
          </fieldset>

          <fieldset className="space-y-5">
            <legend className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Event Details
            </legend>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Event Dates" name="eventDates" required />
              <Field
                label="Alternate Dates"
                name="altDates"
                placeholder="If you have alternative dates, indicate them here"
              />
            </div>

            <div>
              <span className="mb-2 block text-sm text-muted">
                Event Type
              </span>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {eventTypes.map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-2 rounded border border-border bg-background px-3 py-2 text-sm text-foreground/90"
                  >
                    <input
                      type="checkbox"
                      checked={eventType.includes(type)}
                      onChange={() => toggleEventType(type)}
                      className="accent-[var(--gold)]"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Estimated Number of Attendees"
                name="estAttendees"
                type="number"
              />
              <Field
                label="Previous Number of Attendees"
                name="prevAttendees"
                type="number"
                placeholder="If this is not a first-time event"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-muted">
                Will you be giving an honorarium and/or taking up a love
                offering?
              </label>
              <textarea
                name="honorarium"
                rows={3}
                className="w-full rounded border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-gold"
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="rounded-full bg-gold px-7 py-3 text-sm font-medium uppercase tracking-wide text-background hover:bg-gold-light"
          >
            Submit Request
          </button>

          {submitted && (
            <p className="text-sm text-muted">
              Your email client should now be open with your request
              pre-filled — please review and send it.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm text-muted">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-gold"
      />
    </div>
  );
}
