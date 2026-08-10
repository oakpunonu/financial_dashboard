export default function StatCard({
  label,
  value,
  change,
  positive,
}: {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}) {
  return (
    <div className="rounded-lg border border-border bg-surface p-5">
      <p className="text-xs uppercase tracking-wider text-muted mb-2">{label}</p>
      <p className="font-mono text-2xl text-text mb-1">{value}</p>
      <p className={`text-xs font-mono ${positive ? "text-gain" : "text-loss"}`}>{change}</p>
    </div>
  );
}