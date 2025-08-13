import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RenderLanes from "./RenderLanes";

test("renders all lanes with events", () => {
  const lanesMock = [
    [
      { start: "2021-01-01", end: "2021-01-03", name: "Event 1" },
      { start: "2021-01-04", end: "2021-01-05", name: "Event 2" },
    ],
    [{ start: "2021-01-02", end: "2021-01-03", name: "Event 3" }],
  ];

  render(<RenderLanes lanes={lanesMock} />);

  lanesMock.flat().forEach((event) => {
    const block = screen.getByText(event.name);
    expect(block).toBeInTheDocument();
  });
});
