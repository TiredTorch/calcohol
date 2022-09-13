import { getPageTitle } from "../support/app.po";

describe(
	"Calcohol Drinks",
	() => {
		beforeEach(() => {
			cy.viewport(
				320,
				568
			);
			cy.visit("/drinks");
		});

		it(
			"Should visit drinks page",
			() => {
				cy.document().contains("Choose drink");
			}
		);

		it(
			"Should redirect to drink page on click",
			() => {
				cy.get(`[data-cy="drinks_wrapper"] > :nth-child(4)`).click();
				cy.get('[data-cy="drinks_display"]').click();
				getPageTitle().contains(/gin/i);
			}
		);
	}
);
