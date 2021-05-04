import React from 'react';
import MyContact from '../components/MyContact';
import { fade } from '../components/animation';
import { useScroll } from '../components/useScroll';
import { motion } from 'framer-motion';
const Contact = () => {
	const [element, controls] = useScroll();
	return (
		<motion.div
			id="contact"
			variants={fade}
			animate={controls}
			initial="hidden"
			ref={element}
		>
			<MyContact />
		</motion.div>
	);
};

export default Contact;
