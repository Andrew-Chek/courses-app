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
	return (
		<div>
			<Header></Header>
			<main className='main'>
				<CreateCourse></CreateCourse>
				<article className='tools-menu'>
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
						></Button>
					</section>
				</article>
				<Courses courses={courses} authors={mockedAuthorsList}></Courses>
			</main>
		</div>
	);
}

export default App;
