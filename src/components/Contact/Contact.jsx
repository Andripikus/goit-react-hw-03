import React from 'react';
import styles from './ContactItem.module.css'; // Імпорт стилів

export default function ContactItem({ contact, onDelete }) {
  return (
    <li className={styles.contactItem}>
      <span>{contact.name}: {contact.number}</span>
      <button className={styles.button} onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
}
