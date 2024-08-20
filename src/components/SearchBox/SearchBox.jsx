import React from 'react';
import styles from './SearchBox.module.css'; // Імпорт стилів

export default function SearchBox({ filter, onChange }) {
  return (
    <div className={styles.searchBox}>
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Find contacts by name..."
      />
    </div>
  );
}
