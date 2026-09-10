import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

/** Stacked MotoGuru logo — 1236 × 1600. */
const LOGO_WIDTH = 1236;
const LOGO_HEIGHT = 1600;

type Props = {
  /** Visual height in px; width is derived from the intrinsic ratio. */
  height?: number;
  href?: string | null;
  className?: string;
  priority?: boolean;
};

export function SiteLogo({
  height = 40,
  href = "/",
  className = "",
  priority = false,
}: Props) {
  const width = Math.round((height * LOGO_WIDTH) / LOGO_HEIGHT);

  const image = (
    <Image
      src="/images/motoguru-logo.jpg"
      alt={site.name}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      className={`object-contain object-left ${className}`}
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
