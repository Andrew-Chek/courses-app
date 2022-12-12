export const getDuration = (duration) => {
	const fraction = duration % 60;
	const integer = Math.round(duration / 60);
	if (integer < 10 && fraction < 10) {
		return `0${integer}:0${fraction}`;
	} else if (integer > 9 && fraction < 10) {
		return `${integer}:0${fraction}`;
	} else if (integer < 10 && fraction > 9) {
		return `0${integer}:${fraction}`;
	} else return `${integer}:${fraction}`;
};
