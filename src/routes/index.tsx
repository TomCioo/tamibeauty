import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Star,
  Sparkles,
  Hand,
  Footprints,
  Eye,
  Scissors,
  Flower2,
  Stethoscope,
} from "lucide-react";
import heroImg from "@/assets/hero.jpeg";
import aboutImg from "@/assets/about.jpeg";
import g1 from "@/assets/g1.jpeg";
import g2 from "@/assets/g2.jpeg";
import g3 from "@/assets/g3.jpeg";
import g4 from "@/assets/g4.jpeg";
import g5 from "@/assets/g5.jpeg";
import g6 from "@/assets/g6.jpeg";

const BOOKSY_URL =
  "https://booksy.com/pl-pl/74136_tami-beauty-studio_paznokcie_20383_gdansk";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TAMI Beauty Studio — Salon kosmetyczny w Gdańsku" },
      {
        name: "description",
        content:
          "TAMI Beauty Studio w Gdańsku — manicure, pedicure, stylizacja rzęs i brwi, depilacja, podologia. Premium beauty z indywidualnym podejściem. Zarezerwuj wizytę online.",
      },
      { property: "og:title", content: "TAMI Beauty Studio — Gdańsk" },
      {
        property: "og:description",
        content:
          "Piękno, które podkreśla Twoją naturalność. Salon premium w sercu Gdańska.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400;500&display=swap",
      },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Hand,
    title: "Manicure",
    desc: "Klasyczny, hybrydowy, japoński. Pielęgnacja i stylizacja dłoni na najwyższym poziomie.",
  },
  {
    icon: Footprints,
    title: "Pedicure",
    desc: "Kosmetyczny i SPA pedicure z hybrydą — komfort i estetyka na każdy sezon.",
  },
  {
    icon: Sparkles,
    title: "Przedłużanie paznokci",
    desc: "Żelowe i akrylowe przedłużanie z indywidualnym zdobieniem.",
  },
  {
    icon: Eye,
    title: "Stylizacja rzęs",
    desc: "Przedłużanie i laminacja rzęs — głębokie, naturalne spojrzenie.",
  },
  {
    icon: Scissors,
    title: "Brwi — laminacja & henna",
    desc: "Regulacja, koloryzacja i laminacja — brwi idealnie dopasowane do twarzy.",
  },
  {
    icon: Flower2,
    title: "Depilacja",
    desc: "Pasta cukrowa (Liza) i wosk — delikatna, skuteczna depilacja kobieca i męska.",
  },
  {
    icon: Stethoscope,
    title: "Podologia",
    desc: "Profesjonalna opieka nad stopami — wrastające paznokcie, modzele, pęknięcia.",
  },
  {
    icon: Sparkles,
    title: "Express",
    desc: "Szybkie zabiegi dla zabieganych — bez kompromisów w jakości.",
  },
];

const reviews = [
  {
    name: "Aleksandra K.",
    text: "Najlepszy salon w Trójmieście! Atmosfera, profesjonalizm i efekt zachwycający. Wracam co miesiąc.",
  },
  {
    name: "Magdalena W.",
    text: "Cudowne miejsce. Dziewczyny mają niesamowite oko do detalu, a paznokcie trzymają się idealnie 4 tygodnie.",
  },
  {
    name: "Karolina S.",
    text: "Rzęsy robione u TAMI to zupełnie inna jakość. Naturalne, lekkie, a jednocześnie efektowne. Polecam!",
  },
  {
    name: "Natalia P.",
    text: "Pedicure to istny rytuał relaksu. Wnętrze przepiękne, obsługa serdeczna. Czuję się jak królowa.",
  },
  {
    name: "Patrycja M.",
    text: "Henna brwi i laminacja — sztos. Po raz pierwszy ktoś tak dobrze dobrał kształt. Najlepsza decyzja!",
  },
  {
    name: "Joanna L.",
    text: "Depilacja pastą cukrową to coś, czego się nie spodziewałam. Bezboleśnie, dokładnie, hyper czysto.",
  },
];

const hours = [
  ["Poniedziałek", "09:00 – 20:00"],
  ["Wtorek", "09:00 – 20:00"],
  ["Środa", "09:00 – 20:00"],
  ["Czwartek", "09:00 – 20:00"],
  ["Piątek", "09:00 – 20:00"],
  ["Sobota", "09:00 – 20:00"],
  ["Niedziela", "09:00 – 18:00"],
];

const gallery = [g1, g2, g3, g4, g5, g6];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Booking />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    ["O nas", "#o-nas"],
    ["Oferta", "#oferta"],
    ["Rezerwacja", "#rezerwacja"],
    ["Galeria", "#galeria"],
    ["Opinie", "#opinie"],
    ["Kontakt", "#kontakt"],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-wide">
          TAMI <span className="text-gold">Beauty</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center px-5 py-2 text-xs tracking-luxury uppercase bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Rezerwuj
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center">
      <img
        src={heroImg}
        alt="Wnętrze TAMI Beauty Studio"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background/80" />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 pt-24 text-center">
        <p className="animate-fade-in text-gold tracking-luxury uppercase text-xs mb-6">
          Gdańsk · Powstańców Warszawskich 23
        </p>
        <h1 className="animate-fade-in-up text-5xl sm:text-7xl lg:text-8xl font-display leading-[0.95]">
          TAMI <span className="italic text-gold">Beauty</span>
          <br />
          Studio
        </h1>
        <p
          className="animate-fade-in-up mt-8 text-lg sm:text-xl max-w-2xl mx-auto text-foreground/80 font-light"
          style={{ animationDelay: "0.2s" }}
        >
          Piękno, które podkreśla Twoją naturalność.
        </p>
        <div
          className="animate-fade-in-up mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 text-xs tracking-luxury uppercase bg-gradient-gold text-primary-foreground shadow-elegant hover:opacity-90 transition-opacity"
          >
            Zarezerwuj wizytę
          </a>
          <a
            href="#oferta"
            className="inline-flex items-center justify-center px-10 py-4 text-xs tracking-luxury uppercase border border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Zobacz ofertę
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold text-xs tracking-luxury">
        ↓ scroll
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-gold tracking-luxury uppercase text-xs mb-4">
      {children}
    </p>
  );
}

function About() {
  return (
    <section id="o-nas" className="py-28 lg:py-40 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={aboutImg}
            alt="Recepcja TAMI Beauty Studio"
            width={1200}
            height={1400}
            loading="lazy"
            className="w-full h-[600px] object-cover shadow-elegant"
          />
          <div className="hidden lg:block absolute -bottom-8 -right-8 bg-card px-8 py-6 shadow-soft border border-border">
            <p className="font-display text-4xl text-gold">4.9★</p>
            <p className="text-xs tracking-luxury uppercase text-muted-foreground mt-1">
              656 opinii
            </p>
          </div>
        </div>
        <div>
          <SectionLabel>O nas</SectionLabel>
          <h2 className="text-4xl lg:text-5xl mb-8">
            Sztuka piękna<br />
            <span className="italic text-gold">w sercu Gdańska</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            TAMI Beauty Studio to przestrzeń, w której doświadczenie spotyka
            się z pasją. Od lat tworzymy miejsce, gdzie każda klientka czuje
            się wyjątkowo, a każdy zabieg jest precyzyjnie dopasowany do jej
            potrzeb i stylu życia.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Pracujemy wyłącznie z najlepszymi markami kosmetyków
            profesjonalnych. Stawiamy na zdrowie skóry, naturalność i
            ponadczasowy efekt — bo prawdziwe piękno nigdy nie wychodzi z mody.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            {[
              ["10+", "lat doświadczenia"],
              ["20K+", "zadowolonych klientek"],
              ["100%", "indywidualne podejście"],
            ].map(([n, t]) => (
              <div key={t}>
                <p className="font-display text-3xl text-gold">{n}</p>
                <p className="text-xs text-muted-foreground mt-2">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="oferta" className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <SectionLabel>Oferta usług</SectionLabel>
          <h2 className="text-4xl lg:text-5xl mb-6">
            Zabiegi <span className="italic text-gold">premium</span>
          </h2>
          <p className="text-muted-foreground">
            Pełny zakres usług kosmetycznych — od pielęgnacji dłoni i stóp,
            przez stylizację spojrzenia, po profesjonalną podologię.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="hover-lift group bg-card border border-border p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-gold text-primary-foreground mb-6 group-hover:scale-110 transition-transform">
                <s.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 text-xs tracking-luxury uppercase border border-foreground/30 hover:bg-foreground hover:text-background transition-colors"
          >
            Pełny cennik na Booksy
          </a>
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section
      id="rezerwacja"
      className="relative py-28 lg:py-40 bg-gradient-gold text-primary-foreground overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_30%_30%,white,transparent_50%)]" />
      <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <p className="tracking-luxury uppercase text-xs mb-4 opacity-80">
          Rezerwacja online
        </p>
        <h2 className="text-4xl lg:text-6xl mb-8">
          Umów wizytę<br />
          <span className="italic">w kilka kliknięć</span>
        </h2>
        <p className="opacity-90 mb-12 text-lg font-light">
          Rezerwacja przez Booksy — wybierz zabieg, dogodny termin i ulubioną
          stylistkę. Otrzymasz potwierdzenie SMS i przypomnienie przed wizytą.
        </p>
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-12 py-5 text-xs tracking-luxury uppercase bg-background text-foreground shadow-elegant hover:opacity-90 transition-opacity"
        >
          Umów wizytę online
        </a>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>Galeria</SectionLabel>
          <h2 className="text-4xl lg:text-5xl mb-6">
            Nasze <span className="italic text-gold">realizacje</span>
          </h2>
        </div>
        <div className="columns-2 lg:columns-3 gap-4 space-y-4">
          {gallery.map((src, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden group cursor-pointer"
            >
              <img
                src={src}
                alt={`TAMI Beauty Studio — realizacja ${i + 1}`}
                loading="lazy"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/tamistudio2020/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
          >
            <Instagram size={16} /> Więcej na @tamistudio2020
          </a>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="opinie" className="py-28 lg:py-40 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>Opinie klientek</SectionLabel>
          <h2 className="text-4xl lg:text-5xl mb-6">
            One nam <span className="italic text-gold">zaufały</span>
          </h2>
          <div className="flex items-center justify-center gap-1 text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">
              4.9 z 656 opinii na Booksy
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-card border border-border p-8 hover-lift"
            >
              <div className="flex gap-1 text-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed italic mb-6">
                „{r.text}"
              </p>
              <p className="text-sm tracking-wide">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionLabel>Kontakt</SectionLabel>
          <h2 className="text-4xl lg:text-5xl mb-10">
            Odwiedź <span className="italic text-gold">nas</span>
          </h2>

          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <MapPin className="text-gold flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-xs tracking-luxury uppercase text-muted-foreground mb-1">
                  Adres
                </p>
                <p>Powstańców Warszawskich 23</p>
                <p>80-152 Gdańsk</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="text-gold flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-xs tracking-luxury uppercase text-muted-foreground mb-1">
                  Telefon
                </p>
                <a
                  href="tel:+48602889414"
                  className="hover:text-gold transition-colors"
                >
                  602 889 414
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="text-gold flex-shrink-0 mt-1" size={20} />
              <div className="w-full">
                <p className="text-xs tracking-luxury uppercase text-muted-foreground mb-3">
                  Godziny otwarcia
                </p>
                <ul className="space-y-2 text-sm">
                  {hours.map(([d, h]) => (
                    <li
                      key={d}
                      className="flex justify-between border-b border-border/60 pb-2"
                    >
                      <span>{d}</span>
                      <span className="text-muted-foreground">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/tamistudio2020/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 inline-flex items-center justify-center border border-border hover:bg-gradient-gold hover:text-primary-foreground hover:border-transparent transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/TaMinailbar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 inline-flex items-center justify-center border border-border hover:bg-gradient-gold hover:text-primary-foreground hover:border-transparent transition-all"
            >
              <Facebook size={18} />
            </a>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center px-8 text-xs tracking-luxury uppercase bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Umów wizytę
            </a>
          </div>
        </div>

        <div className="h-[500px] lg:h-full min-h-[500px] shadow-elegant overflow-hidden">
          <iframe
            title="Mapa TAMI Beauty Studio"
            src="https://www.google.com/maps?q=Powsta%C5%84c%C3%B3w+Warszawskich+23,+80-152+Gda%C5%84sk&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
        <p className="font-display text-lg text-foreground">
          TAMI <span className="text-gold">Beauty Studio</span>
        </p>
        <p>© {new Date().getFullYear()} TAMI Beauty Studio. Wszelkie prawa zastrzeżone.</p>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/tamistudio2020/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/TaMinailbar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
