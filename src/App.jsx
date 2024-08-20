import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/SearchBox/SearchBox';
import initialContacts from '../src/components/data/contacts.json';
import './App.css';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container"> {/* Використовуємо стандартний клас для CSS */}
      <h1 className="header">Phonebook</h1> {/* Використовуємо стандартний клас для CSS */}
      <ContactForm onAddContact={addContact} />
      <SearchBox filter={filter} onChange={e => setFilter(e.target.value)} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}
