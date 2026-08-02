import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";

export function HeroInfoStrip() {
  return (
    <div className="absolute inset-x-0 top-2 z-30">
      <Container>
        <div className="  flex-col gap-2 hidden md:flex  px-4 py-3 text-sm   md:flex-row md:items-center md:justify-between md:px-0 ">
          <p className="font-semibold text-foreground">Welcome to our IT Solution Company!</p>
          <div className="flex flex-col gap-2 bg-white p-1 text-foreground rounded-xs px-2 md:flex-row md:items-center md:gap-6">
            <Link href="mailto:support@novanest.my" className="inline-flex text-black items-center  font-semibold gap-2    ">
              <Mail className="h-4 w-4" />
              support@novanest.my
            </Link>
            <span className="inline-flex cursor-pointer text-black font-semibold items-center gap-2">
              <MapPin className="h-4 w-4" />
             Melaka, Malaysia
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}