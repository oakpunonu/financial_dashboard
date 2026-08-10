import StatCard from "@/components/StatCard";
import TransactionsTable from "@/components/TransactionsTable";

export default function Home() {
  return (
    <>
      <p className="text-sm text-muted mb-1">Total Balance</p>
      <h1 className="font-display text-5xl text-text mb-8">₦1,248,900.00</h1>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard label="Income (Aug)" value="₦450,000" change="+12.4% vs Jul" positive />
        <StatCard label="Expenses (Aug)" value="₦186,200" change="-4.1% vs Jul" positive />
        <StatCard label="Savings Rate" value="58%" change="+6pts vs Jul" positive />
      </div>

      <TransactionsTable />
    </>
  );
}