import './ImageList.css'
import React from "react";
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images.map( image => {
    return <ImageCard image={image} key={image.id} 
      // src={image.urls.regular}
      // alt={image.alt_description}
      />
  })
  return <div className='image-list'>{images}</div>
}

export default ImageList