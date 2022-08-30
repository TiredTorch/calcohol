export const sideBarStyles = {
	root: {
		height: "100vh",
		width: "calc(100vw - 4vmin - 40px - 1vmin - 10px)",
		background: "linear-gradient(90.7deg, #8449D0 27.5%, rgba(154, 110, 209, 0.93) 74.6%, rgba(132, 73, 208, 0) 115.14%)",
		filter: "drop-shadow(5px 4px 4px rgba(0, 0, 0, 0.25))",
		position: "absolute",
		top: 0,
		transition: "all .3s",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	text: {
		textAlign: "start",
		display: "flex",
		alignItems: "center",
		cursor: "pointer",
		width: "fit-content",
		color: "white"
	},
	circle: {
		width: "24px",
		height: "24px",
		background: "rgba(54, 123, 203, 0.79)",
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		borderRadius: "50%",
		margin: "20px"
	},
	navigation: {
		width: "100%"
	},
	bottomPart: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		maxWidth: "600px"
	},
	bottomText: {
		margin: "20px 0 0"
	}
};