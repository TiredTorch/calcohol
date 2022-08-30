import { getImageSrc } from "../../helpers";
import bg from "../../assets/bg.png";
import wrapperBg from "../../assets/wrapperBg.jpg";

export const mobileWrapperLayoutStyles = {
	root: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100vw",
		height: "100vh",
		maxWidth: "100vw",
		maxHeight: "100vh",
		background: `url("${getImageSrc(bg)}")`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		overflow: "hidden"
	},
	mobileWrapper: {
		width: "100%",
		height: "100vh",
		maxWidth: "820px",
		background: `url("${getImageSrc(wrapperBg)}")`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		margin: "auto"
	},
	mobileWrapperHeader: {
		width: "100%",
		height: "100%",
		maxWidth: "820px",
		backgroundSize: "cover",
		backgroundPosition: "center",
		margin: "auto",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		padding: "0 calc(1vmin + 5px)",
		justifyContent: "space-between"
	},
	header: {
		position: "absolute",
		width: "100%",
		background: "linear-gradient(180deg, #CCCCCC 0%, rgba(184, 130, 255, 0.790152) 20%, rgba(160, 103, 234, 0.588076) 40%, rgba(152, 95, 225, 0.41353) 60%, rgba(148, 91, 221, 0.333333) 80%, rgba(144, 57, 255, 0.74) 100%)",
		height: "128px"
	},
	mainPart: {
		paddingTop: "128px",
		width: "100%",
		height: "100%",
		background: "linear-gradient(180deg, rgba(214, 214, 214, 0.78) 0%, #D1C1E5 19.79%, #CDAEF3 51.56%, rgba(163, 114, 227, 0.85) 100%)",
	},
	text: {
		fontFamily: "Montserrat",
		fontStyle: "normal",
		fontWeight: "700",
		fontSize: "calc(4vmin + 35px)",
		lineHeight: "78px",

		color: "#FFFFFF"
	}
};