import { ArrowRight, Check, Globe2, LockKeyhole, Mail, MessageCircle, Search, Server, ShieldCheck, Sparkles } from "lucide-react";

type ServiceVisualProps = { variant: "website" | "infrastructure" | "growth" };

/** Decorative product concepts; all colors inherit the site's theme tokens. */
export function ServiceVisual({ variant }: ServiceVisualProps) {
  return (
    <div aria-hidden="true" className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-muted/30 to-accent/10 p-6 sm:min-h-[460px] sm:p-10">
      <div className="absolute -left-20 -top-20 size-72 rounded-full border border-primary/10" />
      <div className="absolute -bottom-28 -right-16 size-96 rounded-full border-[40px] border-accent/5" />

      {variant === "website" && <div className="relative w-full max-w-md">
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-3"><span className="size-2 rounded-full bg-primary/40" /><span className="size-2 rounded-full bg-primary/25" /><span className="size-2 rounded-full bg-primary/15" /><span className="ml-4 flex-1 rounded bg-muted/60 py-1 text-center text-[9px] text-muted-foreground">yourbusiness.my</span><LockKeyhole className="ml-2 size-3 text-accent" /></div>
          <div className="p-5 sm:p-7">
            <div className="mb-7 flex items-center justify-between"><span className="flex items-center gap-2 text-xs font-bold"><span className="size-4 rounded bg-primary" /> Your brand.</span><span className="h-1 w-16 rounded bg-muted" /></div>
            <div className="grid grid-cols-[1.2fr_0.8fr] items-center gap-4"><div><p className="text-[8px] font-bold uppercase tracking-widest text-accent dark:text-foreground">Made for what’s next</p><p className="mt-3 font-heading text-base font-semibold leading-tight sm:text-2xl">Big ideas.<br />Beautifully<br />connected.</p><div className="mt-4 h-1.5 w-full rounded bg-muted" /><div className="mt-2 h-1.5 w-3/4 rounded bg-muted" /><span className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-[9px] font-semibold text-primary-foreground">Let’s get started <ArrowRight className="size-3" /></span></div><div className="flex aspect-[0.8] items-center justify-center rounded-t-full rounded-b-2xl bg-primary/10"><Globe2 className="size-20 stroke-[0.8] text-primary" /></div></div>
            <div className="mt-7 grid grid-cols-3 gap-3">{["Thoughtful design", "Mobile ready", "Built for you"].map((text) => <div key={text} className="rounded-lg bg-muted/40 p-2 text-center"><Check className="mx-auto mb-2 size-4 text-accent" /><span className="text-[8px] font-medium">{text}</span></div>)}</div>
          </div>
        </div>
        <div className="relative -mt-2 ml-auto mr-3 flex w-fit items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-xs font-medium shadow-sm"><Sparkles className="size-4 text-primary" /> Your brand, brought to life.</div>
      </div>}

      {variant === "infrastructure" && <div className="relative w-full max-w-md">
        <div className="mb-5 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground"><ShieldCheck className="size-4 text-accent" /> A connected foundation</div>
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
          <div className="flex items-center gap-4 border-b border-border pb-5"><span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Server className="size-6" /></span><div><p className="text-lg font-semibold">Your business hub</p><p className="mt-1 text-xs text-muted-foreground">The essentials, all in place.</p></div></div>
          <div className="mt-2 divide-y divide-border/60">{[{ icon: Globe2, title: "Your own domain", sub: "A name that belongs to you" }, { icon: Server, title: "Website hosting", sub: "A home for your online presence" }, { icon: Mail, title: "Professional email", sub: "Every conversation, on brand" }, { icon: ShieldCheck, title: "Ongoing website care", sub: "Support beyond launch day" }].map(({ icon: Icon, title, sub }) => <div key={title} className="flex items-center gap-3 py-4"><Icon className="size-5 shrink-0 text-primary" /><div className="flex-1"><p className="text-sm font-medium">{title}</p><p className="mt-1 text-[11px] text-muted-foreground">{sub}</p></div><Check className="size-4 text-accent" /></div>)}</div>
        </div>
      </div>}

      {variant === "growth" && <div className="relative w-full max-w-md space-y-4">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"><p className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">From discovery to conversation</p><div className="flex items-center gap-3 rounded-full border border-border bg-background px-4 py-3"><Search className="size-4 shrink-0 text-primary" /><span className="text-xs text-muted-foreground">Find a business like yours</span></div><div className="mt-5 flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-xl bg-primary/10"><Globe2 className="size-5 text-primary" /></span><div><p className="text-sm font-semibold text-primary">Your business, discovered.</p><p className="mt-1 text-xs text-muted-foreground">Reach people looking for what you do.</p></div></div></div>
        <div className="mx-auto h-7 w-px border-l-2 border-dashed border-primary/30" />
        <div className="ml-5 rounded-2xl border border-border bg-card p-5 shadow-sm sm:ml-10"><div className="mb-4 flex items-center gap-2 text-sm font-semibold"><MessageCircle className="size-5 text-accent" /> Keep the conversation going</div><div className="mr-8 rounded-xl rounded-tl-none bg-muted/60 p-3 text-xs leading-5">Hi! I’d love to learn more about your services.</div><div className="ml-8 mt-3 rounded-xl rounded-tr-none bg-primary p-3 text-xs leading-5 text-primary-foreground">Happy to help. What can we do for your business?</div><p className="mt-4 flex items-center gap-2 text-[10px] font-medium text-muted-foreground"><Sparkles className="size-3 text-primary" /> Search · Chat · Automation</p></div>
      </div>}
    </div>
  );
}
