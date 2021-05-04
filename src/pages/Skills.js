import React from 'react';
import MySkills from '../components/MySkills';
import { fade } from '../components/animation';
import { useScroll } from '../components/useScroll';
import { motion } from 'framer-motion';
const Skills = () => {
	const [element, controls] = useScroll();
	return (
		<motion.div
			id="skills"
			variants={fade}
			animate={controls}
			initial="hidden"
			ref={element}
		>
			<MySkills />
			<br />
			<br />
			<br />
			<br />
			<br />
		</motion.div>
	);
};

export default Skills;
