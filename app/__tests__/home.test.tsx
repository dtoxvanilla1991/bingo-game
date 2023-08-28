import { render } from "@testing-library/react";
import { describe } from "node:test";
import Home from "@/app/page";

describe("home page", () => {
  it("renders homepage unchanged", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
