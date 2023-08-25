import data from "./mockedData/data.json";
import { useMemo } from "react";

interface Data {
  random: number[];
  cards: number[][] | number[];
}
export default function Home() {
  // Your task is to write a function that determines whether this card will ever get Bingo.
  const winOrDie: boolean = useMemo((): boolean => {
    let win: boolean = false;
    if (data.cards.length === 0) {
      return win;
    }

    data.cards.forEach((card: number[]) => {
      for (let i: number = 0; i < card.length - 1; i + 5) {
        const cardRow = data.cards.slice(i, i + 5);
        console.log(cardRow);
      }
    });

    return win;
  }, [data]);
  // Can you write a program that tells you which board to pick to guarantee a win against the giant squid?

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">Welcome to Bingo Game</h1>
    </main>
  );
}
