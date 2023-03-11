import { useState } from 'react';

const Tours = ({ removeItem, id, image, date, title, info, location, cost, duration }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-card">
      <div className="img-container">
        <img src={image} alt="image" />
        <span className="like-btn">♥</span>
        <span className="name">{location}</span>
      </div>
      <div className="info">
        <div className="heading">
          <p>{date}</p>
          <p>{duration}</p>
          <p>${cost}</p>
        </div>
        <h3>{title}</h3>
        <p className="main-text">
          {!readMore ? `${info.substring(0, 180)}... ` : info}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className="btn delete-btn" onClick={() => removeItem(id)}>
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tours;
