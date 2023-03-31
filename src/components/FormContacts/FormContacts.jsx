import PropTypes from 'prop-types';
import { FormAddContact } from './FormContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const FormContacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const submitHandler = e => {
    e.preventDefault();

    const form = e.target;

    const contact = {
      name: e.target.name.value,
      phone: e.target.number.value,
    };

    const checkAddContact = contacts
      .map(cont => cont.name)
      .includes(e.target.name.value);
    if (checkAddContact) {
      alert(`${e.target.name.value} is already in contacts`);
    } else {
      dispatch(addContact(contact));
      form.reset();
    }
  };

  return (
    <>
      <FormAddContact onSubmit={submitHandler}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></input>
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></input>
        </label>
        <button>Add contact</button>
      </FormAddContact>
    </>
  );
};

FormContacts.propTypes = {
  submitHandler: PropTypes.func,
};
