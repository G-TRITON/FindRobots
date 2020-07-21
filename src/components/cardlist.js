import React from 'react';
import Card from './card.js';

const CardList = ({robots}) => {
	const card = robots.map((user, i) => {
		return (<Card key={i} 
		id={robots[i].id} 
		name={robots[i].name} 
		username={robots[i].username} 
		email={robots[i].email} />);
	})

	return(
	<div>
    	{card}
    </div>
		);
}

export default CardList;