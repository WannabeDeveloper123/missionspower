export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-panel">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          Missions Power Ministries, Inc. &copy; {new Date().getFullYear()}
        </p>
        <div className="flex gap-6">
          <a href="/privacy-policy" className="hover:text-gold">
            Privacy Policy
          </a>
          <a href="/connect" className="hover:text-gold">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
