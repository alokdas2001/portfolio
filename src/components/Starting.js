import React from 'react';
import styled from 'styled-components';
//imort framer-motion
import { motion } from 'framer-motion';
//animation
import { animation } from './animation';
import AboutMe from './AboutMe';
const Starting = () => {
	return (
		<About>
			<motion.h1>
				<ul>
					<li>
						<motion.h2
							transition={{ duration: 0.5 }}
							variants={animation}
							initial="hidden"
							animate="show"
						>
							Hi! I'm
						</motion.h2>
					</li>
					<li>
						<motion.h1
							transition={{ duration: 1 }}
							variants={animation}
							initial="hidden"
							animate="show"
						>
							&ensp;Alok Das
						</motion.h1>
					</li>
					<li>
						<motion.h1
							transition={{ duration: 1.5 }}
							variants={animation}
							initial="hidden"
							animate="show"
						>
							<span>&emsp; Web Developer</span>
						</motion.h1>
					</li>
				</ul>
				<br />
				<br />
				<br id="about" />
				<br />
				<br />

				<AboutMe />
			</motion.h1>
		</About>
	);
};

const About = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
	font-size: 2rem;

	img {
		width: 200px;
		height: 200px;
		display: block;
		margin-left: auto;
		margin-right: auto;

		&:hover {
			cursor: pointer;
		}
	}
	p {
		font-size: 25px;
		font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
		padding: 1rem 2rem;
	}

	h2 {
		color: #23d997;
		font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
	}
	h1 {
		color: #efe9fb;
	}

	.AboutMe {
		p {
			font-family: 'Nunito Sans', sans-serif;
		}

		h3 {
			text-align: center;
		}
	}
`;
export default Starting;
