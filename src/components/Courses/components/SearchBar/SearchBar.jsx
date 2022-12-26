import Button from '../../../../common/Button/Button';
import './SearchBar.css';
import Input from '../../../../common/Input/Input';

function SearchBar({ handleChange, click, inputValue }) {
	return (
		<article className='searchbar'>
			<Input
				placeholder='Enter course name...'
				handleChange={handleChange}
				value={inputValue}
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
