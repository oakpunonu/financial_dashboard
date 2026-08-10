"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ArrowLeftRight, PiggyBank, Settings } from "lucide-react";

const navItems = [
  { label: "Overview", href: "/", icon: LayoutDashboard },
  { label: "Transactions", href: "/transactions", icon: ArrowLeftRight },
  { label: "Savings", href: "/savings", icon: PiggyBank },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="relative w-60 shrink-0 border-r border-border bg-surface px-5 py-8">
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-brass/40 to-transparent" />
      <h1 className="font-display text-xl tracking-tight text-text mb-10">Ledger</h1>
      <nav className="flex flex-col gap-1">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                active ? "bg-ink text-brass" : "text-muted hover:text-text hover:bg-ink/60"
              }`}
            >
              <Icon size={16} />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}