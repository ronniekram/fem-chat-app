import React from 'react';
import styles from '../../assets/styles/components/textbar.module.scss';

const TextBar = () => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder="Type a message..."
        disabled
      />
      <label className={styles.label}></label>
    </div>
  );
};

export default TextBar;
