export function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M42 6.5 50 3l8 3.5V12l-3.2 2.2L50 11.2l-4.8 3L42 12V6.5Z" />
      <path d="M36 4.8h4.2l1.6 3.8 3.8-1.2.8 3-3.4 2.2 3.4 2.2-.8 3-3.8-1.2L40.2 20H36l-1.6-3.8-3.8 1.2-.8-3 3.4-2.2-3.4-2.2.8-3 3.8 1.2L36 4.8Z" />
      <path d="M14 30 32 14h8l12 26L64 14h8l18 16v50H76V40L58 74H42L24 40v40H14V30Z" />
      <path d="M52 28c12.5 0 22 9.2 22 22.2 0 8.4-4.2 15.4-11 19.2l8.6 16.6H60.2L54 70.4h-2.4C39.8 70.4 30 61.2 30 49.4 30 37.4 39.2 28 52 28Zm0 10.6c-6.2 0-10.6 4.6-10.6 10.8S45.8 60.2 52 60.2s10.8-4.6 10.8-10.8S58.2 38.6 52 38.6Z" />
    </svg>
  );
}

export function Wordmark({
  className = "text-[1.05rem] tracking-[0.42em]",
}: {
  className?: string;
}) {
  return (
    <span className={`font-brand font-semibold text-gold ${className}`}>
      MSSQUEEN
    </span>
  );
}
