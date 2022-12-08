import './CreateCourse.css';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import Authors from '../Authors/Authors';
import '../../common/Input/Input';
import { mockedAuthorsList } from '../../mockData/mockData';
import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

function CreateCourse() {
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const addAuthorHandler = useCallback(
		(authorId) => {
			setAuthors(
				authors.map((author) =>
					author.id === authorId ? { ...author, added: !author.added } : author
				)
			);
		},
		[authors]
	);

	const [authorName, setName] = useState('');
	const addNewAuthor = () => {
		const author = { id: uuidv4(), name: authorName, added: false };
		mockedAuthorsList.push(author);
		setAuthors([...authors, authors.push(author)]);
	};

	return (
		<div className='create-wrapper'>
			<section className='create-header'>
				<Input placeholder='Enter title' label='Title'></Input>
				<div className='btn-div'>
					<Button classValue='custom-btn' buttonText='Create course'></Button>
				</div>
			</section>
			<section className='input-wrapper'>
				<label htmlFor='description' className='input-label'>
					Description
				</label>
				<textarea
					className='input-elem desc'
					id='description'
					cols='30'
					rows='10'
				></textarea>
			</section>
			<section className='additional'>
				<article className='fields'>
					<h3 className='author-name'>Add author</h3>
					<Input
						handleChange={(event) => {
							setName(event.target.value);
						}}
						placeholder='Enter author name...'
						className='author-input'
						label='Author name'
					></Input>
					<div className='button-wrapper'>
						<Button
							buttonText='Create author'
							click={() => {
								addNewAuthor();
							}}
							classValue='custom-btn'
						></Button>
					</div>
				</article>
				<article className='authors'>
					<section>
						<h3 className='authors-title'>Authors</h3>
						<Authors authors={authors} click={addAuthorHandler}></Authors>
						<h3 className='authors-title'>Authors list</h3>
						<Authors
							added={true}
							authors={authors}
							click={addAuthorHandler}
						></Authors>
					</section>
				</article>
			</section>
		</div>
	);
}

export default CreateCourse;
