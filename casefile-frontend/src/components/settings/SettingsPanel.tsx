export default function SettingsPanel({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-navy-edge bg-navy p-6">
      <h2 className="font-display text-2xl">{title}</h2>
      {description && <p className="mt-1 text-sm text-white/50">{description}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}