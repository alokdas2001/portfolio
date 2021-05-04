import React from 'react';
//imort framer-motion
import { motion } from 'framer-motion';
//animation
import { fade } from './animation';
import { useScroll } from './useScroll';
import me from '../img/me.png';
const AboutMe = () => {
	const [element, controls] = useScroll();
	return (
		<motion.div
			class="AboutMe"
			variants={fade}
			animate={controls}
			initial="hidden"
			ref={element}
		>
			<div>
				<h3>About Me</h3>

				<img src={me} alt="not found" />
				<p>
					Hello! My name is Alok Das. I'm a Btech student at Siksha 'O'
					Anusandhan (SOA) pursuing Computer Science And Engineering(2019 - 2023
					Batch).
				</p>
			</div>
		</motion.div>
	);
};

export default AboutMe;
