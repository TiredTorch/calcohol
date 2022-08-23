import { FC } from "react";
import { Box, BoxProps } from "@mui/material";
import { useRouter } from "next/router";
import logo from "../../assets/logo.svg";

const Logo: FC<BoxProps> = ({
	...rest
}) => {
	const router = useRouter();

	const handleBackToHomePage = () => router.push("/");

	return (
		<Box
			onClick={handleBackToHomePage}
			component="img"
			src={logo}
			{...rest}
		/>
	);
};

export default Logo;