export const animation = {
	hidden: { y: -250, opacity: 0 },
	show: { y: -10, opacity: 1 },
};

export const fade = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			type: 'tween',
			ease: 'easeOut',
			duration: 1,
			delay: 0.5,
		},
	},
};
