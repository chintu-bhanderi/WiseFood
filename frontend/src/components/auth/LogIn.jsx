import { useEffect, useState } from "react";
import {useDispatch,useSelector} from "react-redux";
import { userLogin } from '../../store/actions/authAction';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAlert } from 'react-alert';
import {ERROR_CLEAR, SUCCESS_MESSAGE_CLEAR, USER_TYPE} from '../../store/types/authType'
import styles from "../../styles/login.module.css";

export const LogIn = () => {

	const dispatch = useDispatch();	
	const alert = useAlert();
	const navigate = useNavigate();
	const type = useParams().type;
	const [data, setData] = useState({ email: "", password: "" });
	const {authenticate,successMessage,error} = useSelector(state=>state.auth);

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(userLogin(data,type));
	};

	useEffect(()=>{	
		if(authenticate){
			navigate('/');
			console.log("Success");
        }
        if(successMessage){
            alert.success(successMessage);
            dispatch({type : SUCCESS_MESSAGE_CLEAR })
        }
		if(error){
			error.map(err=>alert.error(err));
			dispatch({type : ERROR_CLEAR })
			setData((prev)=>{
				return {
					...prev,
					password : ""
				}
			})
		}
	},[successMessage,error])

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
