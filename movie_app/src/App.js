import React from 'react';

function Food({name, number}){
	return <div>
		<h1>I like {name}</h1>
		<h3>{number}</h3>
	</div>
}

const foodILike = [
	{
		name : "kimchi",
		number : "1"
	},
	{
		name : "sampgeaop",
		number : "2"
	},
	{
		name : "kimbap",
		number : "3"
	}
]

function App() {
  return (
    <div className="App">
    	<h1>asdf</h1>Hello!!!!
		{foodILike.map(dish =>(
			  <Food name={dish.name} number={dish.number}/>
			  //dish는 object를 받아온것.
		))}
    </div>
  );
}

export default App;
