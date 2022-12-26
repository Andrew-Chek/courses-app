import './Authors.css';
import Button from '../../common/Button/Button';
import { useDispatch } from 'react-redux';
import { updateAuthor } from '../../store/authors/actionCreators';
import { useSelector } from 'react-redux';

function Authors({ added = false }) {
	const authors = useSelector((state) => state.authors);
	const hasItems = authors.some((author) => author.added === added);
	const dispatch = useDispatch();
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
								author.added = !author.added;
								dispatch(updateAuthor(author));
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
