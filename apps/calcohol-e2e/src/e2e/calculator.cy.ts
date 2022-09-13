import { getPageTitle } from "../support/app.po";

describe(
	"Calcohol Calculator",
	() => {
		beforeEach(() => {
			cy.viewport(
				320,
				568
			);
			cy.visit("/calculator");
		});

		it(
			"should visit calculator page",
			() => {
				getPageTitle().contains("Insert your data");
			}
		);

		it(
			"should validate empty fields",
			() => {
				cy.get(".MuiFormHelperText-root").should("be.empty");
				cy.get('[data-testid="submit"]').click();
				cy.get(".MuiFormHelperText-root").contains("weight is a required field");
			}
		);

		it(
			"should fail form validation",
			() => {
				cy.get(".MuiInputBase-input").type("22");
				cy.get('[data-testid="submit"]').click();
				cy.get(".MuiFormHelperText-root").contains("weight must be greater than or equal to 40");

			}
		);

		it(
			"should pass form successfully",
			() => {
				cy.get(".MuiInputBase-input").type("90");
				cy.get('[data-testid="submit"]').click();
				cy.get(".MuiTypography-h2").contains("You have to drink both drinks per one hour!!! For example");
			}
		);
	}
);