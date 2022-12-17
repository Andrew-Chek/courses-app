import './App.css';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { Routes, Route } from 'react-router-dom';
import CoursesPage from './components/Courses/components/CoursesPage/CoursesPage';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { useState } from 'react';

export default function App() {
	const [{ visible, name }, setVisible] = useState({
		visible: localStorage.getItem('jwt-token') !== '',
		name: '',
	});
	return (
		<div>
			<Header headerInfo={{ visible, name }} setVisible={setVisible}></Header>
			<Routes>
				<Route path='/' element={visible ? <CoursesPage /> : <Login />}></Route>
				<Route path='/courses' element={<CoursesPage />}></Route>
				<Route path='/courses/add' element={<CreateCourse />}></Route>
				<Route path='/registration' element={<Registration />}></Route>
				<Route
					path='/login'
					element={<Login setVisible={setVisible} />}
				></Route>
			</Routes>
		</div>
	);
}
