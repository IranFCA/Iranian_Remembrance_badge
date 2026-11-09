"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { copy, type Lang } from "@/lib/copy";
import {
  AssembledPin,
  ButtonPiece,
  ClutchPiece,
  FeltPiece,
  SectionCut,
} from "@/components/laleh-pin";

type View = "flower" | "pieces" | "lapel";

export function Proposal() {
  const [lang, setLang] = useState<Lang>("fa");
  const [view, setView] = useState<View>("flower");
  const t = copy[lang];
  const fa = lang === "fa";

  useEffect(() => {
    document.documentElement.lang = fa ? "fa" : "en";
    document.documentElement.dir = fa ? "rtl" : "ltr";
    document.title = t.title;
  }, [fa, t.title]);

  return (
    <div
      lang={fa ? "fa" : "en"}
      dir={fa ? "rtl" : "ltr"}
      className={fa ? "font-persian" : "font-sans"}
    >
      <header className="mx-auto flex w-full max-w-6xl items-start justify-between gap-4 px-5 pt-6 sm:px-8 sm:pt-8">
        <div>
          <p className="text-[0.68rem] tracking-[0.22em] text-gold uppercase">
            {t.kicker}
          </p>
          <p
            className={`mt-1 text-lg text-gold-2 ${fa ? "font-persian" : "font-serif tracking-[0.14em]"}`}
          >
            {t.mark}
          </p>
        </div>
        <div
          role="group"
          aria-label={t.langLabel}
          className="flex items-center gap-1 text-sm"
        >
          <LangButton
            pressed={!fa}
            onClick={() => setLang("en")}
            label="English"
          >
            EN
          </LangButton>
          <span aria-hidden className="text-gold/40">
            /
          </span>
          <LangButton
            pressed={fa}
            onClick={() => setLang("fa")}
            label="فارسی"
          >
            فا
          </LangButton>
        </div>
      </header>

      <p
        dir="ltr"
        className="mx-auto mt-8 flex w-full max-w-6xl flex-wrap items-baseline gap-x-5 gap-y-1 px-5 text-sm text-mist sm:px-8"
      >
        {fa ? (
          <>
            <span className="font-persian" lang="fa" dir="rtl">
              ۱۸ و ۱۹ دی ۱۴۰۴
            </span>
            <span aria-hidden className="text-gold/50">
              ·
            </span>
            <span className="font-sans tracking-[0.14em]">8–9 January 2026</span>
          </>
        ) : (
          <>
            <span className="font-sans tracking-[0.14em]">8–9 January 2026</span>
            <span aria-hidden className="text-gold/50">
              ·
            </span>
            <span className="font-persian" lang="fa" dir="rtl">
              ۱۸ و ۱۹ دی ۱۴۰۴
            </span>
          </>
        )}
      </p>

      <main className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div className="mt-6 grid items-center gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-12">
          <section className="stage relative min-h-[22rem] overflow-hidden sm:min-h-[34rem]">
            <Corners />
            <div className="flex h-full min-h-[22rem] flex-col sm:min-h-[34rem]">
              <div
                id={`panel-${view}`}
                role="tabpanel"
                aria-labelledby={`tab-${view}`}
                className="flex flex-1 items-center justify-center px-4 py-8"
              >
                {view === "flower" && (
                  <div className="w-full max-w-[26rem]">
                    <AssembledPin
                      className="pin-shadow w-full"
                      label={t.pinLabel}
                    />
                    <div className="mx-auto mt-1 w-[88%]">
                      <div className="flex items-center gap-2 text-[0.68rem] tracking-[0.16em] text-gold-2 uppercase">
                        <span className="h-2 w-px bg-gold" />
                        <span className="h-px flex-1 bg-gold/70" />
                        <span className={fa ? "font-persian normal-case" : ""}>
                          {t.scale}
                        </span>
                        <span className="h-px flex-1 bg-gold/70" />
                        <span className="h-2 w-px bg-gold" />
                      </div>
                    </div>
                  </div>
                )}
                {view === "pieces" && (
                  <div className="w-full">
                    <div className="grid grid-cols-3 items-end gap-2 sm:gap-4">
                      <figure className="text-center">
                        <FeltPiece className="mx-auto w-full max-w-[11rem]" label={t.pieces.felt} />
                        <figcaption className="mt-3 text-xs text-gold-2 sm:text-sm">
                          {t.pieces.felt}
                        </figcaption>
                      </figure>
                      <figure className="text-center">
                        <ButtonPiece
                          className="mx-auto w-full max-w-[9.5rem]"
                          label={t.pieces.pin}
                        />
                        <figcaption className="mt-3 text-xs text-gold-2 sm:text-sm">
                          {t.pieces.pin}
                        </figcaption>
                      </figure>
                      <figure className="text-center">
                        <ClutchPiece
                          className="mx-auto w-full max-w-[8.5rem]"
                          label={t.pieces.clutch}
                        />
                        <figcaption className="mt-3 text-xs text-gold-2 sm:text-sm">
                          {t.pieces.clutch}
                        </figcaption>
                      </figure>
                    </div>
                    <p className="mx-auto mt-6 max-w-md text-center text-sm leading-6 text-mist">
                      {t.piecesNote}
                    </p>
                  </div>
                )}
                {view === "lapel" && (
                  <div className="w-full max-w-md">
                    <div className="wool relative aspect-[5/6] overflow-hidden">
                      <div
                        className="wool-face absolute inset-0"
                        style={{
                          clipPath:
                            "polygon(46% 0, 100% 0, 100% 100%, 64% 100%, 30% 54%, 56% 36%)",
                        }}
                      />
                      <div className="absolute top-[8%] left-[46%] h-[28%] w-px bg-black/50" />
                      <div className="absolute top-[34%] left-[40%] w-[40%] -rotate-2">
                        <AssembledPin label={t.pinLabel} />
                      </div>
                    </div>
                    <p className="mt-3 text-center text-sm text-gold-2">
                      {t.lapelCaption}
                    </p>
                  </div>
                )}
              </div>
              <div
                role="tablist"
                aria-label={t.viewsLabel}
                className="no-print flex justify-center gap-1 px-3 pb-4 sm:gap-2"
              >
                {(
                  [
                    ["flower", t.views.flower],
                    ["pieces", t.views.pieces],
                    ["lapel", t.views.lapel],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    id={`tab-${id}`}
                    aria-selected={view === id}
                    aria-controls={`panel-${id}`}
                    onClick={() => setView(id)}
                    className={`min-h-11 cursor-pointer px-3 text-[0.72rem] tracking-[0.16em] uppercase transition-colors sm:px-4 ${
                      view === id
                        ? "text-gold-2 underline decoration-gold decoration-1 underline-offset-8"
                        : "text-mist/70 hover:text-gold-2"
                    } ${fa ? "font-persian tracking-normal" : ""}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <div>
            <h1
              className={`text-[3.1rem] leading-[0.95] text-paper sm:text-6xl ${
                fa ? "font-persian leading-[1.25]" : "font-serif"
              }`}
            >
              {t.title}
            </h1>
            <p
              className={`mt-5 max-w-xl text-xl leading-snug text-gold-2 ${
                fa ? "font-persian text-lg leading-8" : "font-serif"
              }`}
            >
              {t.deck}
            </p>
            <div className="mt-5 max-w-xl space-y-4 text-base leading-7 text-mist">
              {t.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a
              href="#maker"
              className={`mt-7 inline-flex min-h-11 items-center gap-2 text-[0.72rem] tracking-[0.18em] text-gold uppercase hover:text-gold-2 ${
                fa ? "font-persian tracking-normal text-sm" : ""
              }`}
            >
              {t.toMaker}
              <span aria-hidden>↓</span>
            </a>
          </div>
        </div>

        <figure className="mx-auto mt-20 max-w-3xl text-center">
          <blockquote
            className="font-persian text-3xl leading-relaxed text-paper sm:text-4xl"
            lang="fa"
            dir="rtl"
          >
            {t.epigraph}
          </blockquote>
          {fa ? null : (
            <p className="font-serif mt-4 text-xl text-mist italic">{t.epigraphEn}</p>
          )}
          <figcaption className="mt-4 text-sm tracking-[0.14em] text-gold uppercase">
            {t.epigraphBy}
          </figcaption>
        </figure>

        <section className="mx-auto mt-16 max-w-3xl">
          <ol className="divide-y divide-gold/20">
            {t.points.map((point) => (
              <li key={point.n} className="grid gap-3 py-7 sm:grid-cols-[4.5rem_1fr] sm:gap-6">
                <span
                  className={`text-gold ${fa ? "font-persian text-lg" : "font-serif text-2xl"}`}
                >
                  {point.n}
                </span>
                <div>
                  <h2
                    className={`text-2xl text-paper ${fa ? "font-persian" : "font-serif"}`}
                  >
                    {point.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-base leading-7 text-mist">
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto mt-4 max-w-3xl border-t border-gold/25 pt-8">
          <h2 className={`text-2xl text-paper ${fa ? "font-persian" : "font-serif"}`}>
            {t.wearTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-mist">{t.wearBody}</p>
        </section>

        <figure className="mx-auto mt-16 max-w-xl">
          <div className="stage relative">
            <Corners />
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/pin-sample.jpg`}
              alt={t.photoAlt}
              width={1024}
              height={1024}
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm leading-6 text-mist">
            {t.photoCaption}
          </figcaption>
        </figure>

        <section
          id="maker"
          className="maker-card mt-20 scroll-mt-8 px-5 py-8 text-ink sm:px-10 sm:py-12"
        >
          <p className="text-[0.68rem] tracking-[0.2em] text-brass uppercase">
            {t.makerKicker}
          </p>
          <h2
            className={`mt-2 text-4xl leading-tight sm:text-5xl ${
              fa ? "font-persian" : "font-serif"
            }`}
          >
            {t.makerTitle}
          </h2>
          <p
            className={`mt-3 max-w-2xl text-xl leading-snug ${
              fa ? "font-persian text-lg leading-8" : "font-serif"
            }`}
          >
            {t.makerLede}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/80">{t.process}</p>

          <ol className="mt-8 grid gap-4 sm:grid-cols-3">
            {t.steps.map((step) => (
              <li key={step.n} className="border-t border-ink/15 pt-3">
                <span className={`text-brass ${fa ? "font-persian text-lg" : "font-serif text-2xl"}`}>
                  {step.n}
                </span>
                <p className="mt-2 text-sm leading-6">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div>
              <h3 className={`text-xl ${fa ? "font-persian" : "font-serif"}`}>
                {t.diagramTitle}
              </h3>
              <SectionCut className="mt-3 w-full" title={t.diagramTitle} />
              <p className="text-sm leading-6 text-ink/70">{t.diagramNote}</p>
            </div>
            <ul>
              {t.specs.map((row) => (
                <li
                  key={row.label}
                  className="grid grid-cols-1 gap-0.5 border-t border-ink/15 py-2.5 sm:grid-cols-[9.5rem_1fr] sm:gap-3"
                >
                  <span className="text-sm text-ink/60">{row.label}</span>
                  <span className="text-sm">{row.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-8 flex flex-wrap gap-6">
            {[
              "bg-[#b42332]",
              "bg-[#161311]",
              "bg-[linear-gradient(160deg,#f3e2b8,#8a6424)]",
            ].map((swatch, index) => (
              <li key={t.swatches[index].name} className="flex items-center gap-3">
                <span
                  className={`h-9 w-9 rounded-full ring-1 ring-black/15 ${swatch}`}
                  aria-hidden
                />
                <span>
                  <span className="block text-sm">{t.swatches[index].name}</span>
                  <span className="block text-xs text-ink/60">
                    {t.swatches[index].note}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

function LangButton({
  pressed,
  onClick,
  label,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  label: string;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      aria-label={label}
      onClick={onClick}
      className={`min-h-11 cursor-pointer px-2 text-sm tracking-[0.14em] ${
        pressed ? "text-gold-2" : "text-mist/60 hover:text-gold-2"
      }`}
    >
      {children}
    </button>
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
