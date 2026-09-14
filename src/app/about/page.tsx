import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <div>
      <PageHeader eyebrow="About the Author" title="About Terry" />
      <div className="mx-auto max-w-3xl space-y-6 px-6 py-14 leading-relaxed text-foreground/90">
        <p>
          Rev. Dr. Terry Wong has been Presbyter of the Hawaii Assemblies of
          God for over 18 years. Previously he was senior pastor of Calvary
          Assembly of God for over 23 years, where he led the church to
          being a top missions church in missions giving, missions going,
          and worldwide church planting. He is an adjunct professor at Asia
          Pacific Theological Seminary. He received his Bachelor of Science
          in Mathematics and Computer Science from the University of
          Victoria, Master of Arts in Theology from Fuller Theological
          Seminary, and Doctor of Ministry from Assemblies of God
          Theological Seminary.
        </p>
        <p>
          Dr. Terry is a sought-after international speaker in countries
          such as Australia, Brazil, Canada, China, India, Japan, Kenya,
          Philippines, Singapore, Sri Lanka, and many others. He is also a
          national speaker throughout the U.S., speaking on missions,
          healing, leadership, and preaching. He is the author of{" "}
          <em>Missions Power</em>, a cutting edge and biblically-based
          practical book on doing missions, and <em>Healing Power</em>, a
          revolutionary and missional book on divine healing.
        </p>
        <p>
          He was also a successful business executive for over 21 years in
          corporate software sales. For consecutive years, he ranked in the
          Top Five in sales worldwide. He enjoys chess and many sports, and
          has black belts in tae kwon do and kung fu. He and his wife,
          Vicky, have three adult children, Brandon, Vanessa and Ryan, and
          one daughter-in-law, Alexis.
        </p>
        <div className="rounded-lg border border-gold/40 bg-panel p-6 text-center">
          <p className="text-foreground">
            Invite Dr. Terry Wong to speak at your church or event.
          </p>
          <a
            href="/speaking-request"
            className="mt-4 inline-block rounded-full bg-gold px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-background hover:bg-gold-light"
          >
            Request Terry to Speak
          </a>
        </div>
      </div>
    </div>
  );
}
