import React from "react";
import { CounterApp } from "../../src/CounterApp";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Counter app tests", () => {
  const value = 100;
  test("has to match snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial en un h2", () => {
    render(<CounterApp value={value} />);
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      "100"
    );
  });

  test("debe de incrementar con el boton +1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("101")).toBeTruthy();
  });

  test("debe de decrementar con el boton -1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("99")).toBeTruthy();
  });

  test("debe de volver al valor inicial con el boton reset", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
  
  fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
    
    expect(screen.getByText("100")).toBeTruthy();
  
  });
});
