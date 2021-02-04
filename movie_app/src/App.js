import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./routes/Navigation";
import Detail from "./routes/Detail";

function App(){
	return <HashRouter>
		<Navigation />
		<Route path="/" exact={true} component={Home}/>
		<Route path="/about" component={About}/>
		<Route path="/movie-detail" component={Detail}/>
		
	</HashRouter>
}
//내가 about으로 가면 About 컴포넌틀를 보여줘,. path랑 component가 이름이 같을 필요는 없음.
export default App;