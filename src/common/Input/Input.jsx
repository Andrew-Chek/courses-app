import './Input.css';

function Input({ label, placeholder, handleChange, value = '' }) {
	return (
		<div className='input-wrapper'>
			<label className='input-label' htmlFor={placeholder}>
				{label}
			</label>
			<input
				id={placeholder}
				className='input-elem'
				onChange={handleChange}
				placeholder={placeholder}
				value={value === null ? '' : value}
			></input>
		</div>
	);
}

export default Input;
