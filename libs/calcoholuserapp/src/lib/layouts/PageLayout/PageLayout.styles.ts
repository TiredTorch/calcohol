
export const pageLayoutStyles = {
	root: {
		minWidth: "100vw",
		minHeight: "100vh",
		maxWidth: "100vw",
		maxHeight: "100vh",
		background: `url("background.png")`,
		backgroundSize: "100% 100%"
	},
	contentWrapper: {
		zIndex: 3,
		position: "absolute",
		top: "13%",
		left: "50%",
		maxWidth: "1550px",
		transform: "translate(-50%)",
		width: "100%",
		height: "75%",
		boxSizing: "border-box",
		background: "linear-gradient(180deg, rgba(214, 214, 214, 0.78) 0%, #D1C1E5 19.79%, #CDAEF3 51.56%, rgba(163, 114, 227, 0.85) 100%)",
		border: "0px solid rgba(132, 73, 208, 0.84)",
		boxShadow: "7px 12px 8px rgba(5, 0, 255, 0.25)",
		padding: "10px 20px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	}
};