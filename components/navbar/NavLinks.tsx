import Link from "next/link";

interface NavLinksProps {
  className?: string;
}

const NavLinks = ({ className }: NavLinksProps) => {
  return (
    <div className={className}>
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base whitespace-nowrap"
      >
        Cine Hive
      </Link>
      <Link
        href="/movie"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Movies
      </Link>
      <Link
        href="/tv"
        className="text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
      >
        TV Shows
      </Link>
    </div>
  );
};

export default NavLinks;
