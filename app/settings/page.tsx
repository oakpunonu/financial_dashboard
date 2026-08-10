export default function SettingsPage() {
  return (
    <div>
      <h1 className="font-display text-3xl text-text mb-1">Settings</h1>
      <p className="text-sm text-muted mb-8">Manage your profile and preferences</p>

      <div className="rounded-lg border border-border bg-surface p-6 max-w-md flex flex-col gap-5">
        <div>
          <label className="block text-xs uppercase tracking-wider text-muted mb-2">Full Name</label>
          <input
            defaultValue="Osmond Akpunonu"
            className="w-full rounded-md border border-border bg-ink px-3 py-2 text-sm text-text outline-none focus:border-brass"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-muted mb-2">Currency</label>
          <select className="w-full rounded-md border border-border bg-ink px-3 py-2 text-sm text-text outline-none focus:border-brass">
            <option>NGN (₦)</option>
            <option>USD ($)</option>
            <option>EUR (€)</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-text">Email notifications</span>
          <input type="checkbox" defaultChecked className="h-4 w-4 accent-brass" />
        </div>
        <button className="mt-2 rounded-md bg-brass px-4 py-2 text-sm font-medium text-ink hover:opacity-90 transition-opacity">
          Save Changes
        </button>
      </div>
    </div>
  );
}