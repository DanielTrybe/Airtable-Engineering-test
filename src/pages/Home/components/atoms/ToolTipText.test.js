import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import RenderEvents from "../molecules/RenderEvents";

test("shows tooltip on hover", async () => {
  // Mock de lanes: array de arrays
  const laneMock = [
    {
      start: new Date("2021-01-14"),
      end: new Date("2021-01-22"),
      name: "Recruit translators",
    },
  ];
  render(
    <RenderEvents
      eventLine={laneMock}
      minDay={new Date("2021-01-01")}
      totalDays={30}
    />
  );

  const block = screen.getByTestId("1 - Recruit translators");
  await userEvent.hover(block);
  const tooltip = await screen.findByText("Recruit translators");
  expect(tooltip).toBeInTheDocument();

  await userEvent.unhover(block);
});
