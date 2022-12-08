import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import './Header.css';

const onClickLogout = () => {
	console.log('Hello world');
};

function Header() {
	return (
		<header className='header'>
			<Logo className='header-logo'></Logo>
			<aside className='header-aside'>
				<h2 className='header-title'>Andrii Chekurda</h2>
				<Button
					className='header-button'
					buttonText='Logout'
					classValue='custom-btn'
					onClick={onClickLogout}
				></Button>
			</aside>
		</header>
	);
}

export default Header;
