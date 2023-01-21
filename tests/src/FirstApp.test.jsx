//snapshot is like a picture of the component
import React from "react";
import { render } from "@testing-library/react";
import { FirstApp } from "../../src/FirstApp";

describe("Pruebas en <FistMap/>", () => {
    // test("have to match snapshot ", () => {
    //     const { container } = render(<FirstApp name="Kelly" />);

    //     expect(container).toMatchSnapshot();
    // });

  test("have to show title in h1", () => {
    const title = "Hello Kelly baby"
    const { container, getByText, getByTestId } = render(<FirstApp name="Kelly" />);
    // const h1 = container.querySelector('h1')
    // expect( h1.innerHTML ).toContain( title )
  
    expect(getByTestId('test-title').innerHTML ).toContain(title)

})


});
