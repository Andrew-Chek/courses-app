import './CreateCourse.css';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import Authors from '../Authors/Authors';
import '../../common/Input/Input';
import { mockedAuthorsList, mockedCoursesList } from '../../mockData/mockData';
import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getDuration } from '../../helpers/durationPipe';

function CreateCourse({ classValues, setClassesHandler }) {
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const [titleValue, setTitle] = useState('');
	const [descriptionValue, setDescription] = useState('');
	const [durationValue, setDuration] = useState(null);

	function checkAllFields() {
		return titleValue !== '' &&
			descriptionValue !== '' &&
			durationValue !== '' &&
			getChosenAuthors().length !== 0
			? true
			: false;
	}

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

	const createCourseHandler = () => {
		if (checkAllFields()) {
			const course = {
				id: uuidv4(),
				title: titleValue,
				description: descriptionValue,
				creationDate: new Date(),
				duration: durationValue,
				authors: getChosenAuthors(),
			};
			mockedCoursesList.push(course);
			setAuthors([...authors, authors.map((author) => (author.added = false))]);
			setTitle('');
			setDescription('');
			setDuration('');
			setName('');
			setClassesHandler('create-wrapper');
		} else {
			alert('Please, fill all fields');
		}
	};

	const getChosenAuthors = () => {
		return authors.filter((author) => {
			return author.added;
		});
	};

	const [authorName, setName] = useState('');
	const addNewAuthor = () => {
		const author = { id: uuidv4(), name: authorName, added: false };
		mockedAuthorsList.push(author);
		setAuthors([...mockedAuthorsList]);
	};

	return (
		<div className={classValues}>
			<section className='create-header'>
				<Input
					placeholder='Enter title'
					handleChange={(event) => {
						setTitle(event.target.value);
					}}
					value={titleValue}
					label='Title'
				></Input>
				<div className='btn-div'>
					<Button
						classValue='custom-btn'
						click={createCourseHandler}
						buttonText='Create course'
					></Button>
				</div>
			</section>
			<section className='input-wrapper'>
				<label htmlFor='description' className='input-label'>
					Description
				</label>
				<textarea
					onChange={(event) => {
						setDescription(event.target.value);
					}}
					value={descriptionValue}
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
						value={authorName}
						placeholder='Enter author name...'
						className='author-input'
						label='Author name'
					></Input>
					<div className='button-wrapper'>
						<Button
							buttonText='Create author'
							click={addNewAuthor}
							classValue='custom-btn'
						></Button>
					</div>
					<h3 className='author-name'>Duration</h3>
					<Input
						handleChange={(event) => {
							setDuration(event.target.value);
						}}
						placeholder='Enter duration in minutes...'
						value={durationValue}
						className='author-input'
						label='Duration'
					></Input>
					<p className='duration'>
						Duration:
						<span className='duration-value'>
							{' ' + getDuration(durationValue) + ' '}
						</span>
						hours
					</p>
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
