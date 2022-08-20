import React from "react";

export default function HomePage() {
	return (
		<div className="container-fluid container-fluid-homepage">
			<div className="homepage-container">
				<div className="row">
					<div className="col-md-6">
						<img
							src="./images/hiking.jpg"
							alt="home-photo"
							className="home-photo"
						/>
					</div>
					<div className="col-md-6">
						<form className="mt-3">
							<h1 className="right-h1">ActivityGram</h1>
							<div className="right-div right-div-email mb-3">
								<label for="exampleInputEmail1" className="form-label">
									Email address
								</label>
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									placeholder="Email"
									aria-describedby="emailHelp"
								/>
								{/* <div id="emailHelp" className="form-text mt-2">
									We'll never share your email with anyone else.
								</div> */}
							</div>
							<div className="right-div right-div-password mb-3">
								<label for="exampleInputPassword1" className="form-label">
									Password
								</label>
								<input
									type="password"
									className="form-control"
									placeholder="Password"
									id="exampleInputPassword1"
								/>
							</div>
							<button type="submit" class="btn btn-submit btn-outline-primary">
								Log in
							</button>
							<button
								type="button"
								class="btn btn-left btn-outline-danger btn-md download-button"
							>
								<i class="fab fa-google"></i> Google log in
							</button>
							<button
								type="button"
								class="btn btn-right btn-outline-dark btn-md download-button "
							>
								<i class="fab fa-facebook"></i> Facebook Log in
							</button>
						</form>

						<form className="mt-3 form-bottom">
							<p>Don't have an account? </p>
							<a href="/register">Sign up</a>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
