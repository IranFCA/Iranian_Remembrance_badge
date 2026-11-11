"use client";

import { useId } from "react";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function PhotoPin({
  src,
  className,
  label,
}: {
  src: string;
  className?: string;
  label: string;
}) {
  return (
    <img src={`${base}${src}`} alt={label} className={`h-auto w-full ${className ?? ""}`} />
  );
}

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <radialGradient id={`${id}-felt`} cx="50%" cy="46%" r="68%">
        <stop offset="0%" stopColor="#c4323f" />
        <stop offset="62%" stopColor="#a11c2c" />
        <stop offset="100%" stopColor="#861422" />
      </radialGradient>
      <radialGradient id={`${id}-enamel`} cx="34%" cy="30%" r="72%">
        <stop offset="0%" stopColor="#3c3834" />
        <stop offset="48%" stopColor="#161311" />
        <stop offset="100%" stopColor="#050403" />
      </radialGradient>
      <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f3e2b8" />
        <stop offset="42%" stopColor="#d4b36a" />
        <stop offset="100%" stopColor="#8a6424" />
      </linearGradient>
      <linearGradient id={`${id}-brass`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#8d6428" />
        <stop offset="38%" stopColor="#f0d7a2" />
        <stop offset="70%" stopColor="#b89044" />
        <stop offset="100%" stopColor="#6e4e1c" />
      </linearGradient>
      <clipPath id={`${id}-dome`}>
        <circle cx="100" cy="100" r="23.6" />
      </clipPath>
      <path id={`${id}-rim-top`} d="M 71.4 100 A 28.6 28.6 0 0 0 128.6 100" />
      <path id={`${id}-rim-bot`} d="M 71.4 100 A 28.6 28.6 0 0 1 128.6 100" />
      <mask id={`${id}-hole`}>
        <rect width="200" height="200" fill="white" />
        <circle cx="100" cy="100" r="9.4" fill="black" />
      </mask>
    </defs>
  );
}

function ButtonFace({ id }: { id: string }) {
  const gold = `url(#${id}-gold)`;
  return (
    <g transform="translate(100 100) scale(1.185) translate(-100 -100)">
      <circle cx="100" cy="100" r="33" fill={gold} />
      <circle cx="100" cy="100" r="23.6" fill={`url(#${id}-enamel)`} />
      <g clipPath={`url(#${id}-dome)`}>
        <ellipse cx="90" cy="88" rx="9" ry="5" fill="white" opacity="0.14" />
        <image
          href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/pahlavi-crown.png`}
          x="80.5"
          y="82"
          width="39"
          height="32.5"
        />
      </g>
      <circle
        cx="100"
        cy="100"
        r="23.6"
        fill="none"
        stroke="#000"
        strokeOpacity="0.35"
        strokeWidth="0.7"
      />
      <text
        fill="#4a3214"
        fontSize="3.05"
        fontFamily="Georgia, 'Times New Roman', serif"
        letterSpacing="0.22"
      >
        <textPath href={`#${id}-rim-bot`} startOffset="50%" textAnchor="middle">
          REMEMBRANCE  8–9 JAN
        </textPath>
      </text>
      <text
        fill="#4a3214"
        fontSize="3.05"
        fontFamily="Georgia, 'Times New Roman', serif"
        letterSpacing="0.42"
      >
        <textPath href={`#${id}-rim-top`} startOffset="50%" textAnchor="middle">
          PERSIA
        </textPath>
      </text>
    </g>
  );
}

export function AssembledPin({
  className,
  label,
}: {
  className?: string;
  label: string;
}) {
  return <PhotoPin src="/nilufar-pin-design.png" className={className} label={label} />;
}

export function LapelPin({
  className,
  label,
}: {
  className?: string;
  label: string;
}) {
  return <PhotoPin src="/nilufar-pin-cutout.png" className={className} label={label} />;
}

export function FeltPiece({ className, label }: { className?: string; label: string }) {
  return <PhotoPin src="/nilufar-felt.png" className={className} label={label} />;
}

export function ButtonPiece({
  className,
  label,
}: {
  className?: string;
  label: string;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 200 220" className={className} role="img" aria-label={label}>
      <Defs id={id} />
      <ButtonFace id={id} />
      <rect x="96.2" y="128" width="7.6" height="70" rx="1.2" fill={`url(#${id}-brass)`} />
      <rect x="94" y="192" width="12" height="3" rx="0.6" fill="#f0ddb0" />
    </svg>
  );
}

export function ClutchPiece({
  className,
  label,
}: {
  className?: string;
  label: string;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 200 120" className={className} role="img" aria-label={label}>
      <Defs id={id} />
      <rect x="36" y="34" width="128" height="52" rx="26" fill={`url(#${id}-gold)`} />
      <rect x="54" y="48" width="92" height="24" rx="12" fill="#1a140e" opacity="0.22" />
      <circle cx="100" cy="60" r="7" fill="#1a140e" />
      <circle cx="97" cy="57" r="1.6" fill="#f3e2b8" opacity="0.4" />
    </svg>
  );
}

export function SectionCut({
  className,
  title,
}: {
  className?: string;
  title: string;
}) {
  return (
    <svg viewBox="0 0 520 292" className={className} role="img" aria-label={title}>
      <path
        d="M40 132 L168 114 L188 120 L332 114 L468 132 L340 146 L188 140 L168 146 Z"
        fill="#a61f30"
      />
      <path d="M150 124 Q250 78 350 124 V136 H150 Z" fill="#161311" />
      <path d="M142 128 h216 v8 H142 Z" fill="#c6a15b" />
      <path d="M242 96 h10 V82 h-10 Z" fill="#e7d3a4" />
      <circle cx="250" cy="116" r="6" fill="#e7d3a4" />
      <rect x="196" y="140" width="108" height="7" fill="#a6843c" />
      <rect x="244" y="132" width="12" height="86" fill="#c6a15b" />
      <rect x="214" y="210" width="72" height="30" rx="11" fill="#c6a15b" />
      <circle cx="250" cy="225" r="5.5" fill="#1a140e" />

      <g fill="none" stroke="#8a6d3d" strokeWidth="1">
        <path d="M40 268 H468" />
        <path d="M40 262 v12" />
        <path d="M468 262 v12" />
        <path d="M150 70 V48 H350 V70" />
        <path d="M358 96 h16" />
        <path d="M374 96 v40" />
        <path d="M358 136 h16" />
        <path d="M300 140 v70" />
        <path d="M292 140 h16" />
        <path d="M292 210 h16" />
      </g>
      <g
        fill="#3a3126"
        fontSize="14"
        fontFamily="Georgia, Times, serif"
        direction="ltr"
        style={{ direction: "ltr", unicodeBidi: "isolate" }}
      >
        <text x="250" y="40" textAnchor="middle">
          16 mm
        </text>
        <text x="382" y="122">
          3.2 mm
        </text>
        <text x="250" y="258" textAnchor="middle">
          48 mm
        </text>
        <text x="308" y="180">
          22 mm
        </text>
      </g>
    </svg>
  );
}
