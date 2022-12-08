import './Authors.css';
import Button from '../../common/Button/Button';

function Authors({ authors, click, added = false }) {
	const hasItems = authors.some((author) => author.added === added);
	return hasItems ? (
		authors.map((author) =>
			added === author.added ? (
				<div key={author.id} className='author'>
					<h4 className='author-title'>{author.name}</h4>
					<div className='button-wrapper'>
						<Button
							buttonText={added ? 'Delete author' : 'Add author'}
							classValue='custom-btn'
							click={() => {
								click(author.id);
							}}
						/>
					</div>
				</div>
			) : null
		)
	) : (
		<p className='authors-pgh'>Author list is empty</p>
	);
}

export default Authors;
