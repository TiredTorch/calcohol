import "@testing-library/jest-dom";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchDrinkCombinationForm } from "./SearchDrinkCombinationForm";

const formikFormMock = {
	resetForm: expect.any(Function),
	setErrors: expect.any(Function),
	setFieldError: expect.any(Function),
	setFieldTouched: expect.any(Function),
	setFieldValue: expect.any(Function),
	setFormikState: expect.any(Function),
	setStatus: expect.any(Function),
	setSubmitting: expect.any(Function),
	setTouched: expect.any(Function),
	setValues: expect.any(Function),
	submitForm: expect.any(Function),
	validateField: expect.any(Function),
	validateForm: expect.any(Function)
};

const mockCallBack = jest.fn();

beforeEach(async () => {
	await waitFor(() =>
		render(
			<SearchDrinkCombinationForm
				handleSubmitForm={mockCallBack}
			/>
		)
	);
});

it("should do not pass searchDrinkCombinationForm", async () => {

	const user = userEvent.setup();
	await user.click(screen.getByTestId("submit"));

	await waitFor(() => {
		expect(screen.getByText("weight is a required field")).toBeInTheDocument();
	}
	);
});

it("should pass searchDrinkCombinationForm successfully", async () => {

	const user = userEvent.setup();
	await user.type(screen.getByPlaceholderText("Weight"), "80");
	await user.click(screen.getByTestId("submit"));

	await waitFor(() => {
		expect(mockCallBack).toHaveBeenCalledWith({
			gender: false,
			proportion: 75,
			weight: "80"
		}, formikFormMock);
	}
	);
});
