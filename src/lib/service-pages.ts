import { routing } from "@/i18n/routing";

export const servicePages = [
  {
    key: "kitchens",
    slugs: {
      sr: "kuhinje-po-meri",
      en: "custom-kitchens",
      ru: "kukhnya-na-zakaz",
    },
    previewImages: [
      "/kitchens/1.webp",
      "/kitchens/11.webp",
      "/kitchens/21.webp",
    ],
  },
  {
    key: "wardrobes",
    slugs: {
      sr: "plakari-po-meri",
      en: "built-in-wardrobes",
      ru: "shkafy-na-zakaz",
    },
    previewImages: ["/closets/1.webp", "/closets/4.webp", "/closets/7.webp"],
  },
  {
    key: "bathrooms",
    slugs: {
      sr: "kupatilski-namestaj",
      en: "bathroom-furniture",
      ru: "mebel-dlya-vannoy",
    },
    previewImages: [
      "/bathrooms/1.webp",
      "/bathrooms/5.webp",
      "/bathrooms/10.webp",
    ],
  },
  {
    key: "woodwork",
    slugs: {
      sr: "drveni-radovi-novi-sad",
      en: "woodwork-novi-sad",
      ru: "stolyarnye-raboty-novi-sad",
    },
    previewImages: [
      "/bedrooms/16.webp",
      "/living-rooms/4.webp",
      "/offices/10.webp",
    ],
  },
] as const;

export type ServiceKey = (typeof servicePages)[number]["key"];
type Locale = (typeof routing.locales)[number];
export type ServiceSlug = (typeof servicePages)[number]["slugs"][Locale];

type ServicePageCopy = {
  label: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  body: string;
  cardDescription: string;
  bulletItems: [string, string, string];
  faqItems: [
    { question: string; answer: string },
    { question: string; answer: string },
  ];
};

type SharedCopy = {
  serviceLinksTitle: string;
  serviceLinksDescription: string;
  bulletsTitle: string;
  galleryTitle: string;
  faqTitle: string;
  contactTitle: string;
  contactDescription: string;
  contactCta: string;
  galleryCta: string;
};

const sharedCopy: Record<Locale, SharedCopy> = {
  sr: {
    serviceLinksTitle: "Stranice usluga za najvažnije pretrage",
    serviceLinksDescription:
      "Ove stranice ciljaju najvažnije lokalne upite za Novi Sad i vode direktno do relevantnih usluga i galerije.",
    bulletsTitle: "Šta dobijate kroz ovu uslugu",
    galleryTitle: "Primeri radova",
    faqTitle: "Česta pitanja",
    contactTitle: "Zatražite ponudu za vaš projekat",
    contactDescription:
      "Pošaljite upit ako vam je potrebna kuhinja, plakar, kupatilski nameštaj ili drugi drveni radovi po meri u Novom Sadu ili širom Srbije.",
    contactCta: "Kontaktirajte nas",
    galleryCta: "Pogledajte galeriju",
  },
  en: {
    serviceLinksTitle: "Service pages for our key search terms",
    serviceLinksDescription:
      "These pages target the most valuable local queries for Novi Sad and lead visitors to the most relevant service and gallery content.",
    bulletsTitle: "What this service includes",
    galleryTitle: "Work examples",
    faqTitle: "Frequently asked questions",
    contactTitle: "Request a quote for your project",
    contactDescription:
      "Contact us if you need a custom kitchen, wardrobe, bathroom furniture, or other bespoke woodwork in Novi Sad or elsewhere in Serbia.",
    contactCta: "Contact us",
    galleryCta: "View gallery",
  },
  ru: {
    serviceLinksTitle: "Страницы услуг под ключевые поисковые запросы",
    serviceLinksDescription:
      "Эти страницы нацелены на самые ценные локальные запросы по Нови-Саду и ведут посетителей к наиболее релевантным услугам и галерее.",
    bulletsTitle: "Что включает эта услуга",
    galleryTitle: "Примеры работ",
    faqTitle: "Часто задаваемые вопросы",
    contactTitle: "Запросите расчет по вашему проекту",
    contactDescription:
      "Свяжитесь с нами, если вам нужна кухня на заказ, шкаф, мебель для ванной или другие столярные работы в Нови-Саде или по всей Сербии.",
    contactCta: "Связаться с нами",
    galleryCta: "Посмотреть галерею",
  },
};

const serviceCopy: Record<Locale, Record<ServiceKey, ServicePageCopy>> = {
  sr: {
    kitchens: {
      label: "Kuhinje po meri",
      metaTitle: "Kuhinje po meri Novi Sad",
      metaDescription:
        "Kuhinje po meri u Novom Sadu: projektovanje, izrada, izbor materijala i montaža. Fagus NS-021 izrađuje funkcionalne kuhinje po vašem prostoru.",
      title: "Kuhinje po meri u Novom Sadu",
      lead: "Projektujemo i izrađujemo kuhinje po meri za stanove, kuće i poslovne prostore u Novom Sadu, sa rasporedom prilagođenim vašem načinu korišćenja prostora.",
      body: "Od prvog merenja do završne montaže, fokus nam je na praktičnom rasporedu, kvalitetnim materijalima i dugotrajnoj izradi koja odgovara vašem budžetu i stilu enterijera.",
      cardDescription:
        "Kuhinje po meri za Novi Sad, sa projektovanjem, izborom materijala i montažom.",
      bulletItems: [
        "Projektovanje kuhinje prema tačnim dimenzijama i toku kretanja u prostoru.",
        "Pomoć pri izboru frontova, radnih ploča, okova i unutrašnje organizacije.",
        "Izrada, dostava i montaža kuhinje po meri u Novom Sadu i po dogovoru širom Srbije.",
      ],
      faqItems: [
        {
          question: "Da li radite kuhinje po meri i za male stanove?",
          answer:
            "Da. Posebno vodimo računa o iskorišćenju prostora kod manjih kuhinja i ugaonih rasporeda.",
        },
        {
          question: "Da li možete da pomognete oko rasporeda elemenata?",
          answer:
            "Da. Predlažemo raspored elemenata, radnih zona i odlaganja kako bi kuhinja bila funkcionalna u svakodnevnoj upotrebi.",
        },
      ],
    },
    wardrobes: {
      label: "Plakari po meri",
      metaTitle: "Plakari po meri Novi Sad",
      metaDescription:
        "Plakari po meri u Novom Sadu za hodnike, spavaće sobe i potkrovlja. Fagus NS-021 izrađuje ugradne plakare i ormare prilagođene vašem prostoru.",
      title: "Plakari po meri u Novom Sadu",
      lead: "Izrađujemo plakare po meri za stanove, kuće i poslovne prostore u Novom Sadu, sa akcentom na maksimalno iskorišćenje prostora i urednu organizaciju.",
      body: "Bilo da vam je potreban klizni plakar za hodnik, ugradni ormar za spavaću sobu ili rešenje za niše i potkrovlja, prilagođavamo dimenzije, unutrašnjost i završnu obradu vašim potrebama.",
      cardDescription:
        "Ugradni plakari i ormari po meri za stanove, kuće i poslovne prostore.",
      bulletItems: [
        "Rešenja za hodnike, spavaće sobe, dečje sobe, niše i potkrovlja.",
        "Unutrašnja organizacija sa policama, fiokama, vešalicama i zonama za obuću.",
        "Klizna ili klasična vrata, materijali i boje usklađeni sa ostatkom enterijera.",
      ],
      faqItems: [
        {
          question:
            "Da li izrađujete ugradne plakare za nestandardne dimenzije?",
          answer:
            "Da. Plakari po meri su posebno korisni kada prostor ima niše, kosine ili nestandardne širine i visine.",
        },
        {
          question: "Da li mogu da biram unutrašnji raspored plakara?",
          answer:
            "Da. Unutrašnjost plakara planiramo prema načinu korišćenja, količini garderobe i potrebama za odlaganjem.",
        },
      ],
    },
    bathrooms: {
      label: "Kupatilski nameštaj",
      metaTitle: "Kupatilski nameštaj Novi Sad",
      metaDescription:
        "Kupatilski nameštaj po meri u Novom Sadu: ormarići, police i funkcionalna rešenja za mala i velika kupatila. Fagus NS-021.",
      title: "Kupatilski nameštaj po meri u Novom Sadu",
      lead: "Izrađujemo kupatilski nameštaj po meri za prostore gde je važan svaki centimetar, uz fokus na funkcionalnost, uredan izgled i materijale prilagođene uslovima u kupatilu.",
      body: "Ako vam je potreban ormarić ispod lavaboa, vertikalni element, police ili kompletno rešenje za kupatilo, prilagođavamo raspored i dimenzije prostoru koji imate.",
      cardDescription:
        "Kupatilski ormarići, police i kompaktna rešenja po meri za Novi Sad.",
      bulletItems: [
        "Izrada ormarića ispod lavaboa, vertikalnih elemenata i dodatnog prostora za odlaganje.",
        "Planiranje rasporeda za mala kupatila i nepravilne osnove gde je bitna precizna mera.",
        "Materijali i završne obrade birani prema zahtevima prostora i svakodnevne upotrebe.",
      ],
      faqItems: [
        {
          question: "Da li radite kupatilski nameštaj za mala kupatila?",
          answer:
            "Da. Kupatilski nameštaj po meri je naročito koristan kada treba optimizovati mali prostor i zadržati dovoljno odlaganja.",
        },
        {
          question:
            "Da li možete da uskladite kupatilski nameštaj sa ostatkom enterijera?",
          answer:
            "Da. Boje, frontove i detalje prilagođavamo ostatku stana ili kuće kako bi ceo enterijer delovao povezano.",
        },
      ],
    },
    woodwork: {
      label: "Drveni radovi",
      metaTitle: "Drveni radovi Novi Sad",
      metaDescription:
        "Drveni radovi u Novom Sadu za enterijere, stanove, kuće i poslovne prostore. Fagus NS-021 izrađuje nameštaj po meri i druga funkcionalna rešenja od drveta.",
      title: "Drveni radovi u Novom Sadu",
      lead: "Kada vam je potrebno više od jednog komada nameštaja, nudimo šire drvene radove za enterijere u Novom Sadu, od pojedinačnih elemenata do kompletnih funkcionalnih rešenja.",
      body: "Radimo po meri za stanove, kuće i poslovne prostore, uz kombinaciju praktičnog planiranja, kvalitetne izrade i pažnje prema završnim detaljima koji određuju kako prostor izgleda i funkcioniše.",
      cardDescription:
        "Opšti drveni radovi i enterijerska rešenja po meri za Novi Sad i Srbiju.",
      bulletItems: [
        "Nameštaj po meri za dnevne sobe, spavaće sobe, kancelarije i druge enterijere.",
        "Drveni elementi i rešenja prilagođena postojećem rasporedu, instalacijama i stilu prostora.",
        "Podrška od ideje i merenja do izrade, dostave i montaže na terenu.",
      ],
      faqItems: [
        {
          question: "Koje vrste drvenih radova radite?",
          answer:
            "Radimo nameštaj po meri, enterijerske elemente, kancelarijski nameštaj, plakare, kuhinje i druga funkcionalna rešenja od drveta i pločastih materijala.",
        },
        {
          question: "Da li radite i veće projekte za poslovne prostore?",
          answer:
            "Da. U zavisnosti od obima posla i rokova, preuzimamo i projekte za kancelarije, lokale i druge poslovne enterijere.",
        },
      ],
    },
  },
  en: {
    kitchens: {
      label: "Custom kitchens",
      metaTitle: "Custom Kitchens Novi Sad",
      metaDescription:
        "Custom kitchens in Novi Sad with planning, production, material selection, and fitting by Fagus NS-021.",
      title: "Custom kitchens in Novi Sad",
      lead: "We design and build custom kitchens for apartments, houses, and business spaces in Novi Sad, with layouts adapted to how you actually use the room.",
      body: "From the first measurement to final fitting, the focus is on practical layout, durable materials, and a kitchen that matches both your storage needs and interior style.",
      cardDescription:
        "Custom kitchens in Novi Sad with planning, material selection, and fitting.",
      bulletItems: [
        "Kitchen planning based on exact dimensions and movement flow in the room.",
        "Support with fronts, worktops, fittings, and internal storage layout.",
        "Production, delivery, and fitting in Novi Sad and selected projects across Serbia.",
      ],
      faqItems: [
        {
          question: "Do you build custom kitchens for smaller apartments?",
          answer:
            "Yes. We pay special attention to space use in compact kitchens, corners, and layouts with limited room.",
        },
        {
          question: "Can you help with the kitchen layout?",
          answer:
            "Yes. We can suggest cabinet placement, work zones, and storage solutions so the kitchen works well day to day.",
        },
      ],
    },
    wardrobes: {
      label: "Built-in wardrobes",
      metaTitle: "Built-in Wardrobes Novi Sad",
      metaDescription:
        "Built-in wardrobes and custom closets in Novi Sad for bedrooms, hallways, lofts, and business spaces by Fagus NS-021.",
      title: "Built-in wardrobes in Novi Sad",
      lead: "We build wardrobes made to measure for apartments, houses, and business interiors in Novi Sad, with a strong focus on storage efficiency and clean integration into the room.",
      body: "Whether you need a sliding wardrobe for a hallway, a fitted closet for a bedroom, or a solution for awkward niches and loft spaces, we adapt the structure to your exact needs.",
      cardDescription:
        "Built-in wardrobes and custom closets for apartments, houses, and offices.",
      bulletItems: [
        "Wardrobe solutions for hallways, bedrooms, children's rooms, lofts, and niches.",
        "Internal layout with shelves, drawers, hanging zones, and shoe storage.",
        "Sliding or hinged doors with finishes that match the rest of the interior.",
      ],
      faqItems: [
        {
          question: "Do you build wardrobes for non-standard dimensions?",
          answer:
            "Yes. Custom wardrobes are especially useful when the room has sloped ceilings, niches, or unusual widths and heights.",
        },
        {
          question: "Can I decide the inside layout of the wardrobe?",
          answer:
            "Yes. We plan the inside layout around your clothes, storage habits, and how the wardrobe will be used.",
        },
      ],
    },
    bathrooms: {
      label: "Bathroom furniture",
      metaTitle: "Bathroom Furniture Novi Sad",
      metaDescription:
        "Custom bathroom furniture in Novi Sad, including vanity units, storage cabinets, and space-saving solutions by Fagus NS-021.",
      title: "Custom bathroom furniture in Novi Sad",
      lead: "We build bathroom furniture made to measure for spaces where every centimeter matters, with a focus on smart storage, tidy appearance, and practical daily use.",
      body: "If you need a vanity unit, tall cabinet, shelving, or a full furniture solution for a bathroom, we adapt the dimensions and layout to the room you have.",
      cardDescription:
        "Bathroom cabinets, vanity units, and storage solutions made to measure in Novi Sad.",
      bulletItems: [
        "Vanity units, tall cabinets, and extra storage built around the available space.",
        "Layouts designed for compact bathrooms and rooms with awkward dimensions.",
        "Materials and finishes selected for everyday use and the demands of bathroom interiors.",
      ],
      faqItems: [
        {
          question: "Do you make bathroom furniture for small bathrooms?",
          answer:
            "Yes. Made-to-measure bathroom furniture is especially valuable when you need to optimize a smaller layout without losing storage.",
        },
        {
          question:
            "Can the bathroom furniture match the rest of the interior?",
          answer:
            "Yes. We can align colours, fronts, and details with the rest of the apartment or house for a more consistent interior.",
        },
      ],
    },
    woodwork: {
      label: "Woodwork",
      metaTitle: "Woodwork Novi Sad",
      metaDescription:
        "Woodwork in Novi Sad for homes, apartments, offices, and business interiors. Bespoke furniture and practical interior solutions by Fagus NS-021.",
      title: "Woodwork in Novi Sad",
      lead: "When you need more than a single furniture piece, we offer broader woodwork services for interiors in Novi Sad, from individual elements to complete made-to-measure solutions.",
      body: "We work on apartments, houses, and business spaces with a combination of practical planning, quality production, and careful finishing that supports both appearance and daily function.",
      cardDescription:
        "General woodwork and custom interior solutions for Novi Sad and wider Serbia.",
      bulletItems: [
        "Made-to-measure furniture for living rooms, bedrooms, offices, and other interior zones.",
        "Wood-based interior elements adapted to the layout, installations, and style of the space.",
        "Support from concept and measurement through production, delivery, and fitting.",
      ],
      faqItems: [
        {
          question: "What types of woodwork do you handle?",
          answer:
            "We handle custom furniture, interior elements, office furniture, wardrobes, kitchens, and other practical solutions made from wood and panel materials.",
        },
        {
          question: "Do you also take on larger business interior projects?",
          answer:
            "Yes. Depending on scope and timing, we also take on selected office, retail, and other commercial interior projects.",
        },
      ],
    },
  },
  ru: {
    kitchens: {
      label: "Кухни на заказ",
      metaTitle: "Кухни на заказ Нови-Сад",
      metaDescription:
        "Кухни на заказ в Нови-Саде: проектирование, изготовление, подбор материалов и монтаж от Fagus NS-021.",
      title: "Кухни на заказ в Нови-Саде",
      lead: "Мы проектируем и изготавливаем кухни на заказ для квартир, домов и коммерческих помещений в Нови-Саде с учетом того, как вы реально используете пространство.",
      body: "От первых замеров до финального монтажа мы делаем упор на практичную планировку, надежные материалы и кухню, которая соответствует вашему стилю и потребностям в хранении.",
      cardDescription:
        "Кухни на заказ в Нови-Саде с проектированием, подбором материалов и монтажом.",
      bulletItems: [
        "Проектирование кухни по точным размерам и логике перемещения по помещению.",
        "Помощь с выбором фасадов, столешниц, фурнитуры и внутренней организации.",
        "Изготовление, доставка и монтаж в Нови-Саде и по отдельным проектам по Сербии.",
      ],
      faqItems: [
        {
          question: "Вы делаете кухни на заказ для небольших квартир?",
          answer:
            "Да. Мы уделяем особое внимание использованию пространства в компактных кухнях и угловых планировках.",
        },
        {
          question: "Вы можете помочь с планировкой кухни?",
          answer:
            "Да. Мы подскажем расположение шкафов, рабочих зон и мест хранения, чтобы кухня была удобна каждый день.",
        },
      ],
    },
    wardrobes: {
      label: "Шкафы на заказ",
      metaTitle: "Шкафы на заказ Нови-Сад",
      metaDescription:
        "Встроенные шкафы и шкафы на заказ в Нови-Саде для спальни, прихожей, мансарды и бизнеса от Fagus NS-021.",
      title: "Шкафы на заказ в Нови-Саде",
      lead: "Мы изготавливаем шкафы на заказ для квартир, домов и коммерческих помещений в Нови-Саде, делая акцент на эффективном хранении и аккуратной интеграции в интерьер.",
      body: "Если вам нужен шкаф-купе для прихожей, встроенный шкаф для спальни или решение для ниши и мансарды, мы адаптируем конструкцию под ваш конкретный случай.",
      cardDescription:
        "Встроенные шкафы и шкафы на заказ для квартир, домов и офисов.",
      bulletItems: [
        "Решения для прихожих, спален, детских комнат, ниш и мансард.",
        "Внутреннее наполнение с полками, ящиками, вешалками и секциями для обуви.",
        "Раздвижные или распашные двери с отделкой под остальной интерьер.",
      ],
      faqItems: [
        {
          question: "Вы делаете шкафы для нестандартных размеров?",
          answer:
            "Да. Шкафы на заказ особенно полезны, когда помещение имеет скосы, ниши или нестандартную ширину и высоту.",
        },
        {
          question: "Можно ли выбрать внутреннюю организацию шкафа?",
          answer:
            "Да. Мы проектируем внутреннее наполнение по вашим привычкам хранения и тому, как шкаф будет использоваться.",
        },
      ],
    },
    bathrooms: {
      label: "Мебель для ванной",
      metaTitle: "Мебель для ванной Нови-Сад",
      metaDescription:
        "Мебель для ванной на заказ в Нови-Саде: тумбы под раковину, шкафы и компактные решения от Fagus NS-021.",
      title: "Мебель для ванной на заказ в Нови-Саде",
      lead: "Мы изготавливаем мебель для ванной по индивидуальным размерам для пространств, где важен каждый сантиметр, с акцентом на хранение, аккуратный вид и удобство в использовании.",
      body: "Если вам нужна тумба под раковину, высокий шкаф, полки или полноценное решение для ванной комнаты, мы подстраиваем размеры и компоновку под конкретное помещение.",
      cardDescription:
        "Тумбы, шкафы и компактные решения для ванной на заказ в Нови-Саде.",
      bulletItems: [
        "Тумбы под раковину, высокие шкафы и дополнительные места хранения по размеру.",
        "Планировка для маленьких ванных и помещений со сложной геометрией.",
        "Материалы и отделки, подобранные под повседневную эксплуатацию ванной комнаты.",
      ],
      faqItems: [
        {
          question: "Вы делаете мебель для маленьких ванных комнат?",
          answer:
            "Да. Мебель для ванной на заказ особенно полезна, когда нужно оптимизировать небольшое пространство и сохранить достаточное хранение.",
        },
        {
          question:
            "Можно ли согласовать мебель для ванной с остальным интерьером?",
          answer:
            "Да. Мы можем подобрать цвета, фасады и детали так, чтобы ванная смотрелась частью общего интерьера.",
        },
      ],
    },
    woodwork: {
      label: "Столярные работы",
      metaTitle: "Столярные работы Нови-Сад",
      metaDescription:
        "Столярные работы в Нови-Саде для квартир, домов, офисов и коммерческих интерьеров. Мебель на заказ и практичные интерьерные решения от Fagus NS-021.",
      title: "Столярные работы в Нови-Саде",
      lead: "Если вам нужен не один предмет мебели, а более широкое решение, мы выполняем столярные работы для интерьеров в Нови-Саде, от отдельных элементов до комплексных решений на заказ.",
      body: "Мы работаем с квартирами, домами и бизнес-пространствами, сочетая практичное планирование, качественное изготовление и аккуратную отделку, важную для внешнего вида и ежедневного использования.",
      cardDescription:
        "Общие столярные работы и интерьерные решения на заказ для Нови-Сада и Сербии.",
      bulletItems: [
        "Мебель на заказ для гостиных, спален, офисов и других интерьерных зон.",
        "Деревянные элементы интерьера с учетом планировки, коммуникаций и стиля пространства.",
        "Поддержка от идеи и замеров до изготовления, доставки и монтажа.",
      ],
      faqItems: [
        {
          question: "Какие виды столярных работ вы выполняете?",
          answer:
            "Мы выполняем мебель на заказ, интерьерные элементы, офисную мебель, шкафы, кухни и другие практичные решения из дерева и плитных материалов.",
        },
        {
          question: "Берете ли вы более крупные проекты для бизнеса?",
          answer:
            "Да. В зависимости от объема и сроков мы берем и отдельные проекты для офисов, магазинов и других коммерческих интерьеров.",
        },
      ],
    },
  },
};

export function getGalleryPath(locale: string) {
  switch (locale) {
    case "sr":
      return "/sr/galerija-radova";
    case "ru":
      return "/ru/galereya-rabot";
    default:
      return "/en/gallery";
  }
}

export function getServicePage(locale: string, key: ServiceKey) {
  const resolvedLocale = routing.locales.includes(locale as Locale)
    ? (locale as Locale)
    : routing.defaultLocale;

  return serviceCopy[resolvedLocale][key];
}

export function getSharedServiceCopy(locale: string) {
  const resolvedLocale = routing.locales.includes(locale as Locale)
    ? (locale as Locale)
    : routing.defaultLocale;

  return sharedCopy[resolvedLocale];
}

export function getServiceConfig(key: ServiceKey) {
  return servicePages.find((service) => service.key === key);
}

export function getServiceSlug(locale: string, key: ServiceKey) {
  const resolvedLocale = routing.locales.includes(locale as Locale)
    ? (locale as Locale)
    : routing.defaultLocale;
  const service = getServiceConfig(key);
  if (!service) {
    return null;
  }

  return service.slugs[resolvedLocale];
}

export function getServicePath(locale: string, key: ServiceKey) {
  const slug = getServiceSlug(locale, key);
  const resolvedLocale = routing.locales.includes(locale as Locale)
    ? (locale as Locale)
    : routing.defaultLocale;

  return slug ? `/${resolvedLocale}/${slug}` : null;
}

export function getServiceKeyBySlug(locale: string, slug: string) {
  const resolvedLocale = routing.locales.includes(locale as Locale)
    ? (locale as Locale)
    : routing.defaultLocale;

  return (
    servicePages.find((service) => service.slugs[resolvedLocale] === slug)
      ?.key ?? null
  );
}
