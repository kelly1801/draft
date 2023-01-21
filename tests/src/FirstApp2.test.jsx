//snapshot is like a picture of the component
import React from "react";
import {  render, screen } from "@testing-library/react";
import { FirstApp } from "../../src/FirstApp";

describe("Pruebas en <FistMap/>", () => {
    const name = "kelly"
    const subtitle = "soy un subtitulo"

    test('debe de hacer match con el snapshot', () => {
        
      const { container } = render( <FirstApp name={ name } /> );
      expect( container ).toMatchSnapshot();

  });
    test('debe de mostrar el mensaje "Hola, Soy kelly"', () => {
        
      render( <FirstApp name={ name } /> );
      expect( screen.getByText(name) ).toBeTruthy();
      
  });

  test('debe de mostrar el titulo en un h1', () => {
      render( <FirstApp name={ name } /> );
      expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( name );
  });

  test('debe de mostrar el subtitulo', () => {
    render( <FirstApp name={ name } subtitle={subtitle}/> );
    expect( screen.getAllByText(subtitle).length).toBeTruthy();
});

  
    


});
