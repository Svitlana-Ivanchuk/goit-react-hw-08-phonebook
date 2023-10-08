import { useDispatch, useSelector } from 'react-redux';
import {
  StyledFilter,
  StyledInput,
  StyledTitle,
  StyledCounts,
} from './Filter.styled';
import { filterByName } from 'redux/contacts/filterSlice';
import { selectCount, selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterName = evt => {
    const value = evt.target.value;
    dispatch(filterByName(value));
  };
  const count = useSelector(selectCount);

  return (
    <StyledFilter>
      <StyledTitle>Find contacts by name</StyledTitle>

      <StyledInput type="text" value={filter} onChange={handleFilterName} />
      <StyledCounts>
        <StyledTitle>Total contacts: {count} </StyledTitle>
      </StyledCounts>
    </StyledFilter>
  );
};
