import { render, screen } from "@testing-library/react";
import Outcome from "../components/Outcome";
import "@testing-library/jest-dom";

describe("testing Outcome component basics", () => {
  it("renders paragraph during loading phase of the game", () => {
    const win = false;
    render(<Outcome win={win} />);

    const paragraph: HTMLElement = screen.getByText("Game in Progress...");

    expect(paragraph).toBeInTheDocument();
  });
});
