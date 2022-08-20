import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/app.css";
import {
	BrowserRouter,
	Routes,
	Route,
	HashRouter,
	Router,
} from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/home" element={<HomePage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/" element={<LoginPage />} />
					<Route path="/user" element={<UserPage />} />
					<Route path="/post" element={<PostPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
