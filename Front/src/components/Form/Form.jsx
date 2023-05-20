import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";
import rickandmortyimg from "../../assets/rick-and-morty-img.jpg";

const Form = ({ login }) => {
	const [userData, setUserData] = useState({
		username: "",
		password: "",
	});

	const [errors, setErrors] = useState({
		username: "",
		password: "",
	});

	const handleInputsChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
		setErrors(
			validation({
				...userData,
				[event.target.name]: event.target.value,
			})
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		login(userData);
	};

	return (
		<div className={style.div2}>
			<img src={rickandmortyimg} className={style.img} />
			<div className={style.div}>
				<form onSubmit={handleSubmit} className={style.form}>
					<label htmlFor='username' className={style.label}>
						Username:
					</label>
					<input
						type='text'
						name='username'
						value={userData.username}
						onChange={handleInputsChange}
					/>
					{errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

					<label htmlFor='password' className={style.label}>
						Password:
					</label>
					<input
						type='password'
						name='password'
						value={userData.password}
						onChange={handleInputsChange}
					/>
					{errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
					<button className={style.button}>LOGIN</button>
				</form>
			</div>
		</div>
	);
};
export default Form;
