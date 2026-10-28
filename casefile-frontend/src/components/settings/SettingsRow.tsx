export default function SettingsRow({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-edge py-4 first:pt-0 last:border-0 last:pb-0">
      <div className="max-w-md">
        <p className="text-sm font-medium">{title}</p>
        {description && (
          <p className="mt-1 text-sm text-white/50">{description}</p>
        )}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}