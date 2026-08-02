import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const styles = {
  primary:
    "bg-accent text-ink hover:bg-accent-dark shadow-[0_10px_30px_rgba(249,155,39,0.35)]",
  secondary:
    "bg-ink text-white hover:bg-foreground",
  ghost:
    "border border-line bg-transparent text-foreground hover:border-accent hover:text-accent-dark",
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
