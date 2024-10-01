import React from 'react';
import './App.css';
import logo from './logo.svg';
import webtoonData from './webtoonData';
import dailyWebtoonData from './dailyWebtoonData';
import RecommendedWebtoonCard from './RecommendedWebtoonCard';
import WebtoonCard from './WebtoonCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>추천 웹툰 목록</h1>
          <div className="webtoon-list">
            {webtoonData.map((webtoon) => (
              <RecommendedWebtoonCard
                key={webtoon.id}
                imageUrl={webtoon.imageUrl}
                title={webtoon.title}
                author={webtoon.author}
                latestEpisode={webtoon.latestEpisode}
                rating={webtoon.rating}
              />
            ))}
          </div>
          <h1>수요일 웹툰</h1>
          <div className="daily-webtoon-list">
            {dailyWebtoonData.map((webtoon) => (
              <WebtoonCard
                key={webtoon.id}
                imageUrl={webtoon.imageUrl}
                title={webtoon.title}
                author={webtoon.author}
                rating={webtoon.rating}
              />
            ))}
          </div>
      </header>
    </div>
  );
}


export default App;
