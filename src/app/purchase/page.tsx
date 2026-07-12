import PageHeader from "@/components/PageHeader";

export default function PurchasePage() {
  return (
    <div>
      <PageHeader eyebrow="Get the Book" title="Purchase" />
      <div className="mx-auto max-w-3xl px-6 py-14">
        <div className="flex flex-col gap-8 rounded-lg border border-border bg-panel p-8 sm:flex-row sm:items-center">
          <div className="mx-auto flex h-56 w-40 flex-shrink-0 items-center justify-center rounded border border-gold/40 bg-background text-center font-serif text-lg text-gold">
            Missions
            <br />
            Power
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground">
              Missions Power
            </h2>
            <p className="mt-2 text-muted">
              A cutting-edge and Biblically-based practical book on doing
              missions, by Pastor Terry Wong.
            </p>
            <p className="mt-4 text-2xl font-semibold text-gold">$15.95</p>
            <a
              href="mailto:info@missionspower.com?subject=Order%20Missions%20Power"
              className="mt-6 inline-block rounded-full bg-gold px-7 py-3 text-sm font-medium uppercase tracking-wide text-background hover:bg-gold-light"
            >
              Order Now
            </a>
            <p className="mt-3 text-xs text-muted">
              We ship to the U.S., Canada, Singapore, and Australia.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-border bg-panel p-6">
          <h3 className="text-lg font-semibold text-foreground">
            Excerpt from Chapter Four
          </h3>
          <p className="mt-3 italic text-muted">
            &ldquo;Statistics show that out of the 50 states in our nation,
            49 have decreasing church attendance.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
