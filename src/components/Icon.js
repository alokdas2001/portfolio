import React from 'react';
//import img
import github from '../img/github.svg';
import Link from '../img/Link.svg';
import gallery from '../img/gallery.svg';
const Icon = () => {
	return (
		<div>
			<a
				href="https://github.com/alokdas2001/music-player"
				target="_blank"
				rel="noreferrer"
			>
				<img src={github} alt="not found" />
			</a>
			<a
				href="https://reactjs-music-player.herokuapp.com/"
				target="_blank"
				rel="noreferrer"
			>
				<img src={Link} alt="" />
			</a>
		</div>
	);
};

export default Icon;
