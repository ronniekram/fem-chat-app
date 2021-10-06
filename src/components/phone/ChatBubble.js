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
    } else {
      return (
        <div className={styles.customer}>
          {content}
        </div>
      );
    };
  };

  return (
    <>
    {renderTextBubble()}
    </>
  );
};

export default ChatBubble;
