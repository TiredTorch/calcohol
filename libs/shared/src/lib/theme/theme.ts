import { createTheme } from "@mui/material";

export const theme = createTheme({
	typography: {
		fontFamily: "Montserrat",
		h1: {

		},
		h2: {
			fontSize: "30px",
			fontWeight: "400",
			lineHeight: "37px",
			letterSpacing: "0em",
			color: "rgba(54, 123, 203, 0.79)",
			textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
			filter: "blur(0.5px)",
		},
		h3: {
			fontSize: "32px",
			fontWeight: "400",
			lineHeight: "39px",
			letterSpacing: "0em",
			textAlign: "center"
		},
		h4: {
			fontSize: "20px",
			fontWeight: "400",
			lineHeight: "24.2px",
			letterSpacing: "0em",
			textAlign: "center"
		}
	}
});

theme.components = {
	MuiTextField: {
		styleOverrides: {
			root: {

				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}
		}
	},
	MuiInput: {
		styleOverrides: {
			root: {
				margin: "15px 0",
				boxSizing: "border-box",
				background: "rgba(132, 73, 208, 0.11)",
				border: "3px solid rgba(54, 123, 203, 0.28)",
				borderRadius: "20px",
				height: "60px",
				width: "100%",

				"&.Mui-focused": {
					boxSizing: "border-box",
					background: "rgba(132, 73, 208, 0.11)",
					border: "2px solid rgba(54, 123, 203, 0.34)",
					boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
					borderRadius: "20px",
				},

				"& input": {
					textAlign: "center",
					fontSize: "25px"
				}
			}
		}
	},
	MuiInputLabel: {
		styleOverrides: {
			root: {
				left: "auto",
				top: "9px",
				fontSize: "25px",

				"&.Mui-focused": {
					top: "-10px",
					left: "10px",	
				},
				"&.MuiFormLabel-filled": {
					top: "-10px",
					left: "10px",
				}
			}
		}
	}
};