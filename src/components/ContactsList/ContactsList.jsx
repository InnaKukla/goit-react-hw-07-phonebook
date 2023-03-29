import { PhoneContacts } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice';
import { visibleContacts } from 'redux/selectors';

import PropTypes from 'prop-types';

export const ContactsList = () => {
  const visibleContactsList = useSelector(visibleContacts);
  const dispatch = useDispatch();

  return (
    <PhoneContacts>
      {visibleContactsList.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </PhoneContacts>
  );
};
ContactsList.propTypes = {
  id: PropTypes.string,
  visibleContactsList: PropTypes.array,
  onDeleteHandler: PropTypes.func,
};
