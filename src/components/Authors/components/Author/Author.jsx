import './Author.css';
import Button from '../../../../common/Button/Button';

function Author({ author, click }) {
	return (
		<div className='author'>
			<h4 className='author-title'>{author.name}</h4>
			<div className='button-wrapper'>
				<Button buttonText='Add author' classValue='custom-btn' click={click} />
			</div>
		</div>
	);
}

export default Author;
