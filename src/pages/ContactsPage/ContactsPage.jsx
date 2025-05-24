import React, { useEffect } from 'react';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import css from './ContactsPage.module.css'

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("FETCH CONTACTS THUNK FIRED");
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsPageWrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
