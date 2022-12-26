import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from '../../store/user/actionCreators';

function Header() {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const onClickLogout = () => {
		window.localStorage.setItem('jwt-token', '');
		dispatch(userLogOut());
		navigate('/login');
	};

	return (
		<header className='header'>
			<Logo className='header-logo'></Logo>
			<aside className={user.isAuth ? 'header-aside' : 'hidden'}>
				<h2 className='header-title'>{user.name}</h2>
				<Button
					className='header-button'
					buttonText='Logout'
					classValue='custom-btn'
					click={onClickLogout}
				></Button>
			</aside>
		</header>
	);
}

export default Header;
