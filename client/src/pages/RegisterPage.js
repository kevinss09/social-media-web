import React, { useState, useEffect } from "react";

export default function RegisterPage() {
	const [Email, setEmail] = useState("");
	const [selectedFile, setSelectedFile] = useState();
	const [preview, setPreview] = useState();

	// create the google redirect
	const google = () => {
		window.open("http://localhost:4000/auth/google", "_self");
	};

	const facebook = () => {
		window.open("http://localhost:4000/auth/facebook", "_self");
	};

	// create a preview as a side effect, whenever selected file is changed
	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined);
			return;
		}

		const objectUrl = URL.createObjectURL(selectedFile);
		setPreview(objectUrl);

		// free memory when ever this component is unmounted
		return () => URL.revokeObjectURL(objectUrl);
	}, [selectedFile]);

	const onSelectFile = (e) => {
		if (!e.target.files || e.target.files.length === 0) {
			setSelectedFile(undefined);
			return;
		}

		// I've kept this example simple by using the first image instead of multiple
		setSelectedFile(e.target.files[0]);
	};

	return (
		<div className="container-fluid container-fluid-homepage">
			<div className="inside-registerPage row">
				<div className="col-md-6 p-0">
					<img
						src="./images/beach.jpg"
						alt="home-photo"
						className="register-photo h-100"
					/>
				</div>
				<div className="col-md-6 p-0">
					<form
						className="h-100"
						method="POST"
						action="/addNewAccount"
						enctype="multipart/form-data"
					>
						<h1 className="right-h1">ActivityGram</h1>
						<div className="right-div right-div-email mb-3">
							<label for="exampleInputEmail1" className="form-label">
								Email
							</label>
							<input
								type="email"
								name="username"
								className="form-control"
								id="exampleInputEmail1"
								placeholder="Email"
								aria-describedby="emailHelp"
								value={Email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="right-div right-div-password mb-3">
							<label for="exampleInputPassword1" className="form-label">
								Password
							</label>
							<input
								type="password"
								className="form-control"
								placeholder="Password"
								name="password"
								id="exampleInputPassword1"
							/>
						</div>
						<div className="right-div right-div-password mb-3">
							<label for="exampleInputUsername" className="form-label">
								Username
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Name"
								name="name"
								id="exampleInputUsername"
							/>
						</div>
						<div className="right-div right-div-password mb-3">
							<label for="exampleInputImage" className="form-label">
								Profile Picture
							</label>
							<input
								type="file"
								className="form-control"
								name="img"
								accept="image/*"
								id="exampleImg"
								onChange={onSelectFile}
							/>
							<div className="img-preview-container">
								{selectedFile && <img src={preview} className="img-preview" />}
							</div>
						</div>
						<div className="button-group">
							<button
								type="button"
								class="btn btn-left btn-outline-danger btn-md download-button"
								onClick={google}
							>
								<i class="fab fa-google"></i> Google register
							</button>
							<button
								type="button"
								class="btn btn-right btn-outline-dark btn-md download-button "
								onClick={facebook}
							>
								<i class="fab fa-facebook"></i> Facebook register
							</button>
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
