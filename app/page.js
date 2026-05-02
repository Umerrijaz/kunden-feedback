import ButtonLogin from "@/components/ButtonLogin";
import Image from "next/image";
import { supabase } from "@/libs/supabase";

export default function Home() {
  const isLoggedIn = true;
  const name = "Umer";
  return (
    <main>
      {/*HEADER*/}
      <section className="bg-base-200">
        <div className="flex justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold">FeedbackFast</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Preis</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      {/*HERO*/}
      <section className="px-8 text-center py-32 max-w-3xl mx-auto flex-col lg:flex-row gap-14">
        <Image src="/Bild.jpg" alt="Bild" width={500} height={300} />
        <h1 className="text-4xl font-extrabold mb-6 lg:text-5xl">
          Kundenfeedback sammeln, bessere Produkte bauen
        </h1>
        <div className="opacity-90 mb-10">
          Feedback-Boards in Minuten erstellen, Features gezielt priorisieren
          und Produkte entwickeln, die deine Kunden lieben.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
      {/* PRICING */}
      <section className="bg-base-200">
        <div className="px-8 py-32 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-primary text-center">
            Preise
          </p>
          <h2 className="text-3xl font-extrabold mb-12 lg:text-4xl text-center">
            Preise, die sich deinen Bedürfnissen anpassen
          </h2>
          <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto mb-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">19€</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /monat
              </div>
            </div>
            <ul className="py-8">
              <li>Kundenfeedback sammeln</li>
              <li>Unbegrenzte Boards</li>
              <li>Admin-Dashboard</li>
              <li>24/7 Support</li>
            </ul>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
    </main>
  );
}
