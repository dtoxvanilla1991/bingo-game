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
  // Can you write a program that tells you which board to pick to guarantee a win against the giant squid?
  let win: boolean = false;
  // destructuring the data
  const { random, cards }: Data = data;

  const winOrDie: boolean = useMemo((): boolean => {
    if (cards.length === 0) {
      return win;
    }
    // create empty array of objects equal to the number of cards
    // each object will have 2 key for rows and columns
    // rows and columns will be Maps of numbers for easy retrieval and deletion
    const cardsOnBoard: CardProps[] = cards.map(
      (): CardProps => ({
        rows: new Map(),
        columns: new Map(),
      }),
    );
    // we will loop through each card and check if the number is in the row or column
    // if it is, we will delete it
    cards.forEach((card: number[], index: number): void => {
      //rows
      let rowNumber: number = 1;
      for (let i: number = 0; i < card.length; i += 5) {
        const cardRow: number[] = card.slice(i, i + 5);
        cardsOnBoard[index].rows.set(rowNumber, cardRow);
        rowNumber++;
      }
      //columns
      let columnNumber: number = 1;
      //getting starting position of each card column
      for (let j: number = 0; j < 5; j++) {
        let cardColumn: number[] = [];
        //getting the numbers for each card column
        for (let k: number = 0; k < card.length; k += 5) {
          cardColumn.push(card[j + k]);
          cardsOnBoard[index].columns.set(columnNumber, cardColumn);
        }
        columnNumber++;
      }
    });
    // if the row or column is empty, we will set the win to true and break the loop
    if (random.length === 0) {
      //to do
      //generate random numbers until someone wins
    }
    random.forEach((n: number): void => {
      cardsOnBoard.forEach((card: CardProps): void => {
        //we check rows
        card.rows.forEach((row: number[], key: number): void => {
          if (win) return;
          //    console.log("row", row);
          if (row.includes(n)) {
            row.splice(row.indexOf(n), 1);
            if (row.length === 0) {
              win = true;
              return;
            }
          }
        });
        //we check columns
        card.columns.forEach((column: number[], key: number): void => {
          if (win) return;
          // console.log("column", column);
          if (column.indexOf(n) !== -1) {
            column.splice(column.indexOf(n), 1);
            if (column.length === 0) {
              win = true;
              return;
            }
          }
        });
      });
    });
    console.log("WE HAVE A WINNER");
    return win;
  }, [data]);
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
