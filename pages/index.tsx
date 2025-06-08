import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Logo in top left corner */}
      <div className="fixed top-4 left-4 z-50">
        <Image src="/images/fala_logo.png" alt="Fala Logo" width={64} height={64} />
      </div>
      {/* Main content */}
      <main className="flex flex-col items-center justify-start w-full overflow-y-auto font-sans" style={{ fontFamily: "'Inter', Arial, sans-serif" }}>
        {/* Hero Section */}
        <section className="bg-[#FFF7F1] w-full grid grid-cols-1 md:grid-cols-2 min-h-[420px] items-center">
          <div className="p-6 md:p-12 flex flex-col justify-center h-full">
            <h1
              className="mb-2"
              style={{
                fontFamily: "'Merriweather', Georgia, serif",
                fontSize: "2rem",
                fontWeight: 900,
                color: "#386641",
                lineHeight: "2.5rem",
                letterSpacing: "-1px",
              }}
            >
              Fizjoterapia<br />w Gdyni
            </h1>
            <p className="mb-1" style={{ fontSize: "1.1rem", fontWeight: 500 }}>Boli Cię?</p>
            <p className="mb-2" style={{ fontSize: "1.1rem", fontWeight: 500 }}>Chcesz bezpiecznie wrócić do sportu?</p>
            <p className="mb-4 font-semibold italic" style={{ fontSize: "1rem", color: "#386641" }}>Wiem jak Ci pomóc!</p>
            <button className="border border-[#A984C4] px-6 py-2 rounded hover:bg-[#A984C4] hover:text-white transition w-32 text-[#386641] font-medium" style={{ fontSize: "1rem" }}>kontakt</button>
          </div>
          <div className="relative h-64 md:h-[340px] flex items-center justify-center">
            <Image src="/hero1.jpg" alt="Hero" layout="fill" objectFit="cover" className="rounded-b-[60px] md:rounded-bl-[180px]" />
          </div>
        </section>

        {/* Cześć Section */}
        <section className="w-full bg-[#F8F8F8] py-16 px-6 md:px-24 flex flex-col items-center">
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
        <section className="w-full bg-[#EAF2E0] py-16 px-6 md:px-24 flex flex-col items-center">
          <span className="text-[#6A994E] font-bold text-2xl mb-8 uppercase tracking-widest" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>usługi</span>
          <div className="grid gap-4 w-full max-w-md">
            <button className="border border-[#A984C4] px-6 py-2 rounded text-[#6A994E] font-semibold text-lg bg-white hover:bg-[#A984C4] hover:text-white transition">FIZJOTERAPIA SPORTOWA</button>
            <button className="border border-[#A984C4] px-6 py-2 rounded text-[#6A994E] font-semibold text-lg bg-white hover:bg-[#A984C4] hover:text-white transition">FIZJOTERAPIA ORTOPEDYCZNA</button>
            <button className="border border-[#A984C4] px-6 py-2 rounded text-[#6A994E] font-semibold text-lg bg-white hover:bg-[#A984C4] hover:text-white transition">MASAŻ SPORTOWY</button>
          </div>
        </section>

        {/* Service Details */}
        <section className="w-full py-16 px-6 md:px-24 bg-[#F8F8F8] flex flex-col items-center">
          <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#386641] mb-2" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>Fizjoterapia sportowa</h3>
              <p className="mb-4" style={{ fontSize: "1.1rem" }}>
                Dla zawodowców, amatorów i wszystkich, którzy kochają ruch. Pomagam wrócić do treningów po kontuzji, planuję skuteczną i bezpieczną ścieżkę rehabilitacji.<br />
                Pokazuję, jak ćwiczyć mądrze, by unikać kolejnych kontuzji. Każdy program jest indywidualnie oceniany – bo każdy organizm i cel sportowy są inne. Metody, które wykorzystuję to m.in.:
              </p>
              <ul className="list-disc pl-6 mb-2" style={{ fontSize: "1.1rem" }}>
                <li>trening medyczny</li>
                <li>suche igłowanie</li>
                <li>masaż</li>
                <li>kinesio taping</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#386641] mb-2" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>Fizjoterapia ortopedyczna</h3>
              <p className="mb-4" style={{ fontSize: "1.1rem" }}>
                Dla osób po urazach, operacjach, a także tych, którzy zmagają się z bólem lub ograniczeniem ruchomości. Pomagam zrozumieć źródło problemu i pokazuję, co robić, by wrócić na zaplanowaną drogę, która kończy się odzyskaniem sprawności.
              </p>
              <ul className="list-disc pl-6 mb-2" style={{ fontSize: "1.1rem" }}>
                <li>terapia manualna</li>
                <li>ćwiczenia funkcjonalno-powięziowe</li>
                <li>suche igłowanie</li>
                <li>kinesio taping</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#386641] mb-2" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>Masaż sportowy</h3>
              <p className="mb-4" style={{ fontSize: "1.1rem" }}>
                Masaż sportowy to coś więcej niż tylko relaks – to element regeneracji niezbędny po intensywnym wysiłku fizycznym. Pomaga pobudzić krążenie, wspiera regenerację, zmniejsza ryzyko kontuzji, zwiększa zakres ruchu i poprawia samopoczucie.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#386641] mb-2" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>Terapia TECAR</h3>
              <p className="mb-4" style={{ fontSize: "1.1rem" }}>
                Nowoczesna regeneracja dla aktywnych. Terapia TECAR to nowoczesna metoda fizjoterapeutyczna, która wspomaga regenerację tkanek. Jak działa? Urządzenie przekazuje prąd radiowy do wnętrza ciała, które pobudzają naturalne procesy regeneracyjne. Organizm zaczyna sam lepiej się leczyć. <b>TECAR</b> – zabieg jest bezbolesny, a często wręcz przyjemny!
              </p>
              <ul className="list-disc pl-6 mb-2" style={{ fontSize: "1.1rem" }}>
                <li>Regeneracja po treningu</li>
                <li>Kontuzje – skręcenia, stłuczenia, złamania</li>
                <li>Przeciążenia – ból pleców, barku, kolan</li>
                <li>Przyspieszenie gojenia po operacjach</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section className="w-full bg-[#F8F8F8] py-16 px-6 md:px-24 text-[#386641] flex flex-col items-center">
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
      {/* Add global font imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Merriweather:wght@700;900&display=swap');
        body {
          font-family: 'Inter', Arial, sans-serif;
        }
      `}</style>
    </>
  );
}
