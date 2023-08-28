import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import data from "../mockedData/dataForTests.json";
import Home from "@/app/page";

describe("home page", () => {
  it("renders homepage unchanged", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
  it("squid wins, squad loses Bingo and dies if there are no Cards", () => {
    // added dataForTests here to imitate empty cards array
    render(<Home />);
    setTimeout(() => {
      const squidWins = screen.getByText(
        "Squid got us killed and our mission failed. Try again!",
      );
      expect(squidWins).toBeInTheDocument();
    }, 2500);
  });
});
