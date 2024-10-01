import React from 'react';
import './App.css';

function RecommendedWebtoonCard({ imageUrl, title, author, latestEpisode, rating }) {
    return (
        <div className="recommended-webtoon-card">
            <img src={imageUrl} alt={title} className="webtoon-image" />
            <h2>{title}</h2>
            <p>{author}</p>
            <p>{latestEpisode}</p>
            <p>{rating}</p>
        </div>
    );
}

export default RecommendedWebtoonCard;