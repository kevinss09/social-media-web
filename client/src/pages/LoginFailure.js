import React from "react";
import { FileExcelFill } from "react-bootstrap-icons";

export default function LoginFailure() {
	return (
		<div class="height-100 bg-light logout-container">
			{/* <h4>Main Components</h4> */}
			<div className="container-fluid container-fluid-logout">
				<FileExcelFill className="door-closed-icon" />
				<h2>Oops, Invalid account and password</h2>
				<a href="/" className="w-100 ">
					<button type="button" class="btn btn-primary btn-homepage w-100 my-4">
						Go to Login
					</button>
				</a>
				<a href="/register" className="w-100">
					<button
						type="button"
						class="btn btn-outline-primary btn-logout w-100 my-1"
					>
						Go to Register
					</button>
				</a>
			</div>
		</div>
	);
}
