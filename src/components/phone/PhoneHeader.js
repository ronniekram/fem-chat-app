import React from 'react';
import avatar from '../../assets/img/avatar.jpg';
import styles from '../../assets/styles/components/header.module.scss';

const PhoneHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chevron}>
        <span className={styles.left}></span>
        <div>
          Samuel Green
          Available to Walk
        </div>
      </div>
    </div>
  );
};

export default PhoneHeader;
