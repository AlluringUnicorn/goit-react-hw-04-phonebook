import { useState, useEffect } from 'react';
import Form from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  const createUser = data => {
    const newUser = {
      ...data,
    };
    console.log(newUser);
    setContacts(prevstate => [...prevstate, newUser]);
  };

  const handleFilterChange = ({ target }) => {
    setFilter(target.value);
  };

  const checkUser = name => {
    for (let contact of contacts) {
      if (contact.name === name) {
        alert(`${name} is already in contacts`);
        return false;
      }
    }
  };

  const handleDelete = ({ target }) => {
    const updatedContacts = contacts.filter(
      contact => contact.id !== target.dataset.id
    );
    setContacts(updatedContacts);
    console.log(updatedContacts);
  };

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter));
  
    // Аналог ComponentDidUpdate
  // useEffect(() => {
  //  contacts && localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts.length]);

  // Аналог ComponentDidMount
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    console.log(savedContacts);
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  console.log(contacts);
  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <Form createUser={createUser} checkUser={checkUser}></Form>
      <h2>Contacts</h2>
      <Filter onChange={handleFilterChange} value={filter}></Filter>
      <ContactList
        contacts={filteredContacts}
        handleDelete={handleDelete}
      ></ContactList>
    </div>
  );
};

export default App;
