import React from 'react';
import Webtoon from './Webtoon'; 
import './App.css';
import webtoonData from './webtoonData';
import styled from 'styled-components';

const Card = styled.div`
  display: flex; 
  width: ${({ isRecommend }) => (isRecommend ? '226px' : '160px')}; 
  height: ${({ isRecommend }) => (isRecommend ? '181px' : '207px')}; 
  padding: 9px;
`;

const NonRecommendHeader = styled.h3`
  color:black;
  display: inline;
`; 

const FilterText = styled.h5`
  color: gray; 
  display: inline; 
  margin-left: 348px; 
`; 

const HighlightGreen = styled.span`
  color: rgb(73, 231, 73);
`;



function App() {
  // 추천 웹툰 필터
  const recommendWebtoons = webtoonData.filter(webtoon => webtoon.isRecommend);
  // 전체 웹툰 필터
  const nonRecommendWebtoons = webtoonData.filter(webtoon => !webtoon.isRecommend);

  return (
    <div className="App">
      {/* 추천 웹툰 */}
      <h3>추천 화요웹툰</h3>
      <div className="webtoonCard">
        {recommendWebtoons.map((webtoon, index) => (
          <Card key={webtoon.id} isRecommend>
            <Webtoon 
              image={webtoon.image}
              title={webtoon.title}
              author={webtoon.author}
              episode={webtoon.episode}
              rating={webtoon.rating}
            />
          </Card>
        ))}
      </div>
      <br/><br/><br/><br/><br/>
      
      {/* 전체 웹툰 */}
      <NonRecommendHeader>전체 화요웹툰</NonRecommendHeader>
      <FilterText>
        <HighlightGreen>인기순</HighlightGreen>• 인기 순 • 업데이트 순 • 조회 순
      </FilterText>
      <br/>

      <div className="webtoonCard">
        {nonRecommendWebtoons.map((webtoon, index) => (
          <Card key={webtoon.id} >
            <Webtoon 
              image={webtoon.image}
              title={webtoon.title}
              author={webtoon.author}
              rating={webtoon.rating}
            />
        </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
