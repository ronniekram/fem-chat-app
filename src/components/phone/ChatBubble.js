import React from 'react';
import Photos from './Photos';
import styles from '../../assets/styles/components/bubble.module.scss';

const ChatBubble = ({ sender, content, images }) => {

  const renderTextBubble = () => {
    if (sender === "walker") {
      return (
        <div className={styles.walker}>
          {content}
        </div>
      );
    } else if (sender === "" && content === "") {
      return <Photos images={images} />
    } else {
      return (
        <div className={styles.customer}>
          {content}
        </div>
      );
    };
  };

  return (
    <div className={styles.chat}>
      {renderTextBubble()}
    </div>
  );
};

export default ChatBubble;
