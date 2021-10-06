import React from 'react';
import styles from '../../assets/styles/components/pricing.module.scss';

const Pricing = ({ duration, cost }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          <input type="radio" className={styles.radio} />
        {/* <label className={styles.label}><span></span></label> */}
        </div>

        <p className={styles.duration}>{duration}</p>
      </div>
      <p className={styles.cost}>{cost}</p>
    </div>
  );
};

export default Pricing;