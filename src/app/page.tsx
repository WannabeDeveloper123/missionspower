import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border bg-panel">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">
            Missions Power Ministries, Inc.
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Missions <span className="text-gold">Power</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            A man of passion, mission, and vision. Find out more about the
            author of this amazing new book!
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/purchase"
              className="rounded-full bg-gold px-7 py-3 text-sm font-medium uppercase tracking-wide text-background transition-colors hover:bg-gold-light"
            >
              Get the Book
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-border px-7 py-3 text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              About Terry
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 sm:grid-cols-2">
        {[
          {
            href: "/about",
            title: "About the Author",
            body: "A man of passion, mission, and vision. Find out more about the author of this amazing new book! (Download speaking request form)",
          },
          {
            href: "/endorsements",
            title: "Special Endorsements",
            body: "Read the special endorsements from a wide cross section of professors, pastors, and ministry leaders!",
          },
        ].map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group flex flex-col justify-between rounded-lg border border-border bg-panel p-6 transition-colors hover:border-gold"
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{card.body}</p>
            </div>
            <span className="mt-6 text-sm font-medium uppercase tracking-wide text-gold group-hover:text-gold-light">
              Read More &rarr;
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
