import './Registration.css';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Registration() {
	const [nameValue, setName] = useState('');
	const [emailValue, setEmail] = useState('');
	const [pswValue, setPsw] = useState('');
	const navigate = useNavigate();
	return (
		<div className='main-div'>
			<form className='registration'>
				<h2 className='registration-title'>Registration</h2>
				<Input
					placeholder='Enter name'
					label='Name'
					value={nameValue}
					handleChange={(event) => {
						setName(event.target.value);
					}}
				></Input>
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
					buttonText='Registration'
					click={async () => {
						const newUser = {
							name: nameValue,
							password: pswValue,
							email: emailValue,
						};

						const response = await fetch('http://localhost:4000/register', {
							method: 'POST',
							body: JSON.stringify(newUser),
							headers: {
								'Content-Type': 'application/json',
							},
						});
						const result = response.json();
						result.then((res) => {
							console.log(res);
							res.successful === true
								? navigate('/login')
								: alert(res.errors[0]);
						});
					}}
					classValue='custom-btn'
				></Button>
				<p>
					If you have an account you can{' '}
					<Link className='login-btn' to='/login'>
						Login
					</Link>
				</p>
			</form>
		</div>
	);
}
