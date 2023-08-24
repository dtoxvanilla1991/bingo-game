import data from './mockedData/data.json';
export default function Home() {

console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold text-center">Welcome to Bingo Game</h1>
    </main>
  )
}
