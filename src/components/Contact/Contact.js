import { useDispatch } from 'react-redux';
import { TiUserDelete } from 'react-icons/ti';
import { deleteContact } from 'redux/contacts/operations';
import { StyledBtnDelete, StyledContact } from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <StyledContact>
        {contact.name} : {contact.number}
      </StyledContact>
      <StyledBtnDelete onClick={() => handleDelete(contact.id)}>
        <TiUserDelete></TiUserDelete>
      </StyledBtnDelete>
    </>
  );
};
