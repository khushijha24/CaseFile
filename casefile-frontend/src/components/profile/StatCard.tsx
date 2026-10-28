export default function StatCard({
  value,
  label,
}: {
  value: string | number;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-navy-edge bg-navy px-4 py-6 text-center">
      <p className="font-display text-3xl text-gold">{value}</p>
      <p className="mt-1 text-sm text-white/50">{label}</p>
    </div>
  );
}