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
  {
    quote:
      "Passion and conviction leap off the pages of this book. Read it yes, but better yet, inhale the energy. Pastor Terry Wong has written what he has lived, and practice makes powerful. Missions Power will convict and motivate you to go into all the world and beyond that, equip you to unleash a tipping point of global impact. Bravo Terry!",
    name: "Norman Nakanishi",
    title: "Senior Pastor, Grace Bible Church Pearlside, Hawaii",
  },
  {
    quote:
      "Terry is a missionary/pastor and this book is a reflection of that. His passion, knowledge and experience of getting churches involved in missions is remarkable. I am so glad that he has put this all down on paper as an inspiration and guideline for us all.",
    name: "Scott Douma",
    title: "Senior Pastor, Yokohama Grace Bible Church, Japan",
  },
  {
    quote:
      "I have known Terry and Vicky Wong for over ten years. During that time I have watched them embrace Jesus’ last command and make it their first priority. I have watched Calvary Assembly go from a church with a missions program to a church with a missions passion. Under Terry’s leadership they are now one of the great missions churches in the world today. Terry and Vicky live this message. I love them both and pray Missions Power will challenge and change many.",
    name: "Jack Hanes",
    title: "Senior Pastor, ImagineNations Church, Australia",
  },
  {
    quote:
      "Books don’t often live up to their titles. This one does. Terry Wong’s incredible journey leading Calvary Assembly in missions is both inspiring and instructive. Pastors willing to learn from Terry will have the joy of seeing themselves and their churches enter a new dimension of obedience to the Master and impact on the world for Christ.",
    name: "Randy Hurst",
    title: "Director of Communications, Assemblies of God World Missions, Missouri",
  },
  {
    quote:
      "Terry Wong is a leader, communicator, a visionary, a high impact man. In Missions Power you will read how a traditional church became a dynamic miracle ministering New Testament church, how you can lead your church to live, breathe and dream missions. The stories will grip you and excite you. I’ve known Terry as a growing vibrant Christian, since his university days. Now I know him as a mature leader, out to change his world!",
    name: "Dr. David Lim",
    title: "Senior Pastor, Grace Assembly of God, Singapore",
  },
  {
    quote:
      "Terry Wong incorporates solid missional biblical principles with exciting personal application. He makes a statement that every church, regardless of numerical size, has the potential of being the explosive, dynamic, passionate, missional church that brings elation to God’s heart. It’s a riveting book captivating every generation for the upcoming years.",
    name: "Dr. George Nagato",
    title: "District Superintendent, Hawaii Assemblies of God",
  },
  {
    quote:
      "Dr. Wong gives us a clear message on the missionary call and missionary imperative of the church that is both biblically grounded and culturally relevant. Its message will both inform as well as challenge pastors and laypersons alike who seek to be obedient to the Lord’s great commission.",
    name: "Dr. Peter Hintzoglou",
    title: "Adjunct assistant professor, Fuller Theological Seminary",
  },
  {
    quote:
      "Missions Power is a must read for any Christian thirsty for the heart of God. The practical and powerful insights from Pastor Terry Wong resonate beyond theory and speculation but are reality and revelation. Missions Power will inspire, motivate and bring you back to the first love of our Christian faith: Souls.",
    name: "Art Sepúlveda",
    title: "Senior Pastor, Word of Life Christian Center (Honolulu, HI)",
  },
  {
    quote:
      "Missions Power is not just a “how to” on establishing missions awareness. It’s a book that reveals the heart of Terry Wong, a pastor sold out to God’s call to reach the world with the Gospel. Be ready to be challenged and changed.",
    name: "James “Tex” Texeira",
    title: "Senior Pastor, Solid Rock Ministries, Hawaii",
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
