import './Input.css';

function Input(props) {
	return (
		<div className='input-wrapper'>
			<label className='input-label' htmlFor={props.placeholder}>
				{props.label}
			</label>
			<input
				id={props.placeholder}
				className='input-elem'
				onChange={props.handleChange}
				placeholder={props.placeholder}
			></input>
		</div>
	);
}

export default Input;
