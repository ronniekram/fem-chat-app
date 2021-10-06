import React from 'react';
import PhoneHeader from './PhoneHeader';
import styles from '../../assets/styles/components/screen.module.scss';

const Screen = () => {
  return (
    <div className={styles.container}>
      <PhoneHeader />
    </div>
  );
};

export default Screen;
