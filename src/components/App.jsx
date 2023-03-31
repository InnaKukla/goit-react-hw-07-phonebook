import { FormContacts } from './FormContacts';
import { FilterContacts } from './FilterContacts';
import { ContactsList } from './ContactsList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100%',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        color: '#010101',
        marginLeft: 20,
      }}
    >
      <h1>Phonebook</h1>
      <FormContacts />
      <h2>Contacts</h2>
      <FilterContacts />
      <ContactsList />
    </div>
  );
}
