import { useAlert } from "react-alert";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userRegistration } from "../../store/actions/authAction";
import { ERROR_CLEAR, SUCCESS_MESSAGE_CLEAR, USER_TYPE } from "../../store/types/authType";
import styles from "../../styles/signup.module.css";

export const SignUp = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const alert = useAlert();
	const { successMessage, error } = useSelector(state => state.auth);
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		address: ""
	});

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(userRegistration(data));
	};

	useEffect(() => {
		if (successMessage) {
			dispatch({ type: SUCCESS_MESSAGE_CLEAR })
			navigate(`/auth`);
		}
		if (error) {
			error.map(err => alert.error(err));
			dispatch({ type: ERROR_CLEAR })
			setData((prev) => {
				return {
					...prev,
					password: ""
				}
			})
		}
	}, [successMessage, error])

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to={`/auth/login/${USER_TYPE}`}>
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						<input
							type="textarea"
							placeholder="Addres"
							name="address"
							onChange={handleChange}
							value={data.address}
							required
							className={styles.input}
						/>
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
