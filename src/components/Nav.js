import React from 'react';
import styled from 'styled-components';

const Nav = () => {
	return (
		<StyledNav>
			<h1>
				<a id="#logo" href="#logo">
					Resume
				</a>
			</h1>

			<ul>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#work">Work</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	position: fixed;
	display: flex;
	overflow: hidden;
	top: 0;
	width: 100%;
	min-height: 10vh;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	background-color: #1b1b1b;
	--nav-height: 100px;
	--nav-scroll-height: 70px;
	box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
		0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
		0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
		0 100px 80px rgba(0, 0, 0, 0.12);

	/* position: fixed;

	width: 100%; */

	a {
		color: white;
		text-decoration: none;
		font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
		--fz-xs: 13px;
		&:hover {
			color: #23d997;
		}
	}
	ul {
		display: flex;
		list-style: none;
	}
	h1 {
		a {
			font-size: 1.5rem;
			font-family: 'Lobster', cursive;
			font-weight: lighter;
		}
	}
	li {
		padding-left: 10rem;
		position: relative;
	}
`;

export default Nav;
