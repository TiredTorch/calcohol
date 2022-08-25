export const getImageSrc = (image: string) => {
	const newImage = image as unknown as {
		src: string
	};
	return newImage.src;
};