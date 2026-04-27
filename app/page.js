import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  
  const isLoggedIn= true;
  const name= "Umer";
  return (
    <main>
      <h1>Kundenfeedback sammeln, bessere Produkte bauen</h1>
      <div>Feedback-Boards in Minuten erstellen, Features gezielt priorisieren und Produkte entwickeln, 
        die deine Kunden lieben.</div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name}/>
    </main>
  );
}
