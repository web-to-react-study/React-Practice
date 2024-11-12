// src/App.js
import React from 'react';
import './App.css';

const WebtoonCard = ({ title, author, rate, img, episode }) => {
  return (
    <div className="webtoon-card">
      <img src={img} alt={title} className="webtoon-image" />
      <div className="webtoon-info">
        <h3>{title}</h3>
        <p>{author}</p>
        <img src="/star.png" alt="star" className="rate-star" />
        <span>{rate}</span>
      </div>
      {episode && <p>&nbsp;{episode}</p>}
    </div>
  );
};

const Webtoonlist = ({ webtoons }) => {
  return (
    <div className="webtoon-section">
      <div className="webtoon-list">
        {webtoons.map((webtoon, index) => (
          <WebtoonCard
            key={index}
            title={webtoon.title}
            author={webtoon.author}
            rate={webtoon.rate}
            img={webtoon.img}
            episode={webtoon.episode}
          />
        ))}
      </div>
    </div>
  );
};

function App() {
  const recommendedWebtoons = [
    { title: '두호의 모험', author: '이두호', rate: '10.00', img: 'img1.jpg', episode: '1화-완결' },
    { title: '이두호!', author: '이두호', rate: '10.00', img: 'img2.jpg', episode: '1화-완결' },
    { title: '두호주의', author: '이두호', rate: '10.00', img: 'img3.jpg', episode: '1화-완결' },
  ];

  const allWebtoons = [
    { title: '귀여운두호', author: '이두호', rate: '10.00', img: 'img4.jpg' },
    { title: '도내sss급이두호', author: '이두호', rate: '10.00', img: 'img5.jpg' },
    { title: '만렙두호', author: '이두호', rate: '10.00', img: 'img6.jpg' },
  ];

  return (
    <div className="App">
      <h2>{'추천 금요웹툰'}</h2>
      <Webtoonlist webtoons={recommendedWebtoons} />
      <h2>{'전체 금요웹툰'}</h2>
      <Webtoonlist webtoons={allWebtoons} />
    </div>
  );
}

export default App;