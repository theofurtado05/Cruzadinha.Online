import { GameContainer } from "./_components/game-container";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary">
      <h1 className="text-white font-bold text-[36px]">Cruzadinha.online</h1>
      <GameContainer/>
    </main>
  );
}
