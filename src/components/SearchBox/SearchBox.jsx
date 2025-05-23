import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';


const SearchBox = () => {

  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  }


  return (
    <span className={css.searchBoxWrapper}>
      <p className={css.formText}>Find contacts by name:</p>
      <input
        type="text"
        name="searchInput"
        onChange={handleFilterChange}
        className={css.formInput}
      ></input>
    </span>
  );
};

export default SearchBox;
