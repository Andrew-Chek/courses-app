import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header({ headerInfo, setVisible }) {
	const navigate = useNavigate();
	const onClickLogout = () => {
		window.localStorage.setItem('jwt-token', '');
		navigate('/login');
		setVisible({ visible: false, name: '' });
	};

	return (
		<header className='header'>
			<Logo className='header-logo'></Logo>
			<aside className={headerInfo.visible ? 'header-aside' : 'hidden'}>
				<h2 className='header-title'>{headerInfo.name}</h2>
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
