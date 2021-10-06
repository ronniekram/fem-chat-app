import React from 'react';
import styles from '../../assets/styles/components/photos.module.scss';

const Photos = ({ images }) => {

  const renderImages = () => {
    return images.map(image => {
      return (
        <img src={image} alt="Cute and happy little dog." />
      );
    });
  };


  return (
    <div className={styles.container}>
      {renderImages()}
    </div>
  );
};

export default Photos;
