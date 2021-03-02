import { getPage } from "next-page-tester";
import { screen, render as renderTL } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("test-with-hook-form", () => {
  it("render with NPT", async () => {
    const { render: renderNPT } = await getPage({
      route: "/testpage",
    });

    renderNPT();

    const toggleButton = screen.getByText("Toggle form");

    /** This gives act() warnings */
    userEvent.click(toggleButton);

    const input = screen.getByText("submit");
    expect(input).toBeInTheDocument();
  });

  it("render with testing-library", async () => {
    const { page } = await getPage({
      route: "/testpage",
    });

    renderTL(page);

    const toggleButton = screen.getByText("Toggle form");

    userEvent.click(toggleButton);

    const input = screen.getByText("submit");
    expect(input).toBeInTheDocument();
  });
});
