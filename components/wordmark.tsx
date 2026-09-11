import { BrandMark } from "./brand-mark";

/** GV monogram + tracked "VILLASUSO" — the shared brand lockup (nav, footer, card overlays). */
export function Wordmark({
  height = 20,
  priority = false,
}: {
  height?: number;
  /** unused now that the mark is text, not an <Image> — kept so callers don't need to change */
  priority?: boolean;
}) {
  void priority;
  return (
    <span className="flex items-center gap-2.5">
      <BrandMark height={height} />
      <span
        className="font-semibold tracking-[0.14em] text-ink"
        style={{ fontSize: height * 0.62 }}
      >
        VILLASUSO
      </span>
    </span>
  );
}
