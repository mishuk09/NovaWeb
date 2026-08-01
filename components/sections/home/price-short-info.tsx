import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { homePricing } from "@/config/home-content";
import { Button } from "@/components/ui/button";

export function PriceShortInfo() {
  const customPackage = homePricing[3];

  return (
    <div className="relative z-10 mb-8 md:-mt-40 md:mb-10">
      <Container>
        <Card className="overflow-hidden mt-[-330px] rounded-lg bg-gradient-to-br from-[#3b12a8] via-[#4d25ce] to-[#280c7a] px-6 py-10 shadow-2xl md:px-12 md:py-12">
          {/* Background Graphic */}
          <div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 opacity-10">
            <svg
              width="350"
              height="350"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M50 10L84.641 30V70L50 90L15.359 70V30L50 10Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between lg:gap-8">
            {/* Left Content */}
            <div className="flex-1 space-y-5 md:max-w-xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                Need Something Different?
              </p>
              <h3 className="font-heading text-4xl font-bold leading-[1.15] text-white">
                {customPackage.subtitle}
              </h3>

              {/* Features List (Replaced Paragraph, using flex-wrap to save vertical space) */}
              <div className="flex flex-wrap gap-3 pt-2">
                {customPackage.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex w-max items-center gap-2.5 rounded-lg bg-white px-3 py-2 shadow-md"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#6366f1]">
                      <Check className="h-3 w-3 stroke-[3] text-white" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-4 flex w-full items-center rounded-lg bg-white p-1.5 shadow-xl">
                <Button
                  asChild
                  className="rounded-lg bg-[#6366f1] px-6 hover:bg-[#4f46e5]"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2"
                  >
                    {customPackage.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Content / Just the Image Now */}
            <div className="relative flex min-h-[300px] flex-1 items-center justify-center md:justify-end">
              <img
                src="https://www.virtualpbx.com/wp-content/uploads/2021/10/Improve-Microsoft-Teams-Call-Performance.png"
                alt="IT Expert"
                className="relative z-10 h-[300px] w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}
