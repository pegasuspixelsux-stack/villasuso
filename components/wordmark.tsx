import { BrandMark } from "./brand-mark";

/** GV monogram + tracked "VILLASUSO" (or the full name) — the shared brand lockup (nav, footer, card overlays). */
export function Wordmark({
  height = 20,
  priority = false,
  full = false,
}: {
  height?: number;
  /** unused now that the mark is text, not an <Image> — kept so callers don't need to change */
  priority?: boolean;
  /** spell out "GONZALO VILLASUSO" instead of just "VILLASUSO" — used in the top nav */
  full?: boolean;
}) {
  void priority;
  return (
    <span className="flex items-center gap-2.5">
      <BrandMark height={height} />
      {full ? (
        <span
          className="whitespace-nowrap font-semibold tracking-[0.08em] text-ink"
          style={{ fontSize: height * 0.5 }}
        >
          <span className="hidden sm:inline">GONZALO </span>VILLASUSO
        </span>
      ) : (
        <span
          className="font-semibold tracking-[0.14em] text-ink"
          style={{ fontSize: height * 0.62 }}
        >
          VILLASUSO
        </span>
      )}
    </span>
  );
}
