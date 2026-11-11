export type Lang = "en" | "fa";

export type Spec = { label: string; value: string };

export type Copy = {
  kicker: string;
  mark: string;
  langLabel: string;
  title: string;
  deck: string;
  intro: string[];
  toMaker: string;
  viewsLabel: string;
  views: { flower: string; pieces: string; lapel: string };
  scale: string;
  download: { label: string; note: string };
  pinLabel: string;
  epigraph: string;
  epigraphEn: string;
  epigraphBy: string;
  points: { n: string; title: string; body: string }[];
  wearTitle: string;
  wearBody: string;
  photoAlt: string;
  photoCaption: string;
  pieces: { felt: string; pin: string; clutch: string };
  piecesNote: string;
  lapelCaption: string;
  makerKicker: string;
  makerTitle: string;
  makerLede: string;
  process: string;
  steps: { n: string; text: string }[];
  specs: Spec[];
  diagramTitle: string;
  diagramNote: string;
};

export const copy: Record<Lang, Copy> = {
  en: {
    kicker: "Remembrance pin",
    mark: "Laleh",
    langLabel: "Language",
    title: "The Laleh Pin",
    deck: "Eight crimson cloth petals laid over one another, with a metal button set among them; a button that itself serves as the pin.",
    intro: [
      "On 18 and 19 Dey 1404, corresponding to 8 and 9 January 2026, a great many people were killed during the crackdown on protests in cities across Iran. The list of their names is still incomplete.",
      "This pin was made in remembrance of them, and in remembrance of all those who have lost their lives for the freedom of Iran.",
      "It is nothing but a few pieces of cloth and a metal button, yet it carries the memory of people who must not be forgotten.",
    ],
    toMaker: "For the maker",
    viewsLabel: "Views of the pin",
    views: { flower: "Flower", pieces: "Three pieces", lapel: "On a lapel" },
    scale: "48 mm across the tips",
    download: {
      label: "Download the design (PSD)",
      note: "Layered Photoshop file, 2000 × 2000 px, 1 mm = 25 px. Free to use, make and adapt under CC BY 4.0, with credit to IranFCA.",
    },
    pinLabel:
      "Laleh pin: eight overlapping crimson felt petals and a black enamel button with the gold Pahlavi crown",
    epigraph: "از خون جوانان وطن لاله دمیده",
    epigraphEn:
      "From the blood of the young of this country, tulips have sprung.",
    epigraphBy: "Aref Qazvini",
    points: [
      {
        n: "01",
        title: "The laleh",
        body: "The laleh is the Iranian flower of the fallen. Eight crimson petals lie in two layers. The second layer is turned, so each petal overlaps the next and the flower sits on the cloth. There is no disc behind them.",
      },
      {
        n: "02",
        title: "The black center",
        body: "On the cloth flower the center is metal too: a brass button, enamelled matte black, with the pin post coming out of its back. The post goes through the felt and the lapel. A clutch closes inside the coat. The weight and the fastening are the same piece, so the flower stays light.",
      },
      {
        n: "03",
        title: "Crown and sun",
        body: "On the metal button, in gold: the Pahlavi crown. Stepped top, points sweeping up at the sides, the sunburst on the front, and the arched band. The rim reads REMEMBRANCE 8–9 JAN, and PERSIA. The same crown and the same words are on the drawing and on the cloth.",
      },
    ],
    wearTitle: "How it is worn",
    wearBody:
      "Left lapel. The post goes through the cloth and the clutch stays inside the coat. It comes off at the end of the day and is kept. It is worn again on 18 and 19 Dey, and on any day the names should be remembered.",
    photoAlt:
      "Eight overlapping crimson wool-felt petals and a black enamel button with the gold Pahlavi crown. The rim reads Remembrance 8-9 Jan and Persia",
    photoCaption:
      "The petals overlap on the cloth. Same crown, same words on the rim.",
    pieces: {
      felt: "Two layers, overlapped",
      pin: "The button is the pin",
      clutch: "Clutch, inside the coat",
    },
    piecesNote: "Four petals, then four turned across them. The button holds both layers.",
    lapelCaption: "Wearer’s left lapel",
    makerKicker: "Shop ticket",
    makerTitle: "For the maker",
    makerLede: "One die for the button. One knife for the felt. Two layers of petals, overlapped. No disc behind them.",
    process:
      "Strike the button in brass, post included, with the Pahlavi crown in relief. Engrave the rim: REMEMBRANCE 8–9 JAN, and PERSIA. Enamel the face black and polish the crown and the rim back to the metal, leaving the letters dark. Cut eight crimson petals. Lay four down, then four turned so each petal overlaps the next. Pass the post through the center, set a washer behind the cloth, and close the clutch.",
    steps: [
      {
        n: "1",
        text: "Cut eight crimson petals. Lay four down, then four turned so they overlap.",
      },
      {
        n: "2",
        text: "Push the post through the center. The shoulder of the button holds the cloth.",
      },
      {
        n: "3",
        text: "Set the brass washer and the locking clutch. The clutch is what stays behind the lapel.",
      },
    ],
    specs: [
      { label: "Across the tips", value: "48 mm" },
      { label: "Petals", value: "Eight, crimson wool felt, 1.1 mm, two layers of four" },
      { label: "Color", value: "Crimson, near Pantone 187 C" },
      { label: "Hole", value: "5 mm" },
      { label: "Button", value: "Brass, 16 mm across, dome 3.2 mm high" },
      { label: "Face", value: "Matte black enamel" },
      {
        label: "In gold",
        value: "Pahlavi crown, and the rim: REMEMBRANCE 8–9 JAN / PERSIA",
      },
      { label: "Post", value: "Brass, part of the button, 1 mm × 22 mm" },
      { label: "Washer", value: "Brass, 10 mm, behind the felt" },
      { label: "Clutch", value: "Brass locking clutch" },
      { label: "Weight", value: "Under 8 grams" },
      { label: "Adhesive", value: "None. The button holds both layers." },
    ],
    diagramTitle: "Section through the center",
    diagramNote:
      "Layers are drawn a little taller than true scale so the stack can be read. The millimetres are the ones to cut.",
  },
  fa: {
    kicker: "سنجاق یادبود",
    mark: "لاله",
    langLabel: "زبان",
    title: "سنجاق لاله",
    deck: "هشت گلبرگ سرخ از جنس پارچه که روی هم قرار گرفته‌اند و در میانشان دکمه‌ای فلزی نشسته است؛ دکمه‌ای که خود، نقش سنجاق را دارد.",
    intro: [
      "در روزهای هجدهم و نوزدهم دی‌ماه ۱۴۰۴، برابر با ۸ و ۹ ژانویهٔ ۲۰۲۶، شمار زیادی از مردم در جریان سرکوب اعتراضات در شهرهای ایران جان باختند. فهرست نام‌هایشان هنوز کامل نشده است.",
      "این سنجاق به یاد آن‌ها ساخته شده است؛ و به یاد همهٔ کسانی که در راه آزادی ایران جان خود را از دست داده‌اند.",
      "چیزی نیست جز چند تکه پارچه و یک دکمهٔ فلزی؛ اما یاد کسانی را با خود دارد که نباید فراموش شوند.",
    ],
    toMaker: "برای سازنده",
    viewsLabel: "نمای سنجاق",
    views: { flower: "گل", pieces: "سه تکه", lapel: "روی یقه" },
    scale: "۴۸ میلی‌متر از نوک تا نوک",
    download: {
      label: "دریافت فایل طرح (PSD)",
      note: "فایل لایه‌ای فتوشاپ، ۲۰۰۰ × ۲۰۰۰ پیکسل، هر میلی‌متر ۲۵ پیکسل. استفاده، ساخت و تغییر آن آزاد است، با مجوز CC BY 4.0 و ذکر نام IranFCA.",
    },
    pinLabel:
      "سنجاق لاله: هشت گلبرگ نمد سرخ که روی هم افتاده‌اند، و دکمهٔ مینای سیاه با تاج طلایی پهلوی",
    epigraph: "از خون جوانان وطن لاله دمیده",
    epigraphEn:
      "From the blood of the young of this country, tulips have sprung.",
    epigraphBy: "عارف قزوینی",
    points: [
      {
        n: "۰۱",
        title: "لاله",
        body: "لاله گل ایرانیِ رفتگان است. هشت گلبرگ سرخ در دو لایه‌اند. لایهٔ دوم چرخیده است، تا هر گلبرگ روی گلبرگ کناری بیفتد و گل روی پارچه بنشیند. پشتشان دایره‌ای نیست.",
      },
      {
        n: "۰۲",
        title: "وسط سیاه",
        body: "در گل پارچه‌ای هم وسط فلز است: دکمه‌ای از برنج با مینای سیاهِ مات، و سوزن از پشتش بیرون می‌آید. سوزن از نمد و یقه می‌گذرد. قفل داخل کت بسته می‌شود. سنگینی و بست یک تکه‌اند، برای همین گل سبک می‌ماند.",
      },
      {
        n: "۰۳",
        title: "تاج و خورشید",
        body: "روی دکمهٔ فلزی، با طلا: تاج پهلوی. بالای پله‌پله، نوک‌های رو به بالا در دو سو، خورشید در جلو، و نوار قوسی پایین. روی لبه نوشته شده REMEMBRANCE 8–9 JAN و PERSIA. همین تاج و همین نوشته روی طرح است و روی پارچه.",
      },
    ],
    wearTitle: "چگونه پوشیده می‌شود",
    wearBody:
      "یقهٔ چپ. سوزن از پارچه رد می‌شود و قفل پشت کت می‌ماند. آخر روز درمی‌آید و نگه داشته می‌شود. دوباره در هجدهم و نوزدهم دی زده می‌شود، و هر روزی که باید نام‌ها به یاد بماند.",
    photoAlt:
      "هشت گلبرگ نمد سرخ که روی هم افتاده‌اند، با دکمهٔ مینای سیاه و تاج طلایی پهلوی. لبه می‌گوید Remembrance 8-9 Jan و Persia",
    photoCaption: "گلبرگ‌ها روی پارچه روی هم افتاده‌اند. همان تاج، همان نوشته روی لبه.",
    pieces: {
      felt: "دو لایه، روی هم",
      pin: "دکمه خودِ سنجاق است",
      clutch: "قفل، داخل کت",
    },
    piecesNote: "چهار گلبرگ، بعد چهار گلبرگِ چرخیده روی آن‌ها. دکمه هر دو لایه را نگه می‌دارد.",
    lapelCaption: "یقهٔ چپِ پوشنده",
    makerKicker: "برگهٔ کارگاه",
    makerTitle: "برای سازنده",
    makerLede: "یک قالب برای دکمه. یک تیغ برای نمد. دو لایه گلبرگ، روی هم. دایره‌ای پشتشان نیست.",
    process:
      "دکمه را با سوزن، یک‌جا از برنج بزن و تاج پهلوی را رویش برجسته کن. روی لبه بنویس: REMEMBRANCE 8–9 JAN و PERSIA. رویه را مینای سیاه کن و تاج و لبه را تا خودِ فلز پرداخت کن، و نوشته را تیره بگذار. هشت گلبرگ سرخ ببر. چهار تا را بگذار، بعد چهار تای چرخیده را طوری که هر گلبرگ روی کناری بیفتد. سوزن را از وسط رد کن، واشر را پشت پارچه بگذار، و قفل را ببند.",
    steps: [
      {
        n: "۱",
        text: "هشت گلبرگ سرخ ببر. چهار تا را بگذار، بعد چهار تای چرخیده را روی آن‌ها.",
      },
      {
        n: "۲",
        text: "سوزن را از وسط رد کن. لبهٔ پشت دکمه پارچه را نگه می‌دارد.",
      },
      {
        n: "۳",
        text: "واشر برنجی و قفل را بگذار. قفل همان است که پشت یقه می‌ماند.",
      },
    ],
    specs: [
      { label: "از نوک تا نوک", value: "۴۸ میلی‌متر" },
      { label: "گلبرگ", value: "هشت عدد، نمد پشمی سرخ، ۱٫۱ میلی‌متر، دو لایهٔ چهارتایی" },
      { label: "رنگ", value: "سرخ، نزدیک پانتون ۱۸۷ سی" },
      { label: "سوراخ", value: "۵ میلی‌متر" },
      { label: "دکمه", value: "برنج، قطر ۱۶ میلی‌متر، گنبد ۳٫۲ میلی‌متر" },
      { label: "رویه", value: "مینای سیاه مات" },
      { label: "طلا", value: "تاج پهلوی، و لبه: REMEMBRANCE 8–9 JAN / PERSIA" },
      { label: "سوزن", value: "برنج، جزئی از دکمه، ۱ در ۲۲ میلی‌متر" },
      { label: "واشر", value: "برنج، ۱۰ میلی‌متر، پشت نمد" },
      { label: "قفل", value: "قفل برنجی" },
      { label: "وزن", value: "کمتر از ۸ گرم" },
      { label: "چسب", value: "ندارد. دکمه هر دو لایه را نگه می‌دارد." },
    ],
    diagramTitle: "برش از وسط",
    diagramNote:
      "لایه‌ها کمی بلندتر از اندازهٔ واقعی کشیده شده‌اند تا روی هم خوانده شوند. میلی‌مترها همان‌اند که باید بریده شود.",
  },
};

export const nilufarCopy: Record<Lang, Copy> = {
  en: {
    kicker: "Remembrance pin",
    mark: "Nilufar",
    langLabel: "Language",
    title: "The Nilufar Pin",
    deck: "Twelve crimson cloth petals in one ring, with a metal button set among them; a button that itself serves as the pin.",
    intro: [
      "On 18 and 19 Dey 1404, corresponding to 8 and 9 January 2026, a great many people were killed during the crackdown on protests in cities across Iran. The list of their names is still incomplete.",
      "This pin was made in remembrance of them, and in remembrance of all those who have lost their lives for the freedom of Iran.",
      "It is nothing but a few pieces of cloth and a metal button, yet it carries the memory of people who must not be forgotten.",
    ],
    toMaker: "For the maker",
    viewsLabel: "Views of the pin",
    views: { flower: "Flower", pieces: "Three pieces", lapel: "On a lapel" },
    scale: "48 mm across the tips",
    download: {
      label: "Download the design (PSD)",
      note: "Layered Photoshop file, 2000 × 2000 px, 1 mm = 25 px. Free to use, make and adapt under CC BY 4.0, with credit to IranFCA.",
    },
    pinLabel:
      "Nilufar pin: twelve crimson felt petals in one ring and a black enamel button with the gold Pahlavi crown",
    epigraph: "نیلوفر، گل کهن ایرانی، با دوازده گلبرگ در یک حلقه",
    epigraphEn: "The nilufar, an old Iranian lotus, with twelve petals in one ring.",
    epigraphBy: "An old Iranian motif",
    points: [
      {
        n: "01",
        title: "The nilufar",
        body: "The nilufar is an old Iranian lotus. Twelve crimson petals lie in one ring, rounded, each one meeting the next, the way the old stone flower is cut. There is no second layer and no disc behind them.",
      },
      {
        n: "02",
        title: "The black center",
        body: "On the cloth flower the center is metal too: a brass button, enamelled matte black, with the pin post coming out of its back. The post goes through the felt and the lapel. A clutch closes inside the coat. The weight and the fastening are the same piece, so the flower stays light.",
      },
      {
        n: "03",
        title: "Crown and sun",
        body: "On the metal button, in gold: the Pahlavi crown. Stepped top, points sweeping up at the sides, the sunburst on the front, and the arched band. The rim reads REMEMBRANCE 8–9 JAN, and PERSIA. The same crown and the same words are on the drawing and on the cloth.",
      },
    ],
    wearTitle: "How it is worn",
    wearBody:
      "Left lapel. The post goes through the cloth and the clutch stays inside the coat. It comes off at the end of the day and is kept. It is worn again on 18 and 19 Dey, and on any day the names should be remembered.",
    photoAlt:
      "Twelve crimson wool-felt petals in one ring and a black enamel button with the gold Pahlavi crown. The rim reads Remembrance 8-9 Jan and Persia",
    photoCaption: "Twelve petals in one ring. Same crown, same words on the rim.",
    pieces: {
      felt: "One ring of twelve",
      pin: "The button is the pin",
      clutch: "Clutch, inside the coat",
    },
    piecesNote: "Twelve petals in one ring. The button holds them. There is no second layer.",
    lapelCaption: "Wearer’s left lapel",
    makerKicker: "Shop ticket",
    makerTitle: "For the maker",
    makerLede:
      "One die for the button. One knife for the felt. Twelve petals in one ring. No disc behind them.",
    process:
      "Strike the button in brass, post included, with the Pahlavi crown in relief. Engrave the rim: REMEMBRANCE 8–9 JAN, and PERSIA. Enamel the face black and polish the crown and the rim back to the metal, leaving the letters dark. Cut twelve crimson petals, rounded, and lay them in one ring so each petal meets the next. Pass the post through the center, set a washer behind the cloth, and close the clutch.",
    steps: [
      {
        n: "1",
        text: "Cut twelve crimson petals. Lay them in one ring so each meets the next.",
      },
      {
        n: "2",
        text: "Push the post through the center. The shoulder of the button holds the cloth.",
      },
      {
        n: "3",
        text: "Set the brass washer and the locking clutch. The clutch is what stays behind the lapel.",
      },
    ],
    specs: [
      { label: "Across the tips", value: "48 mm" },
      { label: "Petals", value: "Twelve, crimson wool felt, 1.1 mm, one ring" },
      { label: "Color", value: "Crimson, near Pantone 187 C" },
      { label: "Hole", value: "5 mm" },
      { label: "Button", value: "Brass, 16 mm across, dome 3.2 mm high" },
      { label: "Face", value: "Matte black enamel" },
      {
        label: "In gold",
        value: "Pahlavi crown, and the rim: REMEMBRANCE 8–9 JAN / PERSIA",
      },
      { label: "Post", value: "Brass, part of the button, 1 mm × 22 mm" },
      { label: "Washer", value: "Brass, 10 mm, behind the felt" },
      { label: "Clutch", value: "Brass locking clutch" },
      { label: "Weight", value: "Under 8 grams" },
      { label: "Adhesive", value: "None. The button holds the ring." },
    ],
    diagramTitle: "Section through the center",
    diagramNote:
      "Layers are drawn a little taller than true scale so the stack can be read. The millimetres are the ones to cut.",
  },
  fa: {
    kicker: "سنجاق یادبود",
    mark: "نیلوفر",
    langLabel: "زبان",
    title: "سنجاق نیلوفر",
    deck: "دوازده گلبرگ سرخ از جنس پارچه در یک حلقه، و در میانشان دکمه‌ای فلزی نشسته است؛ دکمه‌ای که خود، نقش سنجاق را دارد.",
    intro: [
      "در روزهای هجدهم و نوزدهم دی‌ماه ۱۴۰۴، برابر با ۸ و ۹ ژانویهٔ ۲۰۲۶، شمار زیادی از مردم در جریان سرکوب اعتراضات در شهرهای ایران جان باختند. فهرست نام‌هایشان هنوز کامل نشده است.",
      "این سنجاق به یاد آن‌ها ساخته شده است؛ و به یاد همهٔ کسانی که در راه آزادی ایران جان خود را از دست داده‌اند.",
      "چیزی نیست جز چند تکه پارچه و یک دکمهٔ فلزی؛ اما یاد کسانی را با خود دارد که نباید فراموش شوند.",
    ],
    toMaker: "برای سازنده",
    viewsLabel: "نمای سنجاق",
    views: { flower: "گل", pieces: "سه تکه", lapel: "روی یقه" },
    scale: "۴۸ میلی‌متر از نوک تا نوک",
    download: {
      label: "دریافت فایل طرح (PSD)",
      note: "فایل لایه‌ای فتوشاپ، ۲۰۰۰ × ۲۰۰۰ پیکسل، هر میلی‌متر ۲۵ پیکسل. استفاده، ساخت و تغییر آن آزاد است، با مجوز CC BY 4.0 و ذکر نام IranFCA.",
    },
    pinLabel:
      "سنجاق نیلوفر: دوازده گلبرگ نمد سرخ در یک حلقه، و دکمهٔ مینای سیاه با تاج طلایی پهلوی",
    epigraph: "نیلوفر، گل کهن ایرانی، با دوازده گلبرگ در یک حلقه",
    epigraphEn: "The nilufar, an old Iranian lotus, with twelve petals in one ring.",
    epigraphBy: "نقشی کهن از ایران",
    points: [
      {
        n: "۰۱",
        title: "نیلوفر",
        body: "نیلوفر گل کهن ایرانی است. دوازده گلبرگ سرخ در یک حلقه‌اند، گرد، و هر کدام به گلبرگ کناری می‌رسد، آن‌گونه که گل سنگی کهن تراشیده شده است. لایهٔ دومی نیست و دایره‌ای پشتشان نیست.",
      },
      {
        n: "۰۲",
        title: "وسط سیاه",
        body: "در گل پارچه‌ای هم وسط فلز است: دکمه‌ای از برنج با مینای سیاهِ مات، و سوزن از پشتش بیرون می‌آید. سوزن از نمد و یقه می‌گذرد. قفل داخل کت بسته می‌شود. سنگینی و بست یک تکه‌اند، برای همین گل سبک می‌ماند.",
      },
      {
        n: "۰۳",
        title: "تاج و خورشید",
        body: "روی دکمهٔ فلزی، با طلا: تاج پهلوی. بالای پله‌پله، نوک‌های رو به بالا در دو سو، خورشید در جلو، و نوار قوسی پایین. روی لبه نوشته شده REMEMBRANCE 8–9 JAN و PERSIA. همین تاج و همین نوشته روی طرح است و روی پارچه.",
      },
    ],
    wearTitle: "چگونه پوشیده می‌شود",
    wearBody:
      "یقهٔ چپ. سوزن از پارچه رد می‌شود و قفل پشت کت می‌ماند. آخر روز درمی‌آید و نگه داشته می‌شود. دوباره در هجدهم و نوزدهم دی زده می‌شود، و هر روزی که باید نام‌ها به یاد بماند.",
    photoAlt:
      "دوازده گلبرگ نمد سرخ در یک حلقه، با دکمهٔ مینای سیاه و تاج طلایی پهلوی. لبه می‌گوید Remembrance 8-9 Jan و Persia",
    photoCaption: "دوازده گلبرگ در یک حلقه. همان تاج، همان نوشته روی لبه.",
    pieces: {
      felt: "یک حلقه از دوازده",
      pin: "دکمه خودِ سنجاق است",
      clutch: "قفل، داخل کت",
    },
    piecesNote: "دوازده گلبرگ در یک حلقه. دکمه آن‌ها را نگه می‌دارد. لایهٔ دومی نیست.",
    lapelCaption: "یقهٔ چپِ پوشنده",
    makerKicker: "برگهٔ کارگاه",
    makerTitle: "برای سازنده",
    makerLede: "یک قالب برای دکمه. یک تیغ برای نمد. دوازده گلبرگ در یک حلقه. دایره‌ای پشتشان نیست.",
    process:
      "دکمه را با سوزن، یک‌جا از برنج بزن و تاج پهلوی را رویش برجسته کن. روی لبه بنویس: REMEMBRANCE 8–9 JAN و PERSIA. رویه را مینای سیاه کن و تاج و لبه را تا خودِ فلز پرداخت کن، و نوشته را تیره بگذار. دوازده گلبرگ سرخِ گرد ببر و در یک حلقه بگذار، طوری که هر گلبرگ به کناری برسد. سوزن را از وسط رد کن، واشر را پشت پارچه بگذار، و قفل را ببند.",
    steps: [
      {
        n: "۱",
        text: "دوازده گلبرگ سرخ ببر. آن‌ها را در یک حلقه بگذار، طوری که هر کدام به کناری برسد.",
      },
      {
        n: "۲",
        text: "سوزن را از وسط رد کن. لبهٔ پشت دکمه پارچه را نگه می‌دارد.",
      },
      {
        n: "۳",
        text: "واشر برنجی و قفل را بگذار. قفل همان است که پشت یقه می‌ماند.",
      },
    ],
    specs: [
      { label: "از نوک تا نوک", value: "۴۸ میلی‌متر" },
      { label: "گلبرگ", value: "دوازده عدد، نمد پشمی سرخ، ۱٫۱ میلی‌متر، یک حلقه" },
      { label: "رنگ", value: "سرخ، نزدیک پانتون ۱۸۷ سی" },
      { label: "سوراخ", value: "۵ میلی‌متر" },
      { label: "دکمه", value: "برنج، قطر ۱۶ میلی‌متر، گنبد ۳٫۲ میلی‌متر" },
      { label: "رویه", value: "مینای سیاه مات" },
      { label: "طلا", value: "تاج پهلوی، و لبه: REMEMBRANCE 8–9 JAN / PERSIA" },
      { label: "سوزن", value: "برنج، جزئی از دکمه، ۱ در ۲۲ میلی‌متر" },
      { label: "واشر", value: "برنج، ۱۰ میلی‌متر، پشت نمد" },
      { label: "قفل", value: "قفل برنجی" },
      { label: "وزن", value: "کمتر از ۸ گرم" },
      { label: "چسب", value: "ندارد. دکمه حلقه را نگه می‌دارد." },
    ],
    diagramTitle: "برش از وسط",
    diagramNote:
      "لایه‌ها کمی بلندتر از اندازهٔ واقعی کشیده شده‌اند تا روی هم خوانده شوند. میلی‌مترها همان‌اند که باید بریده شود.",
  },
};
