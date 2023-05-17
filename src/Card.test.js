import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("renders without crashin", function(){
    render(<Card />)
});

it("mathes snapshot", function() {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});