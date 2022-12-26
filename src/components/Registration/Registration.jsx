import './Registration.css';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { service } from '../../services';

export default function Registration() {
	const [nameValue, setName] = useState('');
	const [emailValue, setEmail] = useState('');
	const [pswValue, setPsw] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const newUser = {
			name: nameValue,
			password: pswValue,
			email: emailValue,
		};

		const response = await service.register(newUser);
		const result = response.json();
		result.then((res) => {
			console.log(res);
			res.successful === true ? navigate('/login') : alert(res.errors[0]);
		});
	};
	return (
		<div className='main-div'>
			<form className='registration' onSubmit={handleSubmit}>
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
					classValue='custom-btn submit'
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
