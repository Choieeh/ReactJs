import React from 'react';
import PropTypes from 'prop-types';

function Food({name, number, rating}){
	return <div>
		<h3>{number}</h3>
		<h1>I like {name}</h1>
		<h4>{rating} / 5</h4>
	</div>
}

const foodILike = [
	{
		id:1,
		name : "kimchi",
		number : "1",
		rating : 5
	},
	{
		id:2,
		name : "sampgeaop",
		number : "2",
		rating : 4.9
	},
	{
		id:3,
		name : "kimbap",
		number : "3",
		rating : 3.8
	}
]

Food.propTypes = {
	name: PropTypes.string.isRequired,
	number : PropTypes.string.isRequired,
	rating : PropTypes.number.isRequired
}

function renderFood(dish){
	console.log(dish);
	return <Food key={dish.id} name = {dish.name} number = {dish.number} rating = {dish.rating}/>
}

function App() {
  return (
    <div className="App">
    	<h1>asdf</h1>Hello!!!!
		{foodILike.map(renderFood)}
    </div>
  );
}

export default App;
