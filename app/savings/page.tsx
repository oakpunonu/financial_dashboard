const goals = [
  { name: "Emergency Fund", target: 1000000, saved: 620000 },
  { name: "New Laptop", target: 450000, saved: 310000 },
  { name: "Vacation", target: 300000, saved: 90000 },
];

export default function SavingsPage() {
  return (
    <div>
      <h1 className="font-display text-3xl text-text mb-1">Savings Goals</h1>
      <p className="text-sm text-muted mb-8">Track progress toward what you&apos;re saving for</p>

      <div className="flex flex-col gap-4">
        {goals.map((g) => {
          const pct = Math.round((g.saved / g.target) * 100);
          return (
            <div key={g.name} className="rounded-lg border border-border bg-surface p-5">
              <div className="flex items-baseline justify-between mb-3">
                <h2 className="text-text">{g.name}</h2>
                <span className="font-mono text-sm text-muted">
                  ₦{g.saved.toLocaleString()} / ₦{g.target.toLocaleString()}
                </span>
              </div>
              <div className="h-2 rounded-full bg-ink overflow-hidden">
                <div className="h-full bg-brass" style={{ width: `${pct}%` }} />
              </div>
              <p className="mt-2 text-xs font-mono text-brass">{pct}% funded</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}