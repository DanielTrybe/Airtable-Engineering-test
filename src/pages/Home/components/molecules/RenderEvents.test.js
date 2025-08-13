import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import RenderEvents from "./RenderEvents";

describe("RenderEvents", () => {
  const minDay = new Date("2021-01-01");
  const totalDays = 10;

  const laneMock = [
    {
      start: new Date("2021-01-02"),
      end: new Date("2021-01-03"),
      name: "Event 1",
    },
    {
      start: new Date("2021-01-05"),
      end: new Date("2021-01-06"),
      name: "Event 2",
    },
  ];

  test("shows tooltip on hover", async () => {
    render(
      <RenderEvents
        eventLine={laneMock}
        minDay={minDay}
        totalDays={totalDays}
      />
    );

    const block = screen.getByTestId("1 - Event 1");
    await userEvent.hover(block);
    const tooltip = await screen.findByRole("tooltip");
    expect(within(tooltip).getByText("Event 1")).toBeInTheDocument();

    await userEvent.unhover(block);
  });
});
