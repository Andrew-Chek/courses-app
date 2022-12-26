import './CreateCourse.css';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import Authors from '../Authors/Authors';
import '../../common/Input/Input';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getDuration } from '../../helpers/durationPipe';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { saveCourse } from '../../store/courses/actionCreators';
import { saveAuthor } from '../../store/authors/actionCreators';
import { getAuthors } from '../../store/authors/actionCreators';

function CreateCourse() {
	const stateAuthors = useSelector((state) => state.authors);
	const [titleValue, setTitle] = useState('');
	const [descriptionValue, setDescription] = useState('');
	const [durationValue, setDuration] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	function checkAllFields() {
		return titleValue !== '' &&
			descriptionValue !== '' &&
			durationValue !== '' &&
			getChosenAuthorIds().length !== 0
			? true
			: false;
	}

	const createCourseHandler = () => {
		if (checkAllFields()) {
			const course = {
				id: uuidv4(),
				title: titleValue,
				description: descriptionValue,
				creationDate: new Date(),
				duration: durationValue,
				authors: getChosenAuthorIds(),
			};
			dispatch(saveCourse(course));
			navigate('/courses');
			dispatch(
				getAuthors(
					stateAuthors.map((author) => {
						author.added = false;
						return author;
					})
				)
			);
			setTitle('');
			setDescription('');
			setDuration('');
			setName('');
		} else {
			alert('Please, fill all fields');
		}
	};

	const getChosenAuthorIds = () => {
		const filteredAuthors = stateAuthors.filter((author) => {
			return author.added;
		});
		const ids = [];
		filteredAuthors.forEach((author) => {
			ids.push(author.id);
		});
		return ids;
	};

	const [authorName, setName] = useState('');
	const addNewAuthor = () => {
		const author = { id: uuidv4(), name: authorName, added: false };
		dispatch(saveAuthor(author));
	};

	return (
		<div className='create-wrapper'>
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
						<Authors></Authors>
						<h3 className='authors-title'>Authors list</h3>
						<Authors added={true}></Authors>
					</section>
				</article>
			</section>
		</div>
	);
}

export default CreateCourse;
