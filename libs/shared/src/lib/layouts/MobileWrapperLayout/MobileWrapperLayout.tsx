import { FC, PropsWithChildren, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useDebounce } from "use-debounce";
import ClickAwayListener from "react-click-away-listener";
import NavBarButton from "./NavBarButton/NavBarButton";
import SideBar from "./SideBar/SideBar";
import Logo from "./Logo/Logo";
import { mobileWrapperLayoutStyles } from "./MobileWrapperLayout.styles";
import { MobileWrapperLayoutProps } from "./MobileWrapperLayout.types";

export const MobileWrapperLayout: FC<PropsWithChildren<MobileWrapperLayoutProps>> = ({
	children,
	routes
}) => {
	const [isOpenSideBar, setisOpenSideBar] = useState(false);

	const [debouncedIsOpenSideBar] = useDebounce(isOpenSideBar, 100);

	const handleOpenSideBar = () => setisOpenSideBar(true);
	const handleCloseSideBar = () => (debouncedIsOpenSideBar ? setisOpenSideBar(false) : () => null);

	return (
		<>
			<Box
				component="div"
				sx={mobileWrapperLayoutStyles.root}
			>
				<Box
					component="div"
					sx={mobileWrapperLayoutStyles.header}
				>
					<Box
						component="div"
						sx={mobileWrapperLayoutStyles.mobileWrapperHeader}
					>
						<NavBarButton
							isOpenSideBar={isOpenSideBar}
							onClick={handleOpenSideBar}
						/>
						<Typography
							component="span"
							sx={mobileWrapperLayoutStyles.text}
						>
							Title
						</Typography>
						<Logo />
					</Box>

				</Box>
				<Box
					component="div"
					sx={mobileWrapperLayoutStyles.mobileWrapper}
				>
					<Box
						component="div"
						sx={mobileWrapperLayoutStyles.mainPart}
					>
						{children}
					</Box>
				</Box>
			</Box>
			<ClickAwayListener onClickAway={handleCloseSideBar}>
				<>
					<SideBar
						onClick={handleCloseSideBar}
						isOpen={isOpenSideBar}
						routes={routes}
					/>
				</>
			</ClickAwayListener>

		</>
	);
};

export default MobileWrapperLayout;