import { AppRoutes, Route } from "@calcohol/shared";

export const routes: Route[] = [
	{
		name: "Home page",
		route: AppRoutes.MAIN
	},
	{
		name: "Calculator",
		route: AppRoutes.CALCULATOR
	},
	{
		name: "Drinks list",
		route: AppRoutes.DRINKS
	}
];