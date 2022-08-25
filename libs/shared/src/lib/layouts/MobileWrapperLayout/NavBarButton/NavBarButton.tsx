import { FC } from "react";
import { Button } from "@mui/material";
import { navBarButtonStyles } from "./NavBarButton.styles";
import { NavBarButtonProps } from "./NavBarButton.types";
import { ReactComponent as ButtonIcon } from "../../../assets/ButtonIcon.svg";

const NavBarButton: FC<NavBarButtonProps> = ({
	onClick,
	isOpenSideBar
}) => {
	const handleClick = () => {
		onClick();
	};

	return (
		<Button
			onClick={handleClick}
			sx={{
				...navBarButtonStyles.root,
			}}
		>
			<ButtonIcon
				style={{
					transform: `rotateZ(${isOpenSideBar ? "180deg" : "0deg"})`,
					transition: "transform .2s"
				}}
				width={"50%"}
			/>
		</Button>
	);
};

export default NavBarButton;