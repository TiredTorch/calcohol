import { getPageTitle } from "../support/app.po";

describe(
	"Calcohol Homepage",
	() => {
		beforeEach(() => {
			cy.viewport(
				320,
				568
			);
			cy.visit("/");
		});

		it(
			"Should visit homepage",
			() => {
				getPageTitle().contains("Welcome to Calcohol app");
			}
		);
		it(
			"Should open and redirect",
			() => {
				cy.get(`[data-cy="open_sidebar"]`).click();
				cy.get(`[data-cy="redirect_link"]`).contains("Calculator").click();
				cy.url().should(
					"include",
					"/calculator"
				);
			}
		);
	}
);
