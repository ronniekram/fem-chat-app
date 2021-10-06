import React from 'react';
import styles from '../../assets/styles/components/pricing.module.scss';

const Pricing = ({ duration, cost }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <input type="radio" className={styles.radio} />
        <p className={styles.duration}>{duration}</p>
      </div>
      <p className={styles.cost}>{cost}</p>
    </div>
  );
};

export default Pricing;
