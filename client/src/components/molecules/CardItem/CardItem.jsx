import React from 'react';
import './CardItem.scss';
import calendarIcon from '../../../assets/icon-calendar.png'

function CardItem({ images, title, releaseYear, description }) {
  const imageUrl = images['Poster Art'].url;

  return (
    <div className='card-wrapper'>
      <img src={imageUrl} alt={title} />
      <div className='card-over'>
        <h4>{title}</h4>
        <div className='card-released'>
          <img src={calendarIcon}className='card-icon' alt='calendar icon'/>
          <span>{releaseYear}</span>
        </div>
        <p className='description'>{description}</p>
      </div>
    </div>
  );
}

export default CardItem;
