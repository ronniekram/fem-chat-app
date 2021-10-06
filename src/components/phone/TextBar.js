import React from 'react';
import styles from '../../assets/styles/components/textbar.module.scss';

const TextBar = () => {
  return (
    <form className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder="Type a message..."
        disabled
      />
      <button><span></span></button>
    </form>
  );
};

export default TextBar;
