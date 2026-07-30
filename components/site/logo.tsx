import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="novanest home">
      <Image src="/logo.svg" alt="novanest" width={140} height={60} className="h-14 w-auto" />
    </Link>
  );
}

