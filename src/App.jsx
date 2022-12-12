import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { mockedCoursesList, mockedAuthorsList } from './mockData/mockData';
import Button from './common/Button/Button';
import SearchBar from './components/Courses/components/SearchBar/SearchBar';
import CreateCourse from './components/CreateCourse/CreateCourse';

import { useMemo, useRef, useState } from 'react';

function App() {
	const [inputValue, setInput] = useState('');
	const [search, isClicked] = useState(false);
	const ref = useRef(mockedCoursesList);
	const courses = useMemo(() => {
		if (inputValue !== '' && search) {
			ref.current = mockedCoursesList.filter((course) => {
				return course.title.includes(inputValue);
			});
		} else if (inputValue !== '' && !search) {
			ref.current = mockedCoursesList;
		}
		return search
			? mockedCoursesList.filter((course) => {
					return course.title.includes(inputValue);
			  })
			: ref.current;
	}, [search, inputValue]);

	const [createClassValues, setClasses] = useState('create-wrapper');
	return (
		<div>
			<Header></Header>
			<main className='main'>
				<CreateCourse
					classValues={createClassValues}
					setClassesHandler={setClasses}
				></CreateCourse>
				<article
					className={
						createClassValues === 'create-wrapper' ? 'tools-menu' : 'hidden'
					}
				>
					<SearchBar
						className='searchbar'
						handleChange={(event) => {
							setInput(event.target.value);
							isClicked(false);
						}}
						courses={courses}
						click={() => {
							isClicked(true);
						}}
					></SearchBar>
					<section className='new-btn'>
						<Button
							buttonText='Add new course'
							classValue='custom-btn'
							click={() => {
								setClasses('opened-create-wrapper');
							}}
						></Button>
					</section>
				</article>
				<article
					className={
						createClassValues === 'create-wrapper'
							? 'courses-wrapper'
							: 'hidden'
					}
				>
					<Courses courses={courses} authors={mockedAuthorsList}></Courses>
				</article>
			</main>
		</div>
	);
}

export default App;
