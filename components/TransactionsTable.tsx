const transactions = [
  { name: "Freelance Payment", category: "Income", date: "Aug 5", amount: "+₦185,000", positive: true },
  { name: "Netflix Subscription", category: "Entertainment", date: "Aug 4", amount: "-₦4,500", positive: false },
  { name: "Grocery Store", category: "Food", date: "Aug 3", amount: "-₦22,300", positive: false },
  { name: "Transfer to Savings", category: "Savings", date: "Aug 1", amount: "-₦50,000", positive: false },
];

export default function TransactionsTable() {
  return (
    <div className="rounded-lg border border-border bg-surface p-6">
      <h2 className="font-display text-lg text-text mb-5">Recent Transactions</h2>
      <div className="flex flex-col gap-4">
        {transactions.map((t) => (
          <div key={t.name} className="flex items-baseline gap-2">
            <span className="text-sm text-text whitespace-nowrap">{t.name}</span>
            <span className="flex-1 border-b border-dotted border-border translate-y-[-3px]" />
            <span className="text-xs text-muted whitespace-nowrap">{t.category}</span>
            <span className={`font-mono text-sm whitespace-nowrap ${t.positive ? "text-gain" : "text-loss"}`}>
              {t.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}