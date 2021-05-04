import React from 'react';
import styled from 'styled-components';
//imort framer-motion
import { motion } from 'framer-motion';
const MySkills = () => {
	return (
		<Skill id="skills">
			<ul>
				<h3>Skills</h3>

				<button class="SkillButton" style={{ backgroundColor: '#E44D26' }}>
					HTML
				</button>
				<button class="SkillButton" style={{ backgroundColor: '#254BDD' }}>
					CSS
				</button>
				<button class="SkillButton" style={{ backgroundColor: '#EDD718' }}>
					Javascript
				</button>
				<br />
				<button class="SkillButton" style={{ backgroundColor: '#5ED3F3' }}>
					React.js
				</button>
				<button class="SkillButton" style={{ backgroundColor: '#639A58' }}>
					Node.js
				</button>
			</ul>
		</Skill>
	);
};

const Skill = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	margin: 15rem 15rem 5rem 5rem;
	padding: 10px 490px;
	margin-left: auto;
	margin-right: auto;
	color: white;
	font-size: 2rem;
	width: fit-content;
	/* To adjust the height as well */
	height: fit-content;
	ul {
		li {
			color: white;
			font-family: 'Nunito Sans', sans-serif;
		}
	}
	.SkillButton {
		border: none;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		height: 50px;
	}
`;
export default MySkills;
