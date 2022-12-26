import SearchBar from '../SearchBar/SearchBar';
import Courses from '../../Courses';
import Button from '../../../../common/Button/Button';

import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function CoursesPage() {
	const [inputValue, setInput] = useState('');
	const [search, isClicked] = useState(false);
	const stateCourses = useSelector((state) => state.courses);
	const navigate = useNavigate();
	const courses = useMemo(() => {
		if (inputValue !== '' && search) {
			return stateCourses.filter((course) => {
				return course.title.includes(inputValue);
			});
		} else if (inputValue !== '' && !search) {
			return stateCourses;
		}
		return search
			? stateCourses.filter((course) => {
					return course.title.includes(inputValue);
			  })
			: stateCourses;
	}, [search, inputValue, stateCourses]);
	return (
		<main className='main'>
			<article className='tools-menu'>
				<SearchBar
					className='searchbar'
					click={() => {
						isClicked(true);
					}}
					handleChange={(event) => {
						setInput(event.target.value);
					}}
					inputValue={inputValue}
				></SearchBar>
				<section className='new-btn'>
					<Button
						buttonText='Add new course'
						click={() => {
							navigate('/courses/add');
						}}
						classValue='custom-btn'
					></Button>
				</section>
			</article>
			<article className='courses-wrapper'>
				<Courses courses={courses}></Courses>
			</article>
		</main>
	);
}
