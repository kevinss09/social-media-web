import React, { useRef, useState, useEffect } from "react";

export default function LoginPage() {
	const [toggle, setToggle] = useState(false);
	const [active, setActive] = useState(null);
	const [items, setItems] = useState([]);

	const onButtonClick = (index) => {
		setActive(index);
	};

	useEffect(() => {
		fetchItems();
	}, []);

	const fetchItems = async () => {
		console.log("It goes to fucking fetch items");
		const data = await fetch("/socials", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});

		const items = await data.json();
		setItems(items);
	};

	console.log(items);

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
					<img src="images/closeImage.jpg" alt="" />
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
			<div class="bg-light main-container">
				{/* <h4>Main Components</h4> */}
				<div className="container-fluid">
					<div className="row gy-5">
						{/* Start first row */}
						<div className="col-md-4" style={{ height: "300px" }}>
							<img
								src="./images/beach.jpg"
								alt="picture-left"
								className="img-home"
							/>
						</div>
						<div className="col-md-8">
							<div className="d-flex flex-row col-8-flex mb-3">
								<div class="header-img">
									<img src="./images/closeImage.jpg" alt="" />
								</div>
								<p className="name-home mt-1">@MingyuSujiman</p>
							</div>

							<h5 className="mb-0" style={{ fontWeight: "bold" }}>
								Sunset Beach, English Bay{" "}
							</h5>
							<span style={{ fontSize: "15px", fontWeight: "200" }}>
								Vancouver, British Columbia
							</span>
							<div className="mt-4">
								<p className="mb-2">
									English Bay Beach is Vancouver's first and main beach. It is
									where thousands of Vancouverites have learned to swim. The
									view from the beach is spectacular such that people just come
									to sit and enjoy the view.
								</p>
								<p>
									You can also enjoy the normal beach activities such as
									swimming, laying in the sun, and volleyball. The water is
									ocean salt water and is normally cold, but is bearable to swim
									during the summer months. They even put out a slide to use
									during the summer.
								</p>
							</div>
						</div>
						{/* End of first row  */}
						{/* Start first row */}
						<div className="col-md-4" style={{ height: "300px" }}>
							<img
								src="./images/stanleyPark.jpg"
								alt="picture-left"
								className="img-home"
							/>
						</div>
						<div className="col-md-8">
							<div className="d-flex flex-row col-8-flex mb-3">
								<div class="header-img">
									<img src="./images/closeImage.jpg" alt="" />
								</div>
								<p className="name-home mt-1">@KihongSuprapto</p>
							</div>

							<h5 className="mb-0" style={{ fontWeight: "bold" }}>
								Stanley Park{" "}
							</h5>
							<span style={{ fontSize: "15px", fontWeight: "200" }}>
								Vancouver, British Columbia
							</span>
							<div className="mt-4">
								<p className="mb-2">
									Much of the park remains forested, just as it was in the late
									1800s — the park has roughly half a million trees, some
									standing as tall as 76 metres and hundreds of years old. In
									the past 100 years, there have been three major wind storms
									that caused damage and loss of many of the trees, the most
									recent in 2006.
								</p>
								<p>
									The Vancouver Seawall draws thousands of residents and
									visitors to the park each day. The park features lush forest
									trails, relaxing beaches, the Vancouver Aquarium and many more
									attractions.
								</p>
							</div>
						</div>
						{/* End of first row  */}
					</div>
				</div>
			</div>
		</body>
	);
}
