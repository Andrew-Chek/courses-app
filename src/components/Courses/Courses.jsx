import './Courses.css';
import CourseCard from './components/CourseCard/CourseCard';
import { mockedAuthorsList } from '../../mockData/mockData';

const getAuthors = (course, authors) => {
	let filteredAuthors = [];
	course.authors.forEach((authorId) => {
		authors.forEach((author) => {
			if (authorId === author.id) {
				filteredAuthors.push(author);
			}
		});
	});
	console.log(filteredAuthors);
	return filteredAuthors;
};

function Courses(props) {
	return props.courses.map((course) => (
		<CourseCard
			key={course.id}
			course={course}
			authors={getAuthors(course, mockedAuthorsList)}
		></CourseCard>
	));
}

export default Courses;
