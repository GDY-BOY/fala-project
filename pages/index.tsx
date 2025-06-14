import Image from "next/image";
import { Card } from "@/components/ui/card";
import { BookingWidget } from "@/components/BookingWidget";
import { BookingButton } from "@/components/BookingButton";

export default function Home() {
  return (
    <>
      {/* Main content */}
      <main className="flex flex-col items-center justify-start w-full overflow-y-auto font-sans" style={{ fontFamily: "'Inter', Arial, sans-serif" }}>
        {/* Hero Section */}
        <section className="w-full min-h-screen h-screen flex flex-col md:flex-row relative p-0">
          {/* Logo in top left corner */}
          <div
            className="z-30"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              padding: "2vw",
              width: "clamp(96px, 15vw, 200px)", // reduced from 20vw and 256px
              height: "clamp(96px, 15vw, 200px)", // reduced from 20vw and 256px
              maxWidth: "20vw", // reduced from 30vw
              minWidth: "96px",
              pointerEvents: "none",
              background: "none",
            }}
          >
            <Image
              src="/images/fala_logo.png"
              alt="Fala Logo"
              width={256}
              height={256}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>
          {/* Left (text, pinkish) */}
          <div
            className="flex flex-col justify-center items-center w-full md:w-1/2 h-1/2 md:h-full px-6 md:px-12 py-6 md:py-0 z-20 relative" // added relative
            style={{
              background: "#FFF7F1",
              textAlign: "center",
            }}
          >
            {/* Phone number - visible only on mobile */}
            <div
              className="absolute z-20 font-normal md:hidden"
              style={{
                top: "2vw",
                right: "2vw",
                color: "#222",
                letterSpacing: "1px",
                fontSize: "1.08rem", // reduced from 1.2rem
                fontWeight: 400,
              }}
            >
              <span className="phone-number">+48 695 296 763</span>
            </div>
            <div className="hero-content w-full max-w-md mx-auto md:max-w-2xl" style={{ marginTop: "80px" }}>
              <h1
                className="mb-3 md:mb-6" // reduced for mobile
                style={{
                  fontFamily: "NotulenSerifExtraBold, 'Merriweather', Georgia, serif",
                  fontSize: "2.2rem",
                  fontWeight: 900,
                  color: "#386641",
                  lineHeight: "2.7rem",
                  letterSpacing: "-1px",
                }}
              >
                Fizjoterapia<br />w Gdyni
              </h1>
              <div
                style={{ fontFamily: "'DM Sans', Arial, sans-serif", textAlign: "left" }}
                className="md:text-[2.2rem] md:leading-tight md:mb-8"
              >
                <p
                  className="mb-2 md:mb-3 hero-lead" // reduced for mobile
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#222426",
                    textAlign: "left",
                  }}
                >
                  Boli Cię?
                </p>
                <p
                  className="mb-2 md:mb-3 hero-lead" // reduced for mobile
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#222426",
                    textAlign: "left",
                  }}
                >
                  Chcesz bezpiecznie wrócić do sportu?
                </p>
                <p
                  className="mb-3 md:mb-4 font-semibold italic hero-lead" // reduced for mobile
                  style={{
                    fontSize: "0.95rem",
                    color: "#386641",
                    textAlign: "left",
                  }}
                >
                  Wiem jak Ci pomóc!
                </p>
                {/* Hero section kontakt button */}
                <button
                  className="border-2 border-[#A984C4] px-8 py-2 transition text-[#A984C4] font-bold text-lg bg-transparent hover:bg-[#A984C4] hover:text-white md:text-2xl md:px-12 md:py-3"
                  style={{
                    background: "transparent",
                    boxShadow: "none",
                    borderRadius: 0,
                    transition: "all 0.2s ease-in-out",
                  }}
                  onClick={() => {
                    const el = document.getElementById("kontakt-section");
                    if (el) {
                      setTimeout(() => {
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }, 100);
                    }
                  }}
                >
                  kontakt
                </button>
              </div>
            </div>
          </div>
          {/* Right (image, yellow) */}
          <div
            className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center"
            style={{
              background: "#F8E1B4",
              overflow: "hidden",
            }}
          >
            {/* Phone number - visible only on desktop */}
            <div
              className="absolute z-20 font-normal hidden md:block"
              style={{
                top: "2vw",
                right: "2vw",
                color: "#222",
                letterSpacing: "1px",
                fontSize: "1.08rem", // reduced from 1.2rem
                fontWeight: 400,
              }}
            >
              <span className="phone-number">+48 695 296 763</span>
            </div>
            {/* Image with margin and half-dome crop */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-end justify-center"
              style={{
                width: "70%",
                height: "90%",
                marginTop: 0,
                marginBottom: 0,
                borderTopRightRadius: "120px",
                borderTopLeftRadius: "120px",
                borderBottomRightRadius: "0",
                borderBottomLeftRadius: "0",
                overflow: "hidden",
                background: "#F8E1B4",
                clipPath: "ellipse(100% 66% at 50% 66%)",
              }}
            >
              <Image
                src="/images/7.jpeg"
                alt="Hero"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center 20%",
                }}
                className="w-full h-full"
                priority
              />
            </div>
          </div>
        </section>

        {/* Cześć Section */}
        <section className="w-full bg-[#F8F8F8] min-h-screen h-screen flex flex-col md:flex-row relative px-0">
          {/* Left (image, arch crop) */}
          <div
            className="flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full relative"
            style={{
              background: "#F8F8F8",
              overflow: "hidden",
            }}
          >
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-end justify-center"
              style={{
                width: "80%",
                height: "90%",
                marginTop: 0,
                marginBottom: 0,
                borderTopLeftRadius: "240px",
                borderTopRightRadius: "240px",
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0",
                overflow: "hidden",
                background: "#F8F8F8",
                clipPath: "ellipse(100% 66% at 50% 66%)",
              }}
            >
              <Image
                src="/images/4.jpeg"
                alt="Cześć"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center 20%",
                }}
                className="w-full h-full"
                priority
              />
            </div>
          </div>
          {/* Right (text) */}
          <div
            className="flex flex-col justify-center items-start w-full md:w-1/2 h-1/2 md:h-full px-2 md:px-8 py-4 md:py-0 z-20"
            style={{
              background: "#F8F8F8",
              textAlign: "left",
            }}
          >
            <div
              className="w-full max-w-[600px] mx-auto"
              style={{
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
              }}
            >
              <h2
                className="section-header mb-6 md:mb-8"
                style={{
                  fontFamily: "NotulenSerifExtraBold, 'Merriweather', Georgia, serif",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 900,
                  color: "#386641",
                  letterSpacing: "-1px",
                  lineHeight: "1.2",
                  paddingTop: "0.5rem",
                  marginTop: "2.2rem", // add space from top on mobile
                  marginBottom: "1.2rem", // bring header closer to text
                }}
              >
                Cześć!
              </h2>
              <div
                className="section-content"
                style={{
                  fontFamily: "'DM Sans', Arial, sans-serif",
                  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                  color: "#222426",
                  fontWeight: 400,
                  lineHeight: "1.6",
                  maxWidth: "100%",
                  padding: "0.5rem 0",
                }}
              >
                <p className="mb-3 md:mb-4" style={{ fontWeight: 500 }}>
                  Nazywam się <span className="font-bold">Agata Kępa</span>, jestem fizjoterapeutką.<br />
                  Doświadczenie w zawodzie zdobywałam współpracując z:
                </p>
                <ul
                  className="mb-3 md:mb-4 list-disc pl-5 md:pl-6 cześć-bullets"
                  style={{ fontSize: "clamp(0.85rem, 2.5vw, 0.97rem)" }} // dynamic scaling for mobile
                >
                  <li className="mb-2">
                    <span className="font-bold">Polskim Związkiem Lekkiej Atletyki</span>, gdzie opiekowałam się głównie blokiem damskiego sprintu na zgrupowaniach w kraju i za granicą a także na imprezach rangi Mistrzostw Świata i Europy,
                  </li>
                  <li>
                    Byłam członkinią sztabu medycznego podczas <span className="font-bold">Igrzysk Olimpijskich</span> w Paryżu w 2024 roku.
                  </li>
                  <li>
                    Kliniką <span className="font-bold">Rehasport</span> w Gdańsku,
                  </li>
                  <li>
                    Swoją wiedzą i doświadczeniem dzielę się ze studentami <span className="font-bold">Wyższej Szkoły Zdrowia</span> w Gdańsku, prowadząc zajęcia z Programowania Fizjoterapii w Medycynie Sportowej oraz z Regeneracji i Odnowy Biologicznej na kierunkach Fizjoterapia oraz Trener Medyczny.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fala Section */}
        <section className="w-full min-h-screen h-screen flex flex-col md:flex-row relative px-0">
          {/* Left (text) */}
          <div
            className="flex flex-col justify-center items-center w-full md:w-1/2 h-1/2 md:h-full px-8 md:px-16 py-4 md:py-0 z-20" // increased horizontal padding
            style={{
              background: "#fff",
              textAlign: "left",
            }}
          >
            <div
              className="w-full max-w-2xl mx-auto"
              style={{
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                width: "90%", // control width relative to container
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', Arial, sans-serif",
                  fontSize: "clamp(1.1rem, 3vw, 2.2rem)", // reduced from 2.8rem
                  fontWeight: 400,
                  color: "#222426",
                  lineHeight: "1.4",
                  marginBottom: "2rem",
                }}
                className="md:leading-[1.4] md:mb-[3rem]"
              >
                <span style={{ color: "#386641", fontWeight: 700 }}>Fala Fizjo</span> to miejsce stworzone z pasji i potrzeby niesienia profesjonalnej pomocy fizjoterapeutycznej – w oparciu o aktualne światowe standardy, w atmosferze zrozumienia, motywacji i wsparcia.
              </p>
              {/* Fala section uslugi button */}
              <button
                className="border-2 border-[#A984C4] px-8 py-2 transition text-[#A984C4] font-bold text-lg bg-transparent hover:bg-[#A984C4] hover:text-white md:text-2xl md:px-12 md:py-3"
                style={{
                  background: "transparent",
                  boxShadow: "none",
                  borderRadius: 0,
                  transition: "all 0.2s ease-in-out",
                }}
                onClick={() => {
                  const el = document.getElementById("uslugi-section");
                  if (el) {
                    setTimeout(() => {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                  }
                }}
              >
                usługi
              </button>
            </div>
          </div>
          {/* Right (image, arch crop, yellow bg) */}
          <div
            className="flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full relative"
            style={{
              background: "#F8E1B4",
              overflow: "hidden",
            }}
          >
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-end justify-center"
              style={{
                width: "80%",
                height: "90%",
                marginTop: 0,
                marginBottom: 0,
                borderTopLeftRadius: "240px",
                borderTopRightRadius: "240px",
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0",
                overflow: "hidden",
                background: "#F8E1B4",
                clipPath: "ellipse(100% 66% at 50% 66%)",
              }}
            >
              <Image
                src="/images/8.jpeg"
                alt="Fala"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center 20%",
                }}
                className="w-full h-full"
                priority
              />
            </div>
          </div>
        </section>

        {/* Usługi Section */}
        <section id="uslugi-section" className="w-full min-h-screen h-screen flex flex-col md:flex-row relative px-0" style={{ background: "#FFF7F1" }}>
          {/* Left (title + buttons) */}
          <div
            className="flex flex-col justify-center items-center w-full md:w-1/2 h-1/2 md:h-full px-3 md:px-0 py-4 md:py-0 z-20"
            style={{
              background: "#FFF7F1",
              textAlign: "left",
            }}
          >
            <div className="w-full max-w-xl mx-auto flex flex-col items-start md:items-start">
              <span
                style={{
                  fontFamily: "NotulenSerifExtraBold, 'Merriweather', Georgia, serif",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 5vw, 3rem)", // adjusted scaling
                  color: "#386641",
                  letterSpacing: "-2px",
                  lineHeight: "1",
                  display: "block",
                  marginBottom: "2.5rem",
                }}
              >
                Usługi
              </span>
              <div className="flex flex-col gap-4 md:gap-8 w-full"> {/* reduced gap on mobile */}
                <button
                  className="uslugi-btn"
                  style={{
                    width: "100%",
                    border: "3px solid #C7A6E5",
                    borderRadius: 0,
                    background: "transparent",
                    color: "#C7A6E5",
                    fontWeight: 700,
                    fontSize: "clamp(1.2rem, 4vw, 2rem)", // adjusted font scaling
                    padding: "clamp(0.8rem, 2vw, 1.2rem) 0", // adjusted padding scaling
                    textAlign: "center",
                    letterSpacing: "1px",
                    transition: "all 0.2s ease-in-out",
                  }}
                  onClick={() => {
                    const el = document.getElementById("fizjoterapia-sportowa-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  FIZJOTERAPIA SPORTOWA
                </button>
                <button
                  className="uslugi-btn"
                  style={{
                    width: "100%",
                    border: "3px solid #C7A6E5",
                    borderRadius: 0, // sharp corners
                    background: "transparent",
                    color: "#C7A6E5",
                    fontWeight: 700,
                    fontSize: "clamp(1.2rem, 4vw, 2rem)", // adjusted font scaling
                    padding: "clamp(0.8rem, 2vw, 1.2rem) 0", // adjusted padding scaling
                    textAlign: "center",
                    letterSpacing: "1px",
                    transition: "all 0.2s ease-in-out",
                  }}
                  onClick={() => {
                    const el = document.getElementById("fizjoterapia-ortopedyczna-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  FIZJOTERAPIA ORTOPEDYCZNA
                </button>
                <button
                  className="uslugi-btn"
                  style={{
                    width: "100%",
                    border: "3px solid #C7A6E5",
                    borderRadius: 0, // sharp corners
                    background: "transparent",
                    color: "#C7A6E5",
                    fontWeight: 700,
                    fontSize: "clamp(1.2rem, 4vw, 2rem)", // adjusted font scaling
                    padding: "clamp(0.8rem, 2vw, 1.2rem) 0", // adjusted padding scaling
                    textAlign: "center",
                    letterSpacing: "1px",
                    transition: "all 0.2s ease-in-out",
                  }}
                  onClick={() => {
                    const el = document.getElementById("masaz-sportowy-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  MASAŻ SPORTOWY
                </button>
                <button
                  className="uslugi-btn"
                  style={{
                    width: "100%",
                    border: "3px solid #C7A6E5",
                    borderRadius: 0,
                    background: "transparent",
                    color: "#C7A6E5",
                    fontWeight: 700,
                    fontSize: "clamp(1.2rem, 4vw, 2rem)", // adjusted font scaling
                    padding: "clamp(0.8rem, 2vw, 1.2rem) 0", // adjusted padding scaling
                    textAlign: "center",
                    letterSpacing: "1px",
                    transition: "all 0.2s ease-in-out",
                  }}
                  onClick={() => {
                    const el = document.getElementById("terapia-tecar-section");
                    if (el) {
                      setTimeout(() => {
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }, 100);
                    }
                  }}
                >
                  TERAPIA TECAR
                </button>
              </div>
            </div>
          </div>
          {/* Right (logo) */}
          <div
            className="flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full relative"
            style={{
              background: "#FFF7F1",
            }}
          >
            <div
              className="flex items-center justify-center w-full h-full"
              style={{
                minHeight: 200,
              }}
            >
              <Image
                src="/images/fala_logo.png"
                alt="Fala Fizjo Logo"
                width={420}
                height={180}
                style={{
                  width: "70%",
                  height: "auto",
                  maxWidth: 420,
                  minWidth: 180,
                  display: "block",
                }}
                priority
              />
            </div>
          </div>
        </section>

        {/* Fizjoterapia sportowa */}
        <section
          id="fizjoterapia-sportowa-section"
          className="w-full min-h-screen h-screen flex flex-col md:flex-row relative px-0"
          style={{ background: "#9BAF8B" }}
        >
          {/* Left (text) */}
          <div
            className="flex flex-col justify-start md:justify-center items-start w-full md:w-1/2 h-1/2 md:h-full px-4 md:px-20 py-4 md:py-0 z-20"
            style={{
              background: "#9BAF8B",
              textAlign: "left",
              paddingTop: "4rem",
            }}
          >
            <div
              className="w-full max-w-2xl mx-auto mt-8 md:mt-0"
              style={{
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
              }}
            >
              <h2
                className="section-header mb-6 md:mb-8"
                style={{
                  fontFamily: "NotulenSerifExtraBold, 'Merriweather', Georgia, serif",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 900,
                  color: "#2D3924",
                  letterSpacing: "-1px",
                  lineHeight: "1.2",
                }}
              >
                Fizjoterapia sportowa
              </h2>
              <div
                className="section-content"
                style={{
                  fontFamily: "'DM Sans', Arial, sans-serif",
                  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                  color: "#fff",
                  fontWeight: 400,
                  lineHeight: "1.6",
                  maxWidth: "90%",
                }}
              >
                <p style={{ marginBottom: "0.7rem" }}>
                  Dla zawodowców, amatorów i wszystkich, którzy kochają ruch. Pomagam wrócić do treningów po kontuzji, planując skuteczną i bezpieczną ścieżkę rehabilitacji.
                </p>
                <p style={{ marginBottom: "0.7rem" }}>
                  Pokażę Ci, jak trenować mądrze, by uniknąć kolejnych przerw. Każdy plan opieram na indywidualnej ocenie – bo każdy organizm i cel sportowy są inne. Metody, które wykorzystuję to między innymi:
                </p>
                <ul style={{ marginLeft: "1.1rem", marginBottom: 0, color: "#fff", fontSize: "0.98rem", lineHeight: "1.4rem", listStyleType: "disc" }} className="md:text-[1.25rem] md:leading-[2rem]">
                  <li>terapia manualna,</li>
                  <li>ćwiczenia i trening medyczny,</li>
                  <li>suche igłowanie,</li>
                  <li>pinoterapia,</li>
                  <li>masaż,</li>
                  <li>kinesio taping.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Right (image, arch crop) - only on desktop */}
          <div
            className="hidden md:flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full relative"
            style={{
              background: "#9BAF8B",
              overflow: "hidden",
            }}
          >
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-end justify-center"
              style={{
                width: "80%",
                height: "90%",
                marginTop: 0,
                marginBottom: 0,
                borderTopLeftRadius: "180px",
                borderTopRightRadius: "180px",
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0",
                overflow: "hidden",
                background: "#9BAF8B",
                clipPath: "ellipse(100% 66% at 50% 66%)",
              }}
            >
              <Image
                src="/images/2.jpeg"
                alt="Fizjoterapia sportowa"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center 20%",
                }}
                className="w-full h-full"
                priority
              />
            </div>
          </div>
        </section>

        {/* Fizjoterapia ortopedyczna */}
        <section
          id="fizjoterapia-ortopedyczna-section"
          className="w-full min-h-screen h-screen flex flex-col md:flex-row relative px-0"
          style={{ background: "#C4DAAF" }}
        >
          {/* Left (image, arch crop) - only on desktop */}
          <div
            className="hidden md:flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full relative"
            style={{
              background: "#C4DAAF",
              overflow: "hidden",
            }}
          >
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-end justify-center"
              style={{
                width: "80%",
                height: "90%",
                marginTop: 0,
                marginBottom: 0,
                borderTopLeftRadius: "180px",
                borderTopRightRadius: "180px",
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0",
                overflow: "hidden",
                background: "#C4DAAF",
                clipPath: "ellipse(100% 66% at 50% 66%)",
              }}
            >
              <Image
                src="/images/6.jpeg"
                alt="Fizjoterapia ortopedyczna"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center 20%",
                }}
                className="w-full h-full"
                priority
              />
            </div>
          </div>
          {/* Right (text) */}
          <div
            className="flex flex-col justify-start md:justify-center items-start w-full md:w-1/2 h-1/2 md:h-full px-4 md:px-20 py-4 md:py-0 z-20"
            style={{
              background: "#C4DAAF",
              textAlign: "left",
              paddingTop: "4rem",
            }}
          >
            <div
              className="w-full max-w-2xl mx-auto mt-8 md:mt-0"
              style={{
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
              }}
            >
              <h2
                className="section-header mb-6 md:mb-8"
                style={{
                  fontFamily: "NotulenSerifExtraBold, 'Merriweather', Georgia, serif",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 900,
                  color: "#2D3924",
                  letterSpacing: "-1px",
                  lineHeight: "1.2",
                }}
              >
                Fizjoterapia ortopedyczna
              </h2>
              <div
                className="section-content"
                style={{
                  fontFamily: "'DM Sans', Arial, sans-serif",
                  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                  color: "#fff",
                  fontWeight: 400,
                  lineHeight: "1.6",
                  maxWidth: "90%",
                }}
              >
                <p style={{ marginBottom: "0.7rem" }}>
                  Dla osób po urazach, operacjach, a także tych, którzy zmagają się z bólem lub ograniczeniem ruchomości. Pomogę Ci zrozumieć źródło problemu i pokażę, co robić, by wrócić na zaplanowaną drogę, która kończy się odzyskaniem sprawności.
                </p>
                <p style={{ marginBottom: "0.7rem" }}>
                  W swojej pracy wykorzystuję m.in.:
                </p>
                <ul style={{ marginLeft: "1.1rem", marginBottom: 0, color: "#fff", fontSize: "0.98rem", lineHeight: "1.4rem", listStyleType: "disc" }} className="md:text-[1.25rem] md:leading-[2rem]">
                  <li>terapię manualną,</li>
                  <li>rozluźnianie mięśniowo-powięziowe,</li>
                  <li>ćwiczenia i trening medyczny,</li>
                  <li>suche igłowanie,</li>
                  <li>masaż,</li>
                  <li>kinesio taping.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Masaż sportowy */}
        <section
          id="masaz-sportowy-section"
          className="w-full min-h-screen h-screen flex flex-col md:flex-row relative px-0"
          style={{ background: "#9BAF8B" }}
        >
          {/* Left (text) */}
          <div
            className="flex flex-col justify-start md:justify-center items-start w-full md:w-1/2 h-1/2 md:h-full px-4 md:px-20 py-4 md:py-0 z-20"
            style={{
              background: "#9BAF8B",
              textAlign: "left",
              paddingTop: "4rem",
            }}
          >
            <div
              className="w-full max-w-2xl mx-auto mt-8 md:mt-0"
              style={{
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
              }}
            >
              <h2
                className="section-header mb-6 md:mb-8"
                style={{
                  fontFamily: "NotulenSerifExtraBold, 'Merriweather', Georgia, serif",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 900,
                  color: "#2D3924",
                  letterSpacing: "-1px",
                  lineHeight: "1.2",
                }}
              >
                Masaż sportowy
              </h2>
              <div
                className="section-content"
                style={{
                  fontFamily: "'DM Sans', Arial, sans-serif",
                  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                  color: "#fff",
                  fontWeight: 400,
                  lineHeight: "1.6",
                  maxWidth: "90%",
                }}
              >
                <p style={{ marginBottom: "0.7rem" }}>
                  Masaż sportowy to coś więcej niż tylko przyjemne rozmasowanie zmęczonych mięśni po treningu. To świetne narzędzie dla osób aktywnych fizycznie – niezależnie od tego, czy jesteś zawodowym sportowcem, czy po prostu lubisz biegać lub ćwiczyć na siłowni.
                </p>
                <p style={{ marginBottom: "0.7rem" }}>
                  Co daje masaż sportowy?
                </p>
                <ul style={{ marginLeft: "1.1rem", marginBottom: 0, color: "#fff", fontSize: "0.98rem", lineHeight: "1.4rem", listStyleType: "disc" }} className="md:text-[1.25rem] md:leading-[2rem]">
                  <li>Pobudzenie krążenia,</li>
                  <li>Wsparcie regeneracji,</li>
                  <li>Mniejsze ryzyko kontuzji,</li>
                  <li>Większy zakres ruchu,</li>
                  <li>Lepsze samopoczucie.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Right (image, arch crop) - only on desktop */}
          <div
            className="hidden md:flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full relative"
            style={{
              background: "#9BAF8B",
              overflow: "hidden",
            }}
          >
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-end justify-center"
              style={{
                width: "80%",
                height: "90%",
                marginTop: 0,
                marginBottom: 0,
                borderTopLeftRadius: "180px",
                borderTopRightRadius: "180px",
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0",
                overflow: "hidden",
                background: "#9BAF8B",
                clipPath: "ellipse(100% 66% at 50% 66%)",
              }}
            >
              <Image
                src="/images/2.jpeg"
                alt="Masaż sportowy"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center 20%",
                }}
                className="w-full h-full"
                priority
              />
            </div>
          </div>
        </section>

        {/* Terapia TECAR */}
        <section
          id="terapia-tecar-section"
          className="w-full min-h-screen h-screen flex flex-col md:flex-row relative px-0"
          style={{ background: "#C4DAAF" }}
        >
          {/* Left (image, arch crop) - only on desktop */}
          <div
            className="hidden md:flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full relative"
            style={{
              background: "#C4DAAF",
              overflow: "hidden",
            }}
          >
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-end justify-center"
              style={{
                width: "80%",
                height: "90%",
                marginTop: 0,
                marginBottom: 0,
                borderTopLeftRadius: "180px",
                borderTopRightRadius: "180px",
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0",
                overflow: "hidden",
                background: "#C4DAAF",
                clipPath: "ellipse(100% 66% at 50% 66%)",
              }}
            >
              <Image
                src="/images/3.jpeg"
                alt="Terapia TECAR"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center 20%",
                }}
                className="w-full h-full"
                priority
              />
            </div>
          </div>
          {/* Right (text) */}
          <div
            className="flex flex-col justify-start md:justify-center items-start w-full md:w-1/2 h-1/2 md:h-full px-4 md:px-20 py-4 md:py-0 z-20"
            style={{
              background: "#C4DAAF",
              textAlign: "left",
              paddingTop: "4rem",
            }}
          >
            <div
              className="w-full max-w-2xl mx-auto mt-8 md:mt-0"
              style={{
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
              }}
            >
              <h2
                className="section-header mb-6 md:mb-8"
                style={{
                  fontFamily: "NotulenSerifExtraBold, 'Merriweather', Georgia, serif",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 900,
                  color: "#2D3924",
                  letterSpacing: "-1px",
                  lineHeight: "1.2",
                }}
              >
                Terapia TECAR
              </h2>
              <div
                className="section-content"
                style={{
                  fontFamily: "'DM Sans', Arial, sans-serif",
                  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                  color: "#fff",
                  fontWeight: 400,
                  lineHeight: "1.6",
                  maxWidth: "90%",
                }}
              >
                <p style={{ marginBottom: "0.7rem" }}>
                  Nowoczesna regeneracja dla aktywnych. Terapia TECAR to nowoczesna metoda fizjoterapeutyczna, która wspomaga regenerację tkanek.
                </p>
                <p style={{ marginBottom: "0.7rem" }}>
                  Jak działa? Urządzenie przesyła fale radiowe do wnętrza ciała, które pobudzają naturalne procesy regeneracyjne. Organizm zaczyna sam lepiej się leczyć. Co ważne – zabieg jest bezbolesny, a często wręcz przyjemny!
                </p>
                <p style={{ marginBottom: "0.7rem" }}>
                  Dla kogo?
                </p>
                <ul style={{ marginLeft: "1.1rem", marginBottom: 0, color: "#fff", fontSize: "0.98rem", lineHeight: "1.4rem", listStyleType: "disc" }} className="md:text-[1.25rem] md:leading-[2rem]">
                  <li>Regeneracja po treningu,</li>
                  <li>kontuzje – skręcenia, stłuczenia, złamania,</li>
                  <li>przeciążenia – ból pleców, kolan, barku,</li>
                  <li>przyspieszenie gojenia po operacjach.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section
          id="kontakt-section"
          className="w-full min-h-screen h-screen flex flex-col justify-center items-center px-4 md:px-24 py-8 md:py-0"
          style={{ background: "#F8F4F1" }}
        >
          <div className="w-full max-w-6xl flex flex-col">
            <h2
              className="mb-12 md:mb-16"
              style={{
                fontFamily: "NotulenSerifExtraBold, 'Merriweather', Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 900,
                color: "#386641",
                letterSpacing: "-2px",
                lineHeight: "1",
              }}
            >
              KONTAKT
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Left column - Address and Booksy */}
              <div className="space-y-8">
                <div className="text-[#444]" style={{ fontFamily: "'DM Sans', Arial, sans-serif" }}>
                  <div className="text-xl md:text-2xl">Agata Kępa</div>
                  <div className="text-xl md:text-2xl">+48 695 296 763</div>
                  <div className="text-xl md:text-2xl mt-6">Gdynia</div>
                  <div className="text-xl md:text-2xl">ul. Kilińskiego 12/2</div>
                </div>
                
                <div className="w-full max-w-[300px]">
                  <BookingButton />
                </div>
              </div>

              {/* Right column - Email and Social */}
              <div className="space-y-8">
                <div className="text-[#444] text-xl md:text-2xl" style={{ fontFamily: "'DM Sans', Arial, sans-serif" }}>
                  <div>falafizjo@gmail.com</div>
                </div>

                <div className="flex flex-col space-y-4">
                  <a 
                    href="https://www.instagram.com/agata.falafizjo/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <Image src="/images/instagram.png" alt="Instagram" width={32} height={32} className="group-hover:opacity-80 transition-opacity" />
                    <span className="text-[#444] group-hover:text-[#386641] transition-colors font-semibold underline underline-offset-4 decoration-[#A984C4] hover:decoration-[#386641]">
                      Obserwuj na Instagramie
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61576770137381"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <Image src="/images/facebook.png" alt="Facebook" width={32} height={32} className="group-hover:opacity-80 transition-opacity" />
                    <span className="text-[#444] group-hover:text-[#386641] transition-colors font-semibold underline underline-offset-4 decoration-[#A984C4] hover:decoration-[#386641]">
                      Polub na Facebooku
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mini logo */}
          <div
            className="absolute right-4 md:right-8 bottom-4 md:bottom-8"
          >
            <Image src="/images/fala_mini_logo.png" alt="Fala Mini Logo" width={90} height={90} />
          </div>
        </section>
      </main>
      {/* Add global font imports and responsive style fix */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Merriweather:wght@700;900&display=swap');
        body {
          font-family: 'Inter', Arial, sans-serif;
        }
        @media (min-width: 768px) {
          .hero-content {
            margin-top: 0 !important;
          }
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 768px) {
          h1 {
            font-size: 4.5rem !important;
            line-height: 5rem !important;
            margin-bottom: 2.5rem !important;
          }
          .md\:text-[2.2rem] {
            font-size: 2.2rem !important;
          }
          .hero-lead {
            font-size: 2.2rem !important;
            margin-bottom: 2rem !important;
          }
          .md\:text-2xl {
            font-size: 1.5rem !important;
          }
          .md\:px-12 {
            padding-left: 3rem !important;
            padding-right: 3rem !important;
          }
          .md\:py-3 {
            padding-top: 0.75rem !important;
            padding-bottom: 0.75rem !important;
          }
          .phone-number {
            font-size: 2.16rem !important; // reduced from 2.4rem
          }
        }
        @media (max-width: 767px) {
          .section-header {
            margin-top: 2.2rem !important;
            margin-bottom: 1.2rem !important;
          }
          .cześć-bullets {
            font-size: 0.68rem !important;
            line-height: 1.1rem !important;
            padding-left: 1rem !important;
            margin-bottom: 0.5rem !important;
          }
          .uslugi-btn {
            font-size: 1.1rem !important;
            padding: 0.7rem 0 !important;
          }
          /* Hide image in fizjoterapia sportowa section on mobile */
          #fizjoterapia-sportowa-section > .md\\:flex {
            display: none !important;
          }
          #fizjoterapia-sportowa-section > div:first-child {
            padding-top: 4rem !important;
          }
        }
        @media (max-height: 700px) {
          .hero-content {
            margin-top: 60px !important;
          }
          .hero-lead {
            margin-bottom: 0.35rem !important;
            font-size: 0.9rem !important;
          }
          h1 {
            margin-bottom: 0.5rem !important;
            font-size: 2rem !important;
            line-height: 2.4rem !important;
          }
        }
        @media (max-height: 600px) {
          .hero-content {
            margin-top: 50px !important;
          }
          .hero-lead {
            margin-bottom: 0.25rem !important;
            font-size: 0.85rem !important;
          }
          h1 {
            margin-bottom: 0.35rem !important;
            fontSize: 1.8rem !important;
            line-height: 2.2rem !important;
          }
        }

        .section-content {
          padding: clamp(1rem, 3vw, 2rem) 0;
        }

        .section-content p {
          margin-bottom: 1.2em;
        }

        .section-content ul {
          margin-left: clamp(1rem, 2vw, 1.5rem);
          margin-bottom: 1em;
        }

        .section-content li {
          margin-bottom: 0.5em;
        }

        @media (max-width: 768px) {
          .section-header {
            padding-top: 2rem;
          }
          
          .section-content {
            padding: 1rem 0;
          }
        }

        @media (min-width: 1200px) {
          .section-content {
            max-width: 80%;
          }
        }
      `}</style>
    </>
  );
}
            padding: 1rem 0;
          }
        }

        @media (min-width: 1200px) {
          .section-content {
            max-width: 80%;
          }
        }
      `}</style>
    </>
  );
}
