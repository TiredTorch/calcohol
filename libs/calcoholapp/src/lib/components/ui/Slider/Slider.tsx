import { FC } from "react";
import { Slider as MUISlider, SliderProps } from "@mui/material";

export const Slider: FC<SliderProps> = ({
	...rest
}) => {
	const marks = [
		{
			value: 0,
			label: "4:0",
		},
		{
			value: 25,
			label: "3:1",
		},
		{
			value: 50,
			label: "2:2",
		},
		{
			value: 75,
			label: "1:3",
		},
		{
			value: 100,
			label: "0:4",
		},
	];
	return (
		<MUISlider
			step={null}
			marks={marks}
			{...rest}
		/>
	);
};

export default Slider;