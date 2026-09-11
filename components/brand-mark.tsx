type Props = {
  /** rendered height in px; the badge is square at this size */
  height?: number;
  tone?: "accent" | "ink";
  className?: string;
};

/**
 * "GV" monogram badge — a text-based placeholder lockup for Gonzalo Villasuso.
 * TODO: replace with the client's real logo file once supplied; this exists
 * so the header/footer aren't showing the previous RS Motors mark.
 */
export function BrandMark({ height = 24, tone = "accent", className }: Props) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-semibold ${
        tone === "accent" ? "bg-red text-white" : "bg-surface-hi text-ink"
      } ${className ?? ""}`}
      style={{ height, width: height, fontSize: height * 0.44, letterSpacing: "-0.02em" }}
    >
      GV
    </span>
  );
}
