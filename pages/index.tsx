import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Logo in top left corner */}
      <div className="fixed top-4 left-4 z-50">
        <Image src="/fala_logo.png" alt="Fala Logo" width={64} height={64} />
      </div>
      {/* Main content */}
      <main className="flex flex-col items-center justify-start w-full overflow-y-auto">
        {/* Hero Section */}
        <section className="bg-[#FFF7F1] w-full grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 md:p-12">
            <h1 className="text-3xl font-bold text-[#386641] mb-4">Fizjoterapia w Gdyni</h1>
            <p className="mb-2 text-lg">Boli Cię? Chcesz bezpiecznie wrócić do sportu?</p>
            <p className="mb-4 font-semibold">Wiem jak Ci pomóc!</p>
            <button className="border border-[#A984C4] px-4 py-2 rounded hover:bg-[#A984C4] hover:text-white transition">kontakt</button>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image src="/hero1.jpg" alt="Hero" layout="fill" objectFit="cover" />
          </div>
        </section>

        {/* Cześć Section */}
        <section className="w-full bg-[#F8F8F8] py-12 px-6 md:px-12">
          <h2 className="text-2xl text-[#386641] font-bold mb-4">Cześć!</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image src="/images/profile.jpeg" width={400} height={400} alt="Profile" className="rounded-xl" />
            <p>
              Nazywam się Agata Kępa i jestem fizjoterapeutką. <br />
              Działam aktywnie w środowisku sportowym współpracując z:<br /><br />
              • Polskim Związkiem Lekkoatletyki<br />
              • Kliniką Rehasport w Gdańsku<br /><br />
              Fala Fizjo to miejsce stworzone z pasji i potrzeby niesienia profesjonalnej pomocy
              fizjoterapeutycznej – w oparciu o aktualne światowe standardy.
            </p>
          </div>
        </section>

        {/* Usługi Section */}
        <section className="w-full bg-[#EAF2E0] py-12 px-6 md:px-12">
          <h2 className="text-xl font-bold text-[#6A994E] mb-6">usługi</h2>
          <div className="grid gap-4">
            <button className="border border-[#A984C4] px-4 py-2 rounded">Fizjoterapia sportowa</button>
            <button className="border border-[#A984C4] px-4 py-2 rounded">Fizjoterapia ortopedyczna</button>
            <button className="border border-[#A984C4] px-4 py-2 rounded">Masaż sportowy</button>
          </div>
        </section>

        {/* Service Details */}
        <section className="w-full py-12 px-6 md:px-12 bg-[#F8F8F8] space-y-12">
          <div>
            <h3 className="text-xl font-bold text-[#386641] mb-2">Fizjoterapia sportowa</h3>
            <p>
              Dla zawodowców, amatorów i wszystkich, którzy kochają ruch. Pomogę wrócić do treningów po kontuzji,
              planuję skuteczną i bezpieczną ścieżkę rehabilitacji.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#386641] mb-2">Fizjoterapia ortopedyczna</h3>
            <p>
              Dla osób po urazach operacjach, z bólem lub ograniczeniami ruchomości. Rozumiem źródło problemu i
              pomogę Ci odzyskać sprawność.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#386641] mb-2">Masaż sportowy</h3>
            <p>
              Pomoc w regeneracji, zmniejszeniu ryzyka kontuzji, poprawie zakresu ruchu i samopoczucia.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#386641] mb-2">Terapia TECAR</h3>
            <p>
              Nowoczesna metoda fizjoterapeutyczna wspomagająca regenerację tkanek. Szczególnie polecana po urazach,
              operacjach, dla osób aktywnych.
            </p>
          </div>
        </section>

        {/* Kontakt */}
        <section className="w-full bg-[#F8F8F8] py-12 px-6 md:px-12 text-[#386641]">
          <h2 className="text-xl font-bold mb-4">KONTAKT</h2>
          <p>Agata Kopa</p>
          <p>+48 695 296 763</p>
          <p>fala.fizjo@gmail.com</p>
          <p>ul. Kilińskiego 12/2</p>
          <div className="mt-4">
            <button className="border border-[#A984C4] px-4 py-2 rounded">REZERWUJ</button>
          </div>
        </section>
      </main>
    </>
  );
}
