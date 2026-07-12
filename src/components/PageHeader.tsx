export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="border-b border-border bg-panel">
      <div className="mx-auto max-w-4xl px-6 py-14 text-center">
        {eyebrow && (
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
      </div>
    </div>
  );
}
