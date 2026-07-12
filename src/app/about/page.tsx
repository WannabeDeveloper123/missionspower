import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <div>
      <PageHeader eyebrow="About the Author" title="About Terry" />
      <div className="mx-auto max-w-3xl space-y-6 px-6 py-14 leading-relaxed text-foreground/90">
        <p>
          Terry Wong has been the senior pastor of Calvary Assembly of God in
          Honolulu, Hawaii for over ten years. He was licensed as an
          Assemblies of God minister in 1987, ordained in 1990, and has been
          an Assemblies of God presbyter for over four years. He has been a
          founding pastor, youth pastor, and evangelist. He received his
          Bachelor of Science in Mathematics and Computer Science from the
          University of Victoria and a Master of Arts in Theology from Fuller
          Theological Seminary, where he is also completing his Doctor of
          Ministry.
        </p>
        <p>
          Terry is a sought-after international speaker in Australia, Brazil,
          Canada, China, East Timor, India, Japan, Malaysia, Nepal,
          Singapore, South Africa, Sri Lanka, and Trinidad, and a regular
          national speaker throughout the U.S. He is extremely passionate
          about missions, as he believes that every Christian should either
          be sent or send into the mission field.
        </p>
        <p>
          Under his leadership at Calvary Assembly of God, the church has
          been transformed from being inward and family-oriented to being
          outward and missions-oriented. Calvary Assembly of God conducts an
          annual missions conference with international and national
          speakers inspiring the congregation to give financially and go
          abroad on short-term and long-term missions trips. Their
          sacrificial missions giving has resulted in them ranking
          consistently in the Top Five in per capita missions giving among
          all U.S. Assemblies of God churches. Their giving together with
          their going has resulted in over 200 churches being planted in
          China, India, East Timor, and Brazil, including over 10,000
          Chinese attending those churches in China.
        </p>
        <p>
          Terry goes on regular trips to uncover new church-planting
          opportunities; preaches to and encourages local pastors and
          missionaries; conducts healing services, especially for
          unbelievers; and sets up missions trips for Calvary Assembly of
          God laity. He is the author of{" "}
          <em>Missions Power</em>, a cutting-edge and Biblically-based
          practical book on doing missions.
        </p>
        <p>
          Terry was also a successful business executive for over 21 years
          in corporate software sales, ranking in the Top Five in sales
          worldwide for consecutive years. He enjoys many sports and holds
          black belts in tae kwon do and kung fu. He and his wife, Vicky,
          have three children, Brandon, Vanessa, and Ryan.
        </p>
        <div className="rounded-lg border border-gold/40 bg-panel p-6 text-center">
          <p className="text-foreground">
            Download the speaking request form and invite Terry to speak!
          </p>
          <a
            href="mailto:info@missionspower.com?subject=Speaking%20Request"
            className="mt-4 inline-block rounded-full bg-gold px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-background hover:bg-gold-light"
          >
            Request Terry to Speak
          </a>
        </div>
      </div>
    </div>
  );
}
