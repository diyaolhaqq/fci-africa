export default function Loading() {
  return (
    <div className="flex min-h-[70svh] items-center justify-center px-5">
      <div className="w-full max-w-sm rounded-lg border border-line bg-white/[0.035] p-6">
        <div className="mb-5 h-2 rounded-sm bg-accent/70" />
        <div className="grid gap-3">
          <div className="h-4 rounded-sm bg-white/[0.08]" />
          <div className="h-4 w-4/5 rounded-sm bg-white/[0.06]" />
          <div className="h-4 w-2/3 rounded-sm bg-white/[0.05]" />
        </div>
      </div>
    </div>
  );
}
