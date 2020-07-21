import React from 'react';
import './card.css';

const Card = (props) => { 
	const {name, email, username} = props;
	return(
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="robo" src={`https://robohash.org/${username}?150x150`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		)
}

export default Card;