import { Route } from "../../../types";

export type SideBarProps = {
	isOpen: boolean;
	routes: Route[];
	onClick: () => void;
};