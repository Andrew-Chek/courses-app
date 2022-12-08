import Button from '../../../../common/Button/Button';
import './SearchBar.css';
import Input from '../../../../common/Input/Input';

function SearchBar({ handleChange, click }) {
	return (
		<article className='searchbar'>
			<Input
				placeholder='Enter course name...'
				handleChange={handleChange}
				currentValue=''
			></Input>
			<Button
				buttonText='Search'
				click={click}
				classValue='custom-btn search-btn'
			></Button>
		</article>
	);
}

export default SearchBar;
