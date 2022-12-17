import './Button.css';
import { Link } from 'react-router-dom';

function Button(props) {
	return (
		<button
			className={props.classValue}
			onSubmit={props.submit}
			onClick={props.click}
		>
			<Link className='btn-link' to={props.link}>
				{props.buttonText}
			</Link>
		</button>
	);
}

export default Button;
