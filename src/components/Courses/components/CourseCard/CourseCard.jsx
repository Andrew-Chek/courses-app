import './CourseCard.css';
import Button from '../../../../common/Button/Button';
import { getDuration } from '../../../../helpers/durationPipe';
import { useNavigate } from 'react-router-dom';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteCourse } from '../../../../store/courses/actionCreators';

function CourseCard(props) {
	const names = props.authors.map(function (author) {
		return author['name'];
	});
	const date = new Date(props.course.creationDate);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	return (
		<article className='course-card'>
			<section className='course-info'>
				<h3 className='course-title'>{props.course.title}</h3>
				<p className='course-description'>{props.course.description}</p>
			</section>
			<section className='course-additional'>
				<p className='course-pgh'>
					Authors:
					<span className='course-span'> {names.join(', ')}</span>
				</p>
				<p className='course-pgh'>
					Duration:
					<span className='course-span'>
						{' ' + getDuration(props.course.duration) + ' hours'}
					</span>
				</p>
				<p className='course-pgh'>
					Created:
					<span className='course-span'> {date.toLocaleDateString()}</span>
				</p>
				<section className='buttons'>
					<Button
						buttonText='Show course'
						classValue='custom-btn'
						click={() => {
							navigate(`/courses/${props.course.id}`);
						}}
					></Button>
					<Button
						buttonText={<AiFillEdit></AiFillEdit>}
						classValue='custom-btn icon'
					></Button>
					<Button
						buttonText={<AiFillDelete></AiFillDelete>}
						classValue='custom-btn icon'
						click={() => {
							dispatch(deleteCourse(props.course.id));
						}}
					></Button>
				</section>
			</section>
		</article>
	);
}

export default CourseCard;
