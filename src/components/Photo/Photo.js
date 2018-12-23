import React from 'react';
import classes from './Photo.css';

const photo = (props) => {
  let photoImgClasses = [];
  if (props.grid) {
    // When gird the image is cropped and centered.
    photoImgClasses = [classes.imagegrid]
  }
  return (
  <div className={classes.Photo} style={{height: props.height, width: props.width}}>
    <img src={props.src} className={photoImgClasses.join(' ')} alt="insta pic" />
  </div>
  );
};

export default photo;