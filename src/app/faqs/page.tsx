import PageHeader from "@/components/PageHeader";

const faqs = [
  {
    q: "Does the book have stories?",
    a: "Yes, there are many stories that will move your heart. The miracle stories especially will inspire and strengthen your faith.",
  },
  {
    q: "Will the book help my church get more into missions?",
    a: "Absolutely! Missions Power is a very practical book on the how-to's of doing missions. Your pastor will learn a lot, as well as your leaders and members.",
  },
  {
    q: "Is this book only for pastors?",
    a: "No. While there’s a great deal of material for pastors, the book was deliberately written so that everyone can learn missions principles and enjoy especially the miracle stories.",
  },
  {
    q: "Can the book be used for theological training?",
    a: "Yes. Terry Wong, a Fuller Theological Seminary graduate, wrote Missions Power to build a strong theological foundation, making it suitable for Bible college, seminary, and missions training.",
  },
  {
    q: "Is there any new material that has not been previously published?",
    a: "Yes. Terry Wong's professors have given him permission to publish new material he learned at Fuller Theological Seminary in Missions Power.",
  },
  {
    q: "Will Terry Wong be writing future books?",
    a: "Yes, in fact, Terry Wong is already in the midst of writing a book on leadership.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we can ship to Canada, Singapore, and Australia.",
  },
  {
    q: "Why was this book written?",
    a: "Terry Wong is a kingdom-minded pastor and not just a pastor of one church. His desire is for God to use him to send more missions dollars and missionaries into the missions field.",
  },
  {
    q: "What is missions?",
    a: "Missions is bringing people closer to Jesus through compassion ministries, evangelism, and church planting.",
  },
  {
    q: "Why is missions important in my life?",
    a: "Jesus’ last command to the church was “Go and make disciples.” It is God’s will that you send or be sent into the harvest field.",
  },
  {
    q: "Is the book available in other languages?",
    a: "At this point, Missions Power is only written in English. There are plans to translate the book into different languages.",
  },
  {
    q: "Who is Terry Wong?",
    a: "Terry Wong is Senior Pastor of Calvary Assembly of God in Honolulu, Hawaii. He took a small church that was doing little in missions to being one of the top missions-giving churches in the U.S. Assemblies of God.",
  },
];

export default function FaqsPage() {
  return (
    <div>
      <PageHeader eyebrow="Have Questions?" title="Frequently Asked Questions" />
      <div className="mx-auto max-w-3xl divide-y divide-border px-6 py-14">
        {faqs.map((f) => (
          <div key={f.q} className="py-5">
            <p className="font-semibold text-gold">Q. {f.q}</p>
            <p className="mt-2 text-foreground/90">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
