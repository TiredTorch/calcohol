import { InputProps as MUIInputPtops } from "@mui/material";

export type InputProps = MUIInputPtops & {
	error: boolean | undefined;
	helperText: string | false | undefined;
};