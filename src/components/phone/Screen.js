import React from 'react';
import PhoneHeader from './PhoneHeader';
import ChatBubble from './ChatBubble';
import dog1 from '../../assets/img/dog1.jpg';
import dog2 from '../../assets/img/dog2.jpg';
import dog3 from '../../assets/img/dog3.jpg';
import styles from '../../assets/styles/components/screen.module.scss';

const Screen = () => {

  const conversation = [
    {
      sender: "",
      content: ""
    },
    {
      sender: "",
      content: ""
    },
    { // DOG PICS HERE
      images: [dog1, dog2, dog3]
    },
    {
      sender: "",
      content: ""
    },
    {
      sender: "",
      content: ""
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <PhoneHeader />
      </div>

      <div className={styles.chat}>
        
      </div>

    </div>
  );
};

export default Screen;
