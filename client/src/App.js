import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/app.css";
import {
	BrowserRouter,
	Routes,
	Route,
	HashRouter,
	Router,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import LogoutPage from "./pages/LogoutPage";
import LoginFailure from "./pages/LoginFailure";

function App() {
	// const [user, setUser] = useState(null);

	// useEffect(() => {
	// 	const getUser = () => {
	// 		fetch("/login/success", {
	// 			method: "GET",
	// 			credentials: "include",
	// 			headers: {
	// 				Accept: "application/json",
	// 				"Content-Type": "application/json",
	// 				"Access-Control-Allow-Credentials": true,
	// 			},
	// 		})
	// 			.then((response) => {
	// 				if (response.status === 200) {
	// 					return response.json;
	// 				} else {
	// 					throw new Error("authentication has been failed!");
	// 				}
	// 			})
	// 			.then((resObject) => {
	// 				setUser(resObject.user);
	// 			})
	// 			.catch((err) => {
	// 				console.log(err);
	// 			});
	// 	};
	// 	getUser();
	// }, []);

	// console.log(user);

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/home" element={<HomePage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route exact path="/" element={<LoginPage />} />
					<Route path="/user" element={<UserPage />} />
					<Route path="/post" element={<PostPage />} />
					<Route path="/logout" element={<LogoutPage />} />
					<Route path="/loginFailure" element={<LoginFailure />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
