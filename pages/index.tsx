import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Main content */}
      <main className="flex flex-col items-center justify-start w-full overflow-y-auto font-sans" style={{ fontFamily: "'Inter', Arial, sans-serif" }}>
        {/* Hero Section */}
        <section className="w-full min-h-screen h-screen flex flex-col md:flex-row relative p-0">
          {/* Logo in top left corner, 4x larger, absolute */}
          <div
            className="z-30"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              padding: "2vw",
              width: "256px",
              height: "256px",
              maxWidth: "30vw",
              minWidth: "96px",
              pointerEvents: "none", // so it doesn't block interactions
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
            className="flex flex-col justify-center items-center w-full md:w-1/2 h-1/2 md:h-full px-6 md:px-12 py-12 md:py-0 z-20"
            style={{
              background: "#FFF7F1",
              textAlign: "center",
            }}
          >
            <div className="w-full max-w-md mx-auto md:max-w-2xl">
              <h1
                className="mb-8 md:mb-8"
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
                className="md:text-[2.2rem] md:leading-tight md:mb-16"
              >
                <p
                  className="mb-6 hero-lead"
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
                  className="mb-6 hero-lead"
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
                  className="mb-6 font-semibold italic hero-lead"
                  style={{
                    fontSize: "0.95rem",
                    color: "#386641",
                    textAlign: "left",
                  }}
                >
                  Wiem jak Ci pomóc!
                </p>
                <button
                  className="border-2 border-[#A984C4] px-8 py-2 rounded-lg transition text-[#A984C4] font-bold text-lg bg-transparent hover:bg-[#A984C4] hover:text-white md:text-2xl md:px-12 md:py-3"
                  style={{
                    background: "transparent",
                    boxShadow: "none",
                  }}
                  onClick={() => {
                    const el = document.getElementById("kontakt-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
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
            {/* Phone number in top right, always visible */}
            <div
              className="absolute z-20 font-normal"
              style={{
                top: "2vw",
                right: "2vw",
                color: "#222",
                letterSpacing: "1px",
                fontSize: "1.2rem",
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
        <section className="w-full bg-[#F8F8F8] min-h-screen h-screen flex flex-col justify-center items-center px-6 md:px-24">
          <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center md:items-start">
              <div className="rounded-full overflow-hidden w-60 h-60 mb-6 border-8 border-[#F8E1B4]">
                <Image src="/images/profile.jpeg" width={400} height={400} alt="Profile" className="object-cover w-full h-full" />
              </div>
              <span className="text-[#386641] font-bold text-3xl" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>Cześć!</span>
            </div>
            <div>
              <p className="mb-4" style={{ fontSize: "1.1rem", fontWeight: 500 }}>
                Nazywam się <span className="font-bold">Agata Kępa</span>, jestem fizjoterapeutką.<br />
                Doświadczenie w zawodzie zdobywałam współpracując z:
              </p>
              <ul className="mb-4 list-disc pl-6" style={{ fontSize: "1.1rem" }}>
                <li>Polskim Związkiem Lekkoatletyki</li>
                <li>Kliniką Rehasport w Gdańsku</li>
              </ul>
              <p className="mb-2" style={{ fontSize: "1.1rem" }}>
                Fala Fizjo to miejsce stworzone z pasji i potrzeby niesienia profesjonalnej pomocy fizjoterapeutycznej – w oparciu o aktualne światowe standardy, w atmosferze zrozumienia, motywacji i wsparcia.
              </p>
            </div>
          </div>
        </section>

        {/* Usługi Section */}
        <section className="w-full bg-[#EAF2E0] min-h-screen h-screen flex flex-col justify-center items-center px-6 md:px-24">
          <span className="text-[#6A994E] font-bold text-2xl mb-8 uppercase tracking-widest" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>usługi</span>
          <div className="grid gap-4 w-full max-w-md">
            <button className="border border-[#A984C4] px-6 py-2 rounded text-[#6A994E] font-semibold text-lg bg-white hover:bg-[#A984C4] hover:text-white transition">FIZJOTERAPIA SPORTOWA</button>
            <button className="border border-[#A984C4] px-6 py-2 rounded text-[#6A994E] font-semibold text-lg bg-white hover:bg-[#A984C4] hover:text-white transition">FIZJOTERAPIA ORTOPEDYCZNA</button>
            <button className="border border-[#A984C4] px-6 py-2 rounded text-[#6A994E] font-semibold text-lg bg-white hover:bg-[#A984C4] hover:text-white transition">MASAŻ SPORTOWY</button>
          </div>
        </section>
        
        {/* Fizjoterapia sportowa */}
        <section className="w-full bg-[#F8F8F8] min-h-screen h-screen flex flex-col justify-center items-center px-6 md:px-24">
          <div className="w-full max-w-3xl flex flex-col items-center">
            <h3 className="text-3xl font-bold text-[#386641] mb-6 text-center" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
              Fizjoterapia sportowa
            </h3>
            <p className="mb-4 text-center" style={{ fontSize: "1.1rem" }}>
              Dla zawodowców, amatorów i wszystkich, którzy kochają ruch. Pomagam wrócić do treningów po kontuzji, planuję skuteczną i bezpieczną ścieżkę rehabilitacji.<br />
              Pokazuję, jak ćwiczyć mądrze, by unikać kolejnych kontuzji. Każdy program jest indywidualnie oceniany – bo każdy organizm i cel sportowy są inne. Metody, które wykorzystuję to m.in.:
            </p>
            <ul className="list-disc pl-6 mb-2 mx-auto" style={{ fontSize: "1.1rem", maxWidth: "500px" }}>
              <li>trening medyczny</li>
              <li>suche igłowanie</li>
              <li>masaż</li>
              <li>kinesio taping</li>
            </ul>
          </div>
        </section>

        {/* Fizjoterapia ortopedyczna */}
        <section className="w-full bg-[#EAF2E0] min-h-screen h-screen flex flex-col justify-center items-center px-6 md:px-24">
          <div className="w-full max-w-3xl flex flex-col items-center">
            <h3 className="text-3xl font-bold text-[#386641] mb-6 text-center" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
              Fizjoterapia ortopedyczna
            </h3>
            <p className="mb-4 text-center" style={{ fontSize: "1.1rem" }}>
              Dla osób po urazach, operacjach, a także tych, którzy zmagają się z bólem lub ograniczeniem ruchomości. Pomagam zrozumieć źródło problemu i pokazuję, co robić, by wrócić na zaplanowaną drogę, która kończy się odzyskaniem sprawności.
            </p>
            <ul className="list-disc pl-6 mb-2 mx-auto" style={{ fontSize: "1.1rem", maxWidth: "500px" }}>
              <li>terapia manualna</li>
              <li>ćwiczenia funkcjonalno-powięziowe</li>
              <li>suche igłowanie</li>
              <li>kinesio taping</li>
            </ul>
          </div>
        </section>

        {/* Masaż sportowy */}
        <section className="w-full bg-[#F8F8F8] min-h-screen h-screen flex flex-col justify-center items-center px-6 md:px-24">
          <div className="w-full max-w-3xl flex flex-col items-center">
            <h3 className="text-3xl font-bold text-[#386641] mb-6 text-center" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
              Masaż sportowy
            </h3>
            <p className="mb-4 text-center" style={{ fontSize: "1.1rem" }}>
              Masaż sportowy to coś więcej niż tylko relaks – to element regeneracji niezbędny po intensywnym wysiłku fizycznym. Pomaga pobudzić krążenie, wspiera regenerację, zmniejsza ryzyko kontuzji, zwiększa zakres ruchu i poprawia samopoczucie.
            </p>
          </div>
        </section>

        {/* Terapia TECAR */}
        <section className="w-full bg-[#EAF2E0] min-h-screen h-screen flex flex-col justify-center items-center px-6 md:px-24">
          <div className="w-full max-w-3xl flex flex-col items-center">
            <h3 className="text-3xl font-bold text-[#386641] mb-6 text-center" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
              Terapia TECAR
            </h3>
            <p className="mb-4 text-center" style={{ fontSize: "1.1rem" }}>
              Nowoczesna regeneracja dla aktywnych. Terapia TECAR to nowoczesna metoda fizjoterapeutyczna, która wspomaga regenerację tkanek. Jak działa? Urządzenie przekazuje prąd radiowy do wnętrza ciała, które pobudzają naturalne procesy regeneracyjne. Organizm zaczyna sam lepiej się leczyć. <b>TECAR</b> – zabieg jest bezbolesny, a często wręcz przyjemny!
            </p>
            <ul className="list-disc pl-6 mb-2 mx-auto" style={{ fontSize: "1.1rem", maxWidth: "500px" }}>
              <li>Regeneracja po treningu</li>
              <li>Kontuzje – skręcenia, stłuczenia, złamania</li>
              <li>Przeciążenia – ból pleców, barku, kolan</li>
              <li>Przyspieszenie gojenia po operacjach</li>
            </ul>
          </div>
        </section>

        {/* Kontakt */}
        <section
          id="kontakt-section"
          className="w-full min-h-screen h-screen flex flex-col justify-center items-center px-4 md:px-24"
          style={{ background: "#F8F4F1", position: "relative" }}
        >
          <div className="relative w-full max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
            {/* Left column */}
            <div className="flex-1 flex flex-col items-start" style={{ fontFamily: "'DM Sans', Arial, sans-serif" }}>
              <span
                className="mb-8"
                style={{
                  fontFamily: "NotulenSerifExtraBold, 'Merriweather', Georgia, serif",
                  fontWeight: 900,
                  fontSize: "3rem",
                  color: "#386641",
                  letterSpacing: "-2px",
                  lineHeight: "1",
                  display: "block",
                }}
              >
                KONTAKT
              </span>
              <div className="mb-8 text-[#444] text-xl" style={{ fontFamily: "'DM Sans', Arial, sans-serif" }}>
                <div>Agata Kępa</div>
                <div>+48 695 296 763</div>
                <div className="mt-6">Gdynia</div>
                <div>ul. Kilińskiego 12/2</div>
              </div>
              <button
                className="mt-4 border-2 border-[#A984C4] px-10 py-3 rounded-md font-bold text-lg md:text-xl transition text-[#A984C4] bg-transparent hover:bg-[#A984C4] hover:text-white"
                style={{
                  fontFamily: "'DM Sans', Arial, sans-serif",
                  background: "transparent",
                  boxShadow: "none",
                  color: "#A984C4",
                  letterSpacing: "1px",
                  width: "min-content",
                  minWidth: 180,
                }}
              >
                REZERWUJ
              </button>
            </div>
            {/* Middle column */}
            <div className="flex-1 flex flex-col items-start md:items-center md:justify-center mt-8 md:mt-0" style={{ fontFamily: "'DM Sans', Arial, sans-serif" }}>
              <div className="mb-8 text-[#444] text-xl">
                <div>
                  <span className="block">falafizjo@gmail.com</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-[#444] text-xl">
                <div className="flex items-center gap-3">
                  <Image src="/images/instagram.png" alt="Instagram" width={32} height={32} />
                  <span>agatakepa.falafizjo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Image src="/images/facebook.png" alt="Facebook" width={32} height={32} />
                  <span>Fala Fizjo</span>
                </div>
              </div>
            </div>
          </div>
          {/* Mini logo in bottom right of Kontakt section only */}
          <div
            style={{
              position: "absolute",
              right: "min(2vw, 24px)",
              bottom: "min(2vw, 24px)",
              zIndex: 40,
            }}
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
            font-size: 2.4rem !important;
          }
        }
      `}</style>
    </>
  );
}
