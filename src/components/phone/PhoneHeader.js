import React from 'react';
import avatar from '../../assets/img/avatar.jpg';
import styles from '../../assets/styles/components/header.module.scss';

const PhoneHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}></div>
      
      <div className={styles.infoBox}>
        <div className={styles.info}>

          {/* chevron */}
          <div className={styles.chevron}>
            <span className={styles.left}></span>
          </div>
  
            {/* avatar */}
            <div>
              <img src={avatar} alt="Samuel's Avatar" />
            </div>
  
            {/* heading */}
            <div className={styles.heading}>
              <p>Samuel Green</p>
              <p className={styles.availability}>Available to Walk</p>
            </div>
  
        </div>
  
          <div>
            &#10247;
          </div>

      </div>
    </div>
  );
};

export default PhoneHeader;
