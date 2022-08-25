export type Route = {
	route: AppRoutes;
	name: string;
	isPrivate?: boolean;
};

export enum AppRoutes {
	MAIN = "/",
	DRINKS = "/drinks",
	CALCULATOR = "/calculator"
}