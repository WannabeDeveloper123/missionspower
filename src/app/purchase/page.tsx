import PageHeader from "@/components/PageHeader";

const books = [
  {
    title: "Missions Power",
    cover: ["Missions", "Power"],
    synopsis:
      "Missions Power by Dr. Terry Wong is a practical yet Bible-based book that discusses how to do missions. After pastoring Calvary Assembly of God, Honolulu for over 23 years, Dr. Wong shows how an inward and self-oriented church can become outward and missions-oriented. The book discusses 7 P's of missions: the Principles, Passion, Pastor, People, Process, Pneuma, and Praises. These P's have resulted in a church giving over $6 million to missions, planting over 200 churches worldwide, and transforming an entire Honolulu community with feeding and food distribution programs, school adoption activities, and addiction recovery programs. The book is filled with heart-gripping and inspirational stories that will not only missionally change a church but also a person.",
  },
  {
    title: "Healing Power",
    cover: ["Healing", "Power"],
    synopsis:
      "Healing Power by Dr. Terry Wong is a revolutionary and missional book on divine healing. After years of involvement in healing ministries and writing a doctoral dissertation on divine healing, Dr. Wong points out that healing is not just for believers but also for pre-believers. He states this against the backdrop that few churches practice healing evangelistically and missionally. The book is divided into two sections: (1) a high-level look at healing for those wanting to learn about biblical healing and how to pray for the sick, and (2) a deep dive study of healing for those wanting to take in seven New Testament Greek words for healing and review 2000 years of healing history. The book presents a return to biblical healing, which will benefit today's church and renew today's Christian.",
  },
];

export default function PurchasePage() {
  return (
    <div>
      <PageHeader eyebrow="Get the Books" title="Purchase" />
      <div className="mx-auto max-w-3xl space-y-10 px-6 py-14">
        {books.map((book) => (
          <div
            key={book.title}
            className="flex flex-col gap-8 rounded-lg border border-border bg-panel p-8 sm:flex-row"
          >
            <div className="mx-auto flex h-56 w-40 flex-shrink-0 items-center justify-center rounded border border-gold/40 bg-background text-center font-serif text-lg text-gold">
              {book.cover[0]}
              <br />
              {book.cover[1]}
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                {book.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {book.synopsis}
              </p>
              <a
                href={`mailto:info@missionspower.com?subject=Order%20${encodeURIComponent(
                  book.title
                )}`}
                className="mt-6 inline-block rounded-full bg-gold px-7 py-3 text-sm font-medium uppercase tracking-wide text-background hover:bg-gold-light"
              >
                Order Now
              </a>
            </div>
          </div>
        ))}
        <p className="text-center text-xs text-muted">
          We ship to the U.S., Canada, Singapore, and Australia.
        </p>
      </div>
    </div>
  );
}
