import './Login.css';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../store/user/actionCreators';
import { service } from '../../services';
import { getCourses } from '../../store/courses/actionCreators';
import { getAuthors } from '../../store/authors/actionCreators';

export default function Login() {
	const [emailValue, setEmail] = useState('');
	const [pswValue, setPsw] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const user = {
			password: pswValue,
			email: emailValue,
		};

		const response = await service.login(user);
		const result = response.json();
		result.then(async (res) => {
			console.log(res);
			if (res.successful === true) {
				window.localStorage.setItem('jwt-token', res.result);
				dispatch(userLogin(res.user.name, res.user.email));
				const coursesResponse = await (await service.getCourses()).json();
				const authorsResponse = await (await service.getAuthors()).json();
				const courses = coursesResponse.result;
				const authors = authorsResponse.result.map((author) => {
					author.added = false;
					return author;
				});
				dispatch(getCourses(courses));
				dispatch(getAuthors(authors));
				navigate('/courses');
			} else alert(res.result);
		});
	};
	return (
		<div className='main-div'>
			<form className='login' onSubmit={handleSubmit}>
				<h2 className='login-title'>Login</h2>
				<Input
					placeholder='Enter email'
					label='Email'
					value={emailValue}
					handleChange={(event) => {
						setEmail(event.target.value);
					}}
				></Input>
				<Input
					placeholder='Enter password'
					label='Password'
					value={pswValue}
					handleChange={(event) => {
						setPsw(event.target.value);
					}}
				></Input>
				<Button buttonText='Login' classValue='custom-btn submit'></Button>
				<p>
					If you don't have an account you can{' '}
					<Link className='register-btn' to='/registration'>
						Registration
					</Link>
				</p>
			</form>
		</div>
	);
}
