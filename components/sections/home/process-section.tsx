import { Search, LayoutTemplate, Code2, Rocket } from "lucide-react";
import { homeProcess } from "@/config/home-content";
import { FadeUp } from "@/components/motion/fade-up";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

// Theme-friendly colors that stay readable in both light and dark mode
const processConfig = [
  { color: "text-primary", bg: "bg-primary", icon: Search },
  { color: "text-accent", bg: "bg-accent", icon: LayoutTemplate },
  { color: "text-sky-600 dark:text-sky-400", bg: "bg-sky-600 dark:bg-sky-400", icon: Code2 },
  { color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-600 dark:bg-violet-400", icon: Rocket },
];

export function ProcessSection() {
  return (
    <Section id="our-process" className="relative bg-background/80 py-24 dark:bg-slate-950/60">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="A clear, structured workflow from idea to launch."
          description="This keeps delivery fast, communication transparent, and outcomes aligned with your business goals."
        />
      </Container>
        
      {/* 
        Adjusted to z-0 so it stays behind content. 
        Used bg-contain and bg-right to dock it correctly to the right side.
      */}
      <div className="absolute inset-0 right-0 z-0 hidden   bg-[url('/process.svg')] bg-right bg-contain bg-no-repeat md:block">
      </div>

      <div className="relative mt-20">
        <Container className="relative z-10">
          <div className="relative flex h-auto w-full flex-col   gap-12 pb-10  md:flex-row md:gap-0  md:pb-40">
            {/* Process Items */}
            {homeProcess.map((item, index) => {
            const config = processConfig[index % processConfig.length];
            const Icon = config.icon;

            // Stagger classes updated to match the trajectory of the new image's curve
            const staggerClasses = [
              "md:translate-y-[165px]",
              "md:translate-y-[140px]",
              "md:translate-y-[80px]",
              "md:translate-y-[-55px]",
            ];

            return (
              <FadeUp
                key={item.step}
                delay={index * 0.1}
                className={cn(
                  "relative z-10 flex flex-1 flex-col items-center text-center",
                  staggerClasses[index]
                )}
              >
                {/* Top Icon */}
                <div className={cn("mb-4 flex items-center justify-center", config.color)}>
                  <Icon className="h-8 w-8" strokeWidth={2.5} />
                </div>

                {/* Content Box */}
                <div className="mb-2 flex min-h-[100px] flex-col items-center space-y-2 px-2 md:mb-0">
                  <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="max-w-[250px] text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Vertical Connector Line (Desktop Only) */}
                <div className={cn("hidden h-16 w-[3px] md:block mt-2 rounded-full", config.bg)} />

                {/* Number Node (Sits on the arrow) */}
                <div
                  className={cn(
                    "mt-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white shadow-lg md:mt-2",
                    config.bg
                  )}
                >
                  {item.step}
                </div>
              </FadeUp>
            );
            })}
          </div>
        </Container>
      </div>
    </Section>
  );
}