import React from 'react';
import Phone from './components/phone/Phone';
import Info from './components/Info';
import styles from './assets/styles/app.module.scss';

const App = () => {
  return (
    <>
      <div className={styles.darkPill}></div>
      <div className={styles.lightPill}></div>
        <Phone />
        <Info />
    </>
  );
};

export default App;
