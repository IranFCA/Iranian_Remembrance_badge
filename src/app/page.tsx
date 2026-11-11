import type { Metadata } from "next";
import Link from "next/link";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const pins = [
  {
    href: "/laleh",
    src: `${base}/pin-sample.jpg`,
    title: "سنجاق لاله",
    alt: "سنجاق لاله: هشت گلبرگ سرخ و تاج پهلوی",
  },
  {
    href: "/nilufar",
    src: `${base}/nilufar-pin-photo.png`,
    title: "سنجاق نیلوفر",
    alt: "سنجاق نیلوفر: دوازده گلبرگ سرخ و تاج پهلوی",
  },
] as const;

export const metadata: Metadata = {
  title: "پیشنهاد سنجاق سینه یادبود جاویدنامان ایران",
};

export default function Page() {
  return (
    <main
      dir="ltr"
      className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-24"
    >
      <h1
        lang="fa"
        dir="rtl"
        className="font-persian text-4xl leading-tight text-gold-2 sm:text-5xl"
      >
        پیشنهاد سنجاق سینه یادبود جاویدنامان ایران
      </h1>
      <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
        {pins.map((pin) => (
          <Link key={pin.href} href={pin.href} className="group block">
            <div className="stage relative">
              <Corners />
              <div className="flex min-h-[18rem] items-center justify-center p-8 sm:min-h-[26rem] sm:p-12">
                <img src={pin.src} alt={pin.alt} className="h-auto w-full object-contain" />
              </div>
            </div>
            <h2
              lang="fa"
              dir="rtl"
              className="font-persian mt-7 text-center text-4xl text-gold transition-colors group-hover:text-gold-2 sm:mt-8 sm:text-5xl"
            >
              {pin.title}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}

function Corners() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-3 z-10">
      <span className="absolute top-0 left-0 h-4 w-4 border-t border-l border-gold/80" />
      <span className="absolute top-0 right-0 h-4 w-4 border-t border-r border-gold/80" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-gold/80" />
      <span className="absolute right-0 bottom-0 h-4 w-4 border-r border-b border-gold/80" />
    </div>
  );
}
