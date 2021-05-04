import React from 'react';
import movierecommendation1 from '../img/MyWork/MovieRecommendation1.png';
import MusicPlayer from '../img/MyWork/MusicPlayer.PNG';
import styled from 'styled-components';
import Icon from './Icon';
const Projects = () => {
	return (
		<Project>
			<div className="card1">
				<img src={MusicPlayer} alt="Music Player" />
				<h3>Music Player</h3>
				<Icon />
			</div>
			<br />
			<div className="card1">
				<img src={movierecommendation1} alt="Movie Recommendation" />
				<h3>Movie Recommendation</h3>
				<Icon />
			</div>
		</Project>
	);
};

const Project = styled.div`
	img {
		height: 50%;
		width: 50%;
		&:hover {
			transform: scale(0.9);
			transition: all 0.8s ease;
		}
	}
	.card1 {
		overflow: hidden;
		width: 190%;
		background-color: #2f363e;
		border-radius: 4px;
		padding: 10px;
		margin: 12px 12px 12px 42px;
		text-decoration: none;
		box-shadow: 0 0 10px rgb(0, 0, 0);
	}
	h3 {
		color: white;
		font-size: 25px;
		line-height: 24px;
		font-weight: 700;
		margin-bottom: 4px;
	}
	a {
		text-align: center;
		img {
			width: 40px;
			height: 40px;
			&:hover {
				-ms-transform: scale(1.5); /* IE 9 */
				-webkit-transform: scale(1.5); /* Safari 3-8 */
				transform: scale(1.3);
				transition: 0.3s ease;
				filter: invert(100%);
			}
		}
	}
`;

export default Projects;
