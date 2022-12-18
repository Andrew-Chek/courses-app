import './Button.css';

function Button(props) {
	return (
		<button
			className={props.classValue}
			type={props.classValue.includes('submit') ? 'submit' : 'button'}
			onClick={props.click}
		>
			{props.buttonText}
		</button>
	);
}

export default Button;
