import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { selectError, selectLoading, selectFilteredContacts } from '../../redux/contactsSlice';


const ContactList = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.contactList}>
        {filteredContacts.map(contact => {
          return (
            <Contact key={contact.id}
              contact={contact}
            />
          );
        })}
      </ul>
      {isLoading && <h2>Contacts are loading...</h2>}
      {error && toast.error('Sorry, something went wrong! Try again later!')}
    </div>
  );
};

export default ContactList;
