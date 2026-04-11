export default function Loading() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-32 text-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-foreground" />
      <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        Loading
      </p>
    </div>
  );
}
