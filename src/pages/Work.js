import React from 'react';
// import components
import { fade } from '../components/animation';
import { useScroll } from '../components/useScroll';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import styled from 'styled-components';
const Work = () => {
	const [element, controls] = useScroll();
	return (
		<div id="work">
			<WorkStyle>
				<motion.h3
					id="heading_work"
					variants={fade}
					animate={controls}
					initial="hidden"
					ref={element}
				>
					Work
				</motion.h3>

				<Projects />
			</WorkStyle>
		</div>
	);
};

const WorkStyle = styled.div`
	margin: 100px;
	padding: 5rem 10rem;
	#heading_work {
		text-align: center;
	}
`;
export default Work;
