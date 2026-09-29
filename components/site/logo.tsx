import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2"
      aria-label="novanest home"
    >
      <Image
        src="/lightlogo.png"
        alt="novanest"
        width={140}
        height={60}
        className="h-14 w-auto dark:hidden"
      />
      <Image
        src="/darklogo.png"
        alt="novanest"
        width={140}
        height={60}
        className="hidden h-14 w-auto dark:block"
      />
    </Link>
  );
}
