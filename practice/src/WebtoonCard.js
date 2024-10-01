import React from 'react';
import './App.css';

function WebtoonCard({ imageUrl, title, author, rating }) {
    return (
        <div className="webtoon-card">
            <img src={imageUrl} alt={title} className="webtoon-image" />
            <h3>{title}</h3>
            <p>{author}</p>
            <p>{rating}</p>
        </div>
    );
}

export default WebtoonCard;