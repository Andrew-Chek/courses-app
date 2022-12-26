import './CoursePage.css';
import Button from '../../../../common/Button/Button';
import { getDuration } from '../../../../helpers/durationPipe';
import { useNavigate, useParams } from 'react-router-dom';
import { getAuthors } from '../../Courses';
import { useSelector } from 'react-redux';

export default function CoursePage() {
	const param = useParams();
	const courses = useSelector((state) => state.courses);
	const stateAuthors = useSelector((state) => state.authors);
	const course = courses.find((course) => course.id === param.courseId);
	const authors = getAuthors(course, stateAuthors);
	const date = new Date(course.creationDate);
	const navigate = useNavigate();
	return (
		<article className='course-page'>
			<Button
				buttonText='< Back to courses'
				click={() => {
					navigate('/courses');
				}}
				classValue='back-btn'
			/>
			<h3 className='course-title'>{course.title}</h3>
			<article className='course-main'>
				<section className='course-info'>
					<p className='course-description'>{course.description}</p>
				</section>
				<section className='course-aside'>
					<p className='course-pgh'>
						ID:
						<span className='course-span'>{' ' + course.id}</span>
					</p>
					<p className='course-pgh'>
						Duration:
						<span className='course-span'>
							{' ' + getDuration(course.duration) + ' hours'}
						</span>
					</p>
					<p className='course-pgh'>
						Created:
						<span className='course-span'> {date.toLocaleDateString()}</span>
					</p>
					<p className='course-pgh'>
						Authors:{' '}
						{authors.map((author) => {
							return (
								<span key={author.id} className='course-author'>
									{author.name}
								</span>
							);
						})}
					</p>
				</section>
			</article>
		</article>
	);
}
