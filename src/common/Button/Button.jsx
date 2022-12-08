import './Button.css';

function Button(props) {
	return (
		<button className={props.classValue} onClick={props.click}>
			{props.buttonText}
		</button>
	);
}

export default Button;
