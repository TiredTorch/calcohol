import { SwitchProps as MUISwitchProps } from "@mui/material";

export type SwitchProps = MUISwitchProps & {
	leftLable: string;
	rightLable: string;
};