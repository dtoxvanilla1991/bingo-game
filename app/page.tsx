import data from "./mockedData/data.json";
import { useMemo } from "react";

interface Data {
  random: number[];
  cards: number[][] | number[];
}
export default function Home() {
  // Your task is to write a function that determines whether this card will ever get Bingo.
  let win: boolean = false;

  const winOrDie: boolean = useMemo((): boolean => {
    if (data.cards.length === 0) {
      return win;
    }

    data.cards.forEach((card: number[], index: number) => {
      //rows
      for (let i: number = 0; i < card.length - 1; i += 5) {
        const cardRow: number[] = card.slice(i, i + 5);
        data.random.toString().includes(cardRow.toString())
          ? (win = true)
          : (win = false);
        // console.log(`card ${index}`, cardRow);
        //columns to do
      }
    });

    return win;
  }, [data]);
  // Can you write a program that tells you which board to pick to guarantee a win against the giant squid?

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h1 className="text-4xl font-bold text-center">
          Welcome to Bingo Game
        </h1>
        <p className="text-center text-xl mt-4">
          {win
            ? "We have survived"
            : "Squid got us killed and our mission failed. Try again!"}
        </p>
      </section>
    </main>
  );
}
