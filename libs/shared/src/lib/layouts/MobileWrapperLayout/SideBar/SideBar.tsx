import { FC } from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { sideBarStyles } from "./SideBar.styles";
import { SideBarProps } from "./SideBar.types";

const SideBar: FC<SideBarProps> = ({
	isOpen,
	routes,
	onClick
}) => {

	return (
		<Box
			component="div"
			sx={{
				...sideBarStyles.root,
				left: isOpen ? "0" : "-100vw"
			}}
		>
			<Box
				component="div"
				sx={sideBarStyles.navigation}
			>
				{routes.map((item, i) => (
					<Link
						key={i}
						href={item.route}
					>
						<Typography
							variant="h3"
							sx={sideBarStyles.text}
							onClick={onClick}
							data-cy="redirect_link"
						>
							<Box sx={sideBarStyles.circle}></Box>
							{item.name}
						</Typography>
					</Link>
				))}
			</Box>
			<Box
				component="div"
				sx={sideBarStyles.bottomPart}
			>
				<Typography
					variant="h4"
					sx={sideBarStyles.bottomText}
				>
					Copyright © 2021. All Rights Reserved

				</Typography>
			</Box>
		</Box>
	);
};

export default SideBar;
