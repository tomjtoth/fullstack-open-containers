import React from "react";
import { render, screen } from "@testing-library/react";
import Todo from "../Todos/Todo";

describe("todo", () => {
  it("renders its contents", () => {
    const pack = {
      todo: { text: "asdf", done: false },
      deleteTodo: vi.fn(),
      completeTodo: vi.fn(),
    };

    render(<Todo {...pack} />);

    expect(screen.getByText("asdf")).toBeDefined();
  });
});
