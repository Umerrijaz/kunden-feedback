import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {

  const isLoggedIn= true;
  const name= "Umer";
  return (
    <main>
      <section className= "px-8 text-center py-32 max-w-3xl mx-auto">
        <h1 className= "text-4xl font-extrabold mb-6">Kundenfeedback sammeln, 
        bessere Produkte bauen</h1>
        <div className="opacity-90 mb-10">Feedback-Boards in Minuten erstellen, 
        Features gezielt priorisieren und Produkte entwickeln, 
        die deine Kunden lieben.</div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name}/>
      </section>
    </main>
  );
}
