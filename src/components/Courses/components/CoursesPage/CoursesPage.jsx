import SearchBar from '../SearchBar/SearchBar';
import Courses from '../../Courses';
import {
	mockedAuthorsList,
	mockedCoursesList,
} from '../../../../mockData/mockData';
import Button from '../../../../common/Button/Button';

import { useMemo, useRef, useState } from 'react';

export default function CoursesPage() {
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
		<main className='main'>
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
						link='/courses/add'
						classValue='custom-btn'
					></Button>
				</section>
			</article>
			<article className='courses-wrapper'>
				<Courses courses={courses} authors={mockedAuthorsList}></Courses>
			</article>
		</main>
	);
}
