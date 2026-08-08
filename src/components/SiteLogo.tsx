import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

/** Intrinsic logo size: 500 × 236 (≈ 2.12:1). */
const LOGO_WIDTH = 500;
const LOGO_HEIGHT = 236;

type Props = {
  /** Visual height in px; width is derived from the intrinsic ratio. */
  height?: number;
  href?: string | null;
  className?: string;
  priority?: boolean;
  inverted?: boolean;
};

export function SiteLogo({
  height = 40,
  href = "/",
  className = "",
  priority = false,
  inverted = false,
}: Props) {
  const width = Math.round((height * LOGO_WIDTH) / LOGO_HEIGHT);

  const image = (
    <Image
      src="/images/mg-2026-web-logo.png"
      alt={site.name}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      className={`object-contain object-left ${inverted ? "brightness-0 invert" : ""} ${className}`}
      style={{ width, height, maxWidth: "100%" }}
    />
  );

  if (!href) return image;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center"
      aria-label={site.name}
      style={{ width, height }}
    >
      {image}
    </Link>
  );
}
