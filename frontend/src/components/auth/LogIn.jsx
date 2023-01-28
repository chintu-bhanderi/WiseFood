import { useEffect, useState } from "react";
import {useDispatch,useSelector} from "react-redux";
import { userLogin } from '../../store/actions/authAction';
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {USER_TYPE} from '../../store/types/authType'
import styles from "../../styles/login.module.css";

export const LogIn = () => {

	const dispatch = useDispatch();	

	const type = useParams().type;


	const [data, setData] = useState({ email: "", password: "" });
	// const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	
	const {error} = useSelector(state=>state.auth);
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(userLogin(data,type));
		// console.log('Error1',error);
		// try {
		// 	let url;
		// 	if(type===USER_TYPE) url = "http://localhost:8000/api/auth/login";
		// 	else url = "http://localhost:8000/api/worker/login";
		// 	const { data: res } = await axios.post(url, data);
		// 	localStorage.setItem("authToken2", res.token);
		// 	console.log(res);
		// 	// window.location = "/";
		// } catch (error) {
		// 	if(error.response){
		// 		console.log('error->',error.response.data.error.errorMessage);
		// 	} else {
		// 		console.log('error->','Internal server error');
		// 	}
		// }
	};

	useEffect(()=>{	
		console.log('Error1',error);
	},[error])

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<h1>Type : {type}</h1>
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
						{/* {error && <div className={styles.error_msg}>{error}</div>} */}
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
					</form>
				</div>
				{ type===USER_TYPE && 
					<div className={styles.right}>
						<h1>New Here ?</h1>
						<Link to="/auth/signup">
							<button type="button" className={styles.white_btn}>
								Sing Up
							</button>
						</Link>
					</div>
				}
			</div>
		</div>
	);
};
