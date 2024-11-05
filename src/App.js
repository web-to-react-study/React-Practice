import React, { useState } from 'react';
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
  color: black;
  display: inline;
`; 

const FilterText = styled.div`
  display: inline; 
  margin-left: 540px; 
  font-size: 13px;
`;

const FilterOption = styled.span`
  color: ${({isGreen}) => (isGreen ? 'rgb(73, 231, 73)' : 'gray')};
  cursor: pointer;
  margin-right: 10px;
`;

function App() {
  // 정렬 기준을 위한 상태 선언
  const [sortOrder, setSortOrder] = useState("인기순");

  // 정렬 함수
  const sortWebtoons = (webtoons) => {
    if (sortOrder === "인기순") {
      return [...webtoons].sort((a, b) => b.rating - a.rating);
    } else if (sortOrder === "업데이트순") {
      return [...webtoons].sort((a, b) => b.update - a.update);
    } else if (sortOrder === "조회순") {
      return [...webtoons].sort((a, b) => b.views - a.views); 
    } else if (sortOrder === "별점순") {
      return [...webtoons].sort((a, b) => b.ratingNumber - a.retingNumber); 
    }
    return webtoons;
  };

  // 추천 및 비추천 웹툰 필터링
  const recommendWebtoons = webtoonData.filter(webtoon => webtoon.isRecommend);
  const nonRecommendWebtoons = sortWebtoons(webtoonData.filter(webtoon => !webtoon.isRecommend));

  return (
    <div className="App">
      {/* 추천 웹툰 */}
      <h3>추천 화요웹툰</h3>
      <div className="webtoonCard">
        {recommendWebtoons.map((webtoon, index) => (
          <Card key={index} isRecommend>
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
        <FilterOption 
          isGreen={sortOrder === "인기순"} 
          onClick={() => setSortOrder("인기순")}
        > 인기순
        </FilterOption> 
        <FilterOption 
          isGreen={sortOrder === "업데이트순"} 
          onClick={() => setSortOrder("업데이트순")}
        > 업데이트순
        </FilterOption> 
        <FilterOption 
          isGreen={sortOrder === "조회순"} 
          onClick={() => setSortOrder("조회순")}
        > 조회순
        </FilterOption>
        <FilterOption
          isGreen={sortOrder === "별점순"}
          onClick={() => setSortOrder("별점순")}
        > 별점순 
        </FilterOption>
      </FilterText>
      <br/>

      <div className="webtoonCard">
        {nonRecommendWebtoons.map((webtoon, index) => (
          <Card key={index}>
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
