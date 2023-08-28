import data from "./mockedData/data.json";
import { useMemo } from "react";

interface Data {
  random: number[];
  cards: number[][] | number[];
}

interface CardProps {
  rows: Map<number, number[]>;
  columns: Map<number, number[]>;
}
export default function Home() {
  // Your task is to write a function that determines whether this card will ever get Bingo.
  let win: boolean = false;

  const winOrDie: boolean = useMemo((): boolean => {
    if (data.cards.length === 0) {
      return win;
    }
    //create empty array of objects equal to the number of cards
    //each object will have 2 key for rows and columns
    //rows and columns will be Maps of numbers for easy retrieval and deletion
    const cardsOnBoard: CardProps[] = data.cards.map(() => ({
      rows: new Map(),
      columns: new Map(),
    }));
    //we will loop through each card and check if the number is in the row or column and if it is, we will delete it
    data.cards.forEach((card: number[], index: number) => {
      let rowNumber: number = 1;
      for (let i: number = 0; i < card.length; i += 5) {
        const cardRow: number[] = card.slice(i, i + 5);
        cardsOnBoard[index].rows.set(rowNumber, cardRow);
        rowNumber++;
      }
    });
    console.log(cardsOnBoard[1].rows);
    //if the row or column is empty, we will set the win to true and break the loop

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
