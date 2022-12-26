import './App.css';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { Routes, Route } from 'react-router-dom';
import CoursesPage from './components/Courses/components/CoursesPage/CoursesPage';
import CoursePage from './components/Courses/components/CoursePage/CoursePage';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';

export default function App() {
	const user = useSelector((state) => state.user);
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route
					path='/'
					element={user.isAuth ? <CoursesPage /> : <Login />}
				></Route>
				<Route path='/courses' element={<CoursesPage />}></Route>
				<Route path='/courses/:courseId' element={<CoursePage />}></Route>
				<Route path='/courses/add' element={<CreateCourse />}></Route>
				<Route path='/registration' element={<Registration />}></Route>
				<Route path='/login' element={<Login />}></Route>
			</Routes>
		</div>
	);
}
