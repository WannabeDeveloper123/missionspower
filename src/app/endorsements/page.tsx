import PageHeader from "@/components/PageHeader";

const endorsements = [
  {
    quote:
      "God’s missionary mandate for taking the gospel to all nations is set in concrete. But the methods are not—they change from season to season. Terry Wong’s book Missions Power provides us with a cutting-edge overview of missions for this season. His mixture of passion with God’s power will raise your faith to a new level and help you to be all God wants you to be.",
    name: "Dr. C. Peter Wagner",
    title: "Vice-President, Global Spheres Inc., Colorado",
  },
  {
    quote:
      "Terry Wong has a passion for the lost that only God could give him. In this day of so much emphasis on our own blessings as royalty in Christ Jesus, it is so encouraging and refreshing to hear another perspective. Our purpose on earth is not just to enjoy for ourselves the powers of the age to come, but to seek and save the lost: the mission of Jesus Himself on earth.",
    name: "Drs. Heidi & Rolland Baker",
    title: "Founders & Directors, Iris Ministries, Mozambique",
  },
  {
    quote:
      "Terry Wong has as strong a vision for missions as any pastor I have met worldwide. His endless schedule of crossing oceans and continents to foster relationships, plant churches, and minister at conferences is amazing. More than that, his insight into helping other churches enter the world vision will transform your life.",
    name: "Larry Stockstill",
    title: "Former Senior Pastor, Bethany World Prayer Center, Louisiana",
  },
  {
    quote:
      "Pastor Terry Wong speaks from a well of experience on a subject he is passionate about. He stepped into an inward-looking, ethnic church and his intense passion became contagious. Today Calvary Assembly is one of the biggest missions giving churches, per capita, in the Assemblies of God of USA.",
    name: "Dishan Wickramaratne",
    title: "General Superintendent of the Assemblies of God in Sri Lanka",
  },
  {
    quote:
      "God’s will is for every church to be involved in missions! This book is a “must read” for every pastor who wants their church to obey God’s will. It clearly gives biblical yet practical steps and principles on how to make your church a missions church.",
    name: "Dr. Rick Seaward",
    title: "Apostolic Overseer, Victory Family Centre, Singapore",
  },
];

export default function EndorsementsPage() {
  return (
    <div>
      <PageHeader eyebrow="Testimonials" title="Special Endorsements" />
      <div className="mx-auto grid max-w-5xl gap-6 px-6 py-14 sm:grid-cols-2">
        {endorsements.map((e) => (
          <blockquote
            key={e.name}
            className="flex flex-col justify-between rounded-lg border border-border bg-panel p-6"
          >
            <p className="text-foreground/90 italic leading-relaxed">
              &ldquo;{e.quote}&rdquo;
            </p>
            <footer className="mt-4 border-t border-border pt-4 text-sm">
              <p className="font-semibold text-gold">{e.name}</p>
              <p className="text-muted">{e.title}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
