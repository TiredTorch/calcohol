import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { faker } from "@faker-js/faker";
import { Button } from "./Button";

afterEach(() => {
	jest.resetAllMocks();
});

const mockedTitle = faker.datatype.string(10);

it("should render button with text", () => {
	const { baseElement } = render(
		<Button>{mockedTitle}</Button>
	);

	expect(baseElement).toBeInTheDocument();
	expect(baseElement).toMatchSnapshot();
	expect(baseElement).toHaveTextContent(mockedTitle);
});
