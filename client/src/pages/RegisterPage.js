import React from "react";

export default function RegisterPage() {
	return (
		<div className="container-fluid container-fluid-homepage">
			<div className="inside-registerPage row">
				<div className="col-md-6 p-0">
					<img
						src="./images/beach.jpg"
						alt="home-photo"
						className="register-photo"
					/>
				</div>
				<div className="col-md-6 p-0">
					<form className="">
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
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
