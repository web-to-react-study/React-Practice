import React from 'react';
import styled from 'styled-components'; 
import logo from './logo.svg';
import webtoonData from './webtoonData';
import dailyWebtoonData from './dailyWebtoonData';
import RecommendedWebtoonCard from './RecommendedWebtoonCard';
import WebtoonCard from './WebtoonCard';
import WebtoonListView from './WebtoonListView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>추천 웹툰 목록</h1>
          <div className="webtoon-list">
            <WebtoonList>
              {webtoonData.map((webtoon) => (
                <WebtoonCard
                  key={webtoon.id}
                  imageUrl={webtoon.imageUrl}
                  title={webtoon.title}
                  author={webtoon.author}
                  latestEpisode={webtoon.latestEpisode}
                  rating={webtoon.rating}
                  type = 'recommend'
                />
              ))}
            </WebtoonList>
          </div>
          <div>
            <WebtoonListView dailyWebtoonData={dailyWebtoonData} />
          </div>
          
      </header>
    </div>
  );
}


export default App;

const WebtoonList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: flex-start;
    padding: 16px;
`;
