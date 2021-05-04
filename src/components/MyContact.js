import React from 'react';
import styled from 'styled-components';
// import images
import linkedin from '../img/linkedin.svg';
import github from '../img/github.svg';
import gmail from '../img/gmail.svg';
const MyContact = () => {
	return (
		<Contacts id="contact">
			<a href="https://www.linkedin.com/in/alok-das-/" target="_blank">
				<img src={linkedin} alt="not found" />
			</a>
			<a href="https://github.com/alokdas2001" target="_blank">
				<img src={github} alt="not found" />
			</a>
			<a
				href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=das.alok4973@gmail.com"
				target="_blank"
			>
				<img src={gmail} alt="not found" />
			</a>
		</Contacts>
	);
};

const Contacts = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 15rem 15rem 5rem 5rem;
	padding: 10px 490px;
	color: white;

	margin-left: auto;
	margin-right: auto;

	img {
		width: 50px;
		height: 50px;
		filter: invert(100%);
		&:hover {
			-ms-transform: scale(1.5); /* IE 9 */
			-webkit-transform: scale(1.5); /* Safari 3-8 */
			transform: scale(1.3);
			transition: 0.3s ease;
		}
	}
`;

export default MyContact;
