import React, { useState } from "react";
import { DoorClosed } from "react-bootstrap-icons";

export default function LogoutPage() {
	const [toggle, setToggle] = useState(false);
	const [active, setActive] = useState(null);

	const onButtonClick = (index) => {
		setActive(index);
	};

	return (
		<body id="body-pd" className={["body ", toggle ? "body-pd" : ""].join(" ")}>
			<header class={["header", toggle ? "body-pd" : ""].join(" ")} id="header">
				<div class="header_toggle">
					<i
						class={["bx bx-menu", toggle ? "bx-x" : ""].join(" ")}
						onClick={() => {
							setToggle((prev) => !prev);
						}}
						id="header-toggle"
					></i>
				</div>
				<div class="header_img">
					<img src="./images/closeImage.jpg" alt="" />
				</div>
			</header>
			<div class={["l-navbar", toggle ? "show" : ""].join(" ")} id="nav-bar">
				<nav class="nav">
					<div>
						<a href="home" class="nav_logo">
							<i class="bx bx-layer nav_logo-icon"></i>
							<span class="nav_logo-name">Activegram</span>
						</a>
						<div class="nav_list">
							<a
								href="/home"
								class={["nav_link", active === 0 ? "active" : ""].join(" ")}
								onClick={() => onButtonClick(0)}
							>
								<i class="bx bx-grid-alt nav_icon"></i>
								<span class="nav_name">HomePage</span>
							</a>
							<a
								href="/user"
								class={["nav_link", active === 1 ? "active" : ""].join(" ")}
								onClick={() => onButtonClick(1)}
							>
								<i class="bx bx-user nav_icon"></i>
								<span class="nav_name">Users</span>
							</a>
							<a
								href="/post"
								class={["nav_link", active === 2 ? "active" : ""].join(" ")}
								onClick={() => onButtonClick(2)}
							>
								<i class="bx bx-message-square-detail nav_icon"></i>
								<span class="nav_name">Posts</span>
							</a>
						</div>
					</div>
					<a
						href="/logout"
						class={["nav_link", active === 6 ? "active" : ""].join(" ")}
						onClick={() => onButtonClick(6)}
					>
						<i class="bx bx-log-out nav_icon"></i>
						<span class="nav_name">SignOut</span>
					</a>
				</nav>
			</div>
			<div class="height-100 bg-light logout-container">
				{/* <h4>Main Components</h4> */}
				<div className="container-fluid container-fluid-logout">
					<DoorClosed className="door-closed-icon" />
					<h2>All done, See you soon guys</h2>
					<a href="/home" className="w-100 ">
						<button
							type="button"
							class="btn btn-primary btn-homepage w-100 my-4"
						>
							Go to homepage
						</button>
					</a>
					<a href="/" className="w-100">
						<button
							type="button"
							class="btn btn-outline-primary btn-logout w-100 my-1"
						>
							Logout
						</button>
					</a>
				</div>
			</div>
		</body>
	);
}
