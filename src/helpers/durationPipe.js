export const getDuration = (duration) => {
	const fraction = duration % 60;
	const integer = Math.round(duration / 60);
	return `${integer}:${fraction}`;
};
