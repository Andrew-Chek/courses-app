import './Login.css';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login({ setVisible }) {
	const [emailValue, setEmail] = useState('');
	const [pswValue, setPsw] = useState('');
	const navigate = useNavigate();
	return (
		<div className='main-div'>
			<form className='login'>
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
				<Button
					buttonText='Login'
					click={async () => {
						const newUser = {
							password: pswValue,
							email: emailValue,
						};

						const response = await fetch('http://localhost:4000/login', {
							method: 'POST',
							body: JSON.stringify(newUser),
							headers: {
								'Content-Type': 'application/json',
							},
						});
						const result = response.json();
						result.then((res) => {
							console.log(res);
							if (res.successful === true) {
								window.localStorage.setItem('jwt-token', res.result);
								navigate('/courses');
								setVisible({ visible: true, name: res.user.name });
							} else alert(res.errors[0]);
						});
					}}
					classValue='custom-btn'
				></Button>
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
