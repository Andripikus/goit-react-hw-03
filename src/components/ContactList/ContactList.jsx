import React from 'react';
import ContactItem from './ContactItem';
import styles from './ContactList.module.css'; // Імпорт стилів

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
}
