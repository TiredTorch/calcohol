import "@testing-library/jest-dom";
import { Slider } from "./Slider";
import { render } from "@testing-library/react";

afterEach(() => {
	jest.resetAllMocks();
});

it("should render slider", () => {
	const { baseElement } = render(
		<Slider />
	);

	expect(baseElement).toBeInTheDocument();
	expect(baseElement).toMatchSnapshot();
});
