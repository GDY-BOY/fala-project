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
            className="absolute z-10"
            style={{
              top: "2vw",
              left: "2vw",
              width: "32vw",
              maxWidth: 256,
              minWidth: 96,
              height: "auto",
            }}
          >
            <Image
              src="/images/fala_logo.png"
              alt="Fala Logo"
              width={256}
              height={256}
              style={{ width: "100%", height: "auto" }}
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
                className="mb-6"
                style={{
                  fontFamily: "NotulenSerifExtraBold, 'Merriweather', Georgia, serif",
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color: "#386641",
                  lineHeight: "3rem",
                  letterSpacing: "-1px",
                }}
              >
                Fizjoterapia<br />w Gdyni
              </h1>
              <div
                style={{ fontFamily: "'DM Sans', Arial, sans-serif" }}
                className="md:text-[3.45rem] md:leading-tight md:mb-16"
              >
                <p
                  className="mb-2"
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 500,
                    color: "#222",
                  }}
                >
                  Boli Cię?
                </p>
                <p
                  className="mb-4"
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 500,
                    color: "#222",
                  }}
                >
                  Chcesz bezpiecznie wrócić do sportu?
                </p>
                <p
                  className="mb-8 font-semibold italic"
                  style={{
                    fontSize: "1.1rem",
                    color: "#386641",
                  }}
                >
                  Wiem jak Ci pomóc!
                </p>
                <button
                  className="border-2 border-[#A984C4] px-8 py-2 rounded-lg transition text-[#A984C4] font-bold text-lg bg-transparent hover:bg-[#A984C4] hover:text-white md:text-3xl md:px-16 md:py-4"
                  style={{
                    background: "transparent",
                    boxShadow: "none",
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
            {/* Phone number in top right */}
            <div className="absolute top-8 right-8 z-20 text-[#222] text-lg font-normal hidden md:block" style={{ letterSpacing: "1px" }}>
              +48 695 296 763
            </div>
            <div className="absolute top-4 right-4 z-20 text-[#222] text-base font-normal md:hidden" style={{ letterSpacing: "1px" }}>
              +48 695 296 763
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
        <section className="w-full bg-[#F8F8F8] min-h-screen h-screen flex flex-col justify-center items-center px-6 md:px-24 text-[#386641]">
          <div className="w-full max-w-3xl flex flex-col items-start">
            <span className="font-bold text-2xl mb-4" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>KONTAKT</span>
            <p className="mb-1" style={{ fontSize: "1.1rem", fontWeight: 500 }}>Agata Kępa</p>
            <p className="mb-1" style={{ fontSize: "1.1rem" }}>+48 695 296 763</p>
            <p className="mb-1" style={{ fontSize: "1.1rem" }}>fala.fizjo@gmail.com</p>
            <p className="mb-4" style={{ fontSize: "1.1rem" }}>ul. Kilińskiego 12/2</p>
            <button className="border border-[#A984C4] px-6 py-2 rounded text-[#386641] font-medium hover:bg-[#A984C4] hover:text-white transition w-40" style={{ fontSize: "1rem" }}>REZERWUJ</button>
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
            font-size: 7.5rem !important;
            line-height: 8rem !important;
          }
          .md\\:text-[3.45rem] {
            font-size: 3.45rem !important;
          }
          .md\\:leading-tight {
            line-height: 1.1 !important;
          }
          .md\\:mb-16 {
            margin-bottom: 4rem !important;
          }
          .md\\:text-3xl {
            font-size: 2rem !important;
          }
          .md\\:px-16 {
            padding-left: 4rem !important;
            padding-right: 4rem !important;
          }
          .md\\:py-4 {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
        }
      `}</style>
    </>
  );
}
