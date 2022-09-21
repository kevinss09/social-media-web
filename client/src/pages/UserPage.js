import React, { useRef, useState, useEffect } from "react";

export default function UserPage() {
	const [toggle, setToggle] = useState(false);
	const [active, setActive] = useState(0);

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
						<a href="/home" class="nav_logo">
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
			<div class="bg-light user-container">
				<div className="row">
					<div className="col-md-4 header-top ">
						<div className="header-user-img">
							<img src="./images/myself.jpeg" alt="pictureOfMe" />
						</div>
					</div>
					<div className="col-md-8 header-bottom">
						<div className="d-flex flex-md-row flex-column justify-content-start">
							<p className="name-user mt-2">@KevinSugeng</p>
							<button type="button" class="btn btn-user btn-outline-primary">
								Edit Profile
							</button>
							<button type="button" class="btn btn-user btn-outline-primary">
								Settings
							</button>
						</div>
						<p className="ms-1 mt-3">
							I'm a second year post secondary student pursuing bachelor degree
							in computer science. I am passionate about building new things
							especially technologywise. I start to code since 18 years old and
							work as a freelace website developer in 2022.
						</p>
					</div>
				</div>
				{/* Bottom part */}
				<div className="bottom-part d-flex flex-column justify-content-start align-items-center mt-5">
					<h2 style={{ fontWeight: "400" }}>Post</h2>
					<div className="container-fluid mt-3">
						<div className="row gx-md-4 gy-5 ">
							<div className="col-md-4 bot-user-img">
								<img src="./images/beach.jpg" className="user-image" alt="" />
							</div>
							<div className="col-md-4 bot-user-img">
								<img src="./images/hiking.jpg" className="user-image" alt="" />
							</div>
							<div className="col-md-4 bot-user-img">
								<img
									src="./images/stanleyPark.jpg"
									className="user-image"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</body>
	);
}
