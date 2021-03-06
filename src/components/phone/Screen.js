import React from 'react';
import PhoneHeader from './PhoneHeader';
import ChatBubble from './ChatBubble';
import Pricing from './Pricing';
import TextBar from './TextBar';
import dog1 from '../../assets/img/dog1.jpg';
import dog2 from '../../assets/img/dog2.jpg';
import dog3 from '../../assets/img/dog3.jpg';
import styles from '../../assets/styles/components/screen.module.scss';

const Screen = () => {

  const conversation = [
    {
      sender: "walker",
      content: "That sounds great. I'd be happy to discuss more.",
      images: []
    },
    {
      sender: "walker",
      content: "Could you send over some pictures of your dog, please?",
      images: []
    },
    { // DOG PICS HERE
      sender: "",
      content: "",
      images: [dog1, dog2, dog3]
    },
    {
      sender: "customer",
      content: "Here are a few pictures. She's a happy girl!",
      images: []
    },
    {
      sender: "customer",
      content: "Can you make it?",
      images: []
    },
    {
      sender: "walker",
      content: "She looks so happy! The time we discussed works. How long shall I take her out for?",
      images: []
    },
  ];

  const renderChat = () => {
    return conversation.map(text => <ChatBubble  sender={text.sender} content={text.content} images={text.images} />)
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <PhoneHeader />
      </div>

      <div className={styles.chat}>
        {renderChat()}
      </div>

      <div className={styles.pricing}>
        <Pricing duration={'30 minute walk'} cost={'$29'} />
        <Pricing duration={'1 hour walk'} cost={'$49'}/>
      </div>

      <div>
        <TextBar />
      </div>

    </div>
  );
};

export default Screen;
