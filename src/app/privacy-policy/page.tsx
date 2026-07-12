import PageHeader from "@/components/PageHeader";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <div className="mx-auto max-w-3xl space-y-4 px-6 py-14 leading-relaxed text-foreground/90">
        <p>
          Missions Power Ministries, Inc. respects your privacy. Any
          information you submit through this website, including via our
          contact form, is used solely to respond to your inquiry and is not
          sold or shared with third parties for marketing purposes.
        </p>
        <p>
          If you have questions about this policy, please reach out through
          our <a className="text-gold hover:text-gold-light" href="/connect">Connect</a> page.
        </p>
      </div>
    </div>
  );
}
