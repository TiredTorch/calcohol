import { FC } from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
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
			{routes.map((item, i) => (
				<Link
					key={i}
					href={item.route}
				>
					<Typography
						onClick={onClick}
					>
						{item.name}
					</Typography>
				</Link>
			))}
		</Box>
	);
};

export default SideBar;