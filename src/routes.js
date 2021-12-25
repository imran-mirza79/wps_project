import { Route, BrowserRouter, Switch } from "react-router-dom";
import React from "react";
import Home from "../src/Containers/HomeContainer";
import About from "./Containers/AboutContainer";
import Gallery from "./Containers/GalleryContainer";
import Login from "./Containers/LoginContainer";
// import Footer from "./Containers/Footer";

const routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/gallery" component={Gallery} />
				<Route exact path="/login" component={Login} />
			</Switch>
		</BrowserRouter>
	);
};

export default routes;
