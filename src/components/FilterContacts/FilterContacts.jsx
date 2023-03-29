import PropTypes from 'prop-types';
import { FilterInput } from './FilterContacts.styled';
import { filterContacts } from 'redux/slice'; 
import { useDispatch } from 'react-redux';

export const FilterContacts = () => {
  const dispatch = useDispatch();

  return (
    <>
      <FilterInput>
        Find contacts by name
        <input
          type="text"
          onChange={e => dispatch(filterContacts(e.target.value))}
        ></input>
      </FilterInput>
    </>
  );
};

FilterContacts.propTypes = {
  filterContacts: PropTypes.func,
};
