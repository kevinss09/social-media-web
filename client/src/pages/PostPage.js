import React, { useRef, useState, useEffect } from "react";

export default function PostPage() {
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
						href="#"
						class={["nav_link", active === 6 ? "active" : ""].join(" ")}
						onClick={() => onButtonClick(6)}
					>
						<i class="bx bx-log-out nav_icon"></i>
						<span class="nav_name">SignOut</span>
					</a>
				</nav>
			</div>
			<div class="height-100 bg-light post-container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6">
							<img src="./images/gate.jpg" alt="" className="post-image" />
						</div>
						<div className="col-md-6">
							<div className="right-section-post">
								<form className="">
									<h1 className="right-h1">Post</h1>
									<div className="right-div right-div-email mb-3">
										<label for="exampleInputEmail1" className="form-label">
											Location
										</label>
										{/* <input
											type="email"
											className="form-control"
											id="exampleInputEmail1"
											placeholder="Email"
											aria-describedby="emailHelp"
										/> */}
										<input
											type="text"
											placeholder="Location"
											className="form-control"
										/>
									</div>
									<div className="right-div right-div-password mb-3">
										<label for="exampleCaption" className="form-label">
											Caption
										</label>
										<textarea
											id="w3review"
											name="w3review"
											rows="4"
											cols="37"
											placeholder="Caption"
											className="p-2 textarea-post"
										></textarea>
									</div>
									<div className="right-div right-div-password mb-3">
										<label for="exampleImage" className="form-label">
											Image
										</label>
										<input type="file" id="img" name="img" accept="image/*" />
									</div>
									<button
										type="submit"
										class="btn btn-submit btn-outline-primary"
									>
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</body>
	);
}
