import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {

  const isLoggedIn= true;
  const name= "Umer";
  return (
    <main>
      <section className="bg-base-200">
      <div className="flex justify-between items-center px-8 py-2 max-w-3xl mx-auto">
        <div className="font-bold">FeedbackFast</div>
        <div className="space-x-4 max-md:hidden">
          <a className="link link-hover">Preis</a>
          <a className="link link-hover">FAQ</a>
        </div>
        <div>
          <ButtonLogin isLoggedIn={isLoggedIn} name={name}/>
        </div>
      </div>
      </section>
      <section className= "px-8 text-center py-32 max-w-3xl mx-auto">
        <h1 className= "text-4xl font-extrabold mb-6 lg:text-5xl">Kundenfeedback sammeln, 
        bessere Produkte bauen</h1>
        <div className="opacity-90 mb-10">Feedback-Boards in Minuten erstellen, 
        Features gezielt priorisieren und Produkte entwickeln, 
        die deine Kunden lieben.</div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name}/>
      </section>
    </main>
  );
}
