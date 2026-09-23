export function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-full bg-linear-to-r from-transparent via-gold to-transparent ${className}`}
      aria-hidden="true"
    />
  );
}

export function GoldUnderline({ className = "w-28" }: { className?: string }) {
  return <div className={`mt-3 h-px bg-gold ${className}`} aria-hidden="true" />;
}
