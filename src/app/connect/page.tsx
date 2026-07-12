import PageHeader from "@/components/PageHeader";

export default function ConnectPage() {
  return (
    <div>
      <PageHeader eyebrow="Get in Touch" title="Connect" />
      <div className="mx-auto grid max-w-4xl gap-10 px-6 py-14 sm:grid-cols-2">
        <form
          action="mailto:info@missionspower.com"
          method="post"
          encType="text/plain"
          className="space-y-4"
        >
          <p className="text-sm text-muted">
            Send an email. All fields marked with an * are required.
          </p>
          <div>
            <label className="mb-1 block text-sm text-muted">Name *</label>
            <input
              required
              name="name"
              className="w-full rounded border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-muted">Email *</label>
            <input
              required
              type="email"
              name="email"
              className="w-full rounded border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-muted">Subject *</label>
            <input
              required
              name="subject"
              className="w-full rounded border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-muted">Message *</label>
            <textarea
              required
              name="message"
              rows={5}
              className="w-full rounded border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-gold"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-gold px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-background hover:bg-gold-light"
          >
            Send Email
          </button>
        </form>

        <div className="space-y-6">
          <div className="rounded-lg border border-border bg-panel p-6">
            <h3 className="text-lg font-semibold text-foreground">Mail</h3>
            <p className="mt-2 text-muted">
              P.O. Box 17519
              <br />
              Honolulu, HI 96817
              <br />
              USA
            </p>
          </div>
          <div className="rounded-lg border border-border bg-panel p-6">
            <h3 className="text-lg font-semibold text-foreground">Web</h3>
            <p className="mt-2 text-muted">missionspower.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
