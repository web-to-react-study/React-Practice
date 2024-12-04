import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex; 
  flex-direction: column; 
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

function Webtoon(props) {
    /* 컴포넌트 구현 */
    return (
        <div style={{ textAlign: 'center' }}>
            <img src={props.image} alt={props.title} style={{ width: '100%', height: 'auto' }} />
            <h4 style={{ margin: '5px 0' }}>{props.title}</h4>
            <p style={{ margin: '3px 0', fontSize: '14px' }}>{props.author}</p>
            <p style={{ margin: '3px 0', fontSize: '14px', fontWeight: 'bold' }}>{props.rating}</p>
            <h5>{props.ratingNumber}</h5>
            <h5>{props.update}</h5>
            <h5>{props.views}</h5>
        </div>
    );
}

const webtoonData = [
    /* 추천 웹툰 */ 
    { // 청춘러브썸
        isRecommend: true, 
        image: "https://image-comic.pstatic.net/webtoon/828920/thumbnail/titledescimage/frontImage_391fbfdc-070f-4373-be3a-3560ac5f55af.png",
        title: "청춘 러브썸",
        author: "홍덕 / NEMONE",
        episode: "8화",
        rating: "★9.98",
        update: 0,
        views: 0
    },
    { // 나만 보는 탑 공략집
        isRecommend: true, 
        image: "https://image-comic.pstatic.net/webtoon/823434/thumbnail/titledescimage/frontImage_47f5222e-2bd7-490e-b8e0-183e7b7fd0e1.png",
        title: "나만 보는 탑 공략집",
        author: "사도 / X-NAME / 쾌조",
        episode: "26화",
        rating: "★9.94",
        update: 0,
        views: 0
    },
    { // 그냥 선생님 
        isRecommend: true, 
        image: "https://image-comic.pstatic.net/webtoon/804333/thumbnail/titledescimage/frontImage_ecea4635-1755-41f0-8160-da8f615f93db.png",
        title: "그냥 선생님",
        author: "연일",
        episode: "182화",
        rating: "★9.98",
        update: 0,
        views: 0
    },

    /* 전체 화요 웹툰 */
    { // 김부장 
        isRecommend: false, 
        image: "https://image-comic.pstatic.net/webtoon/783053/thumbnail/thumbnail_IMAG21_d7732f14-26da-4e35-8762-660cc87b53f1.jpg",
        title: "김부장",
        author: "박민사, 남자의 이야기",
        episode: 0,
        rating: "★9.59",
        ratingNumber: 9.59,
        update: 0, 
        views: 6
    },
    { // 마루는 강쥐
        isRecommend: false, 
        image: "https://image-comic.pstatic.net/webtoon/796152/thumbnail/thumbnail_IMAG21_26b9c1d8-ca2d-4fc7-87ea-a3334634236a.jpg",
        title: "마루는 강쥐",
        author: "모죠",
        episode: 0,
        rating: "★9.98",
        ratingNumber: 9.98,
        update: 3,
        views: 7
    },
    {
        isRecommend: false, 
        image: "https://image-comic.pstatic.net/webtoon/821192/thumbnail/thumbnail_IMAG21_156483ac-3740-4cbf-8150-0f24595bae52.jpg",
        title: "좋아? 죽어!",
        author: "김용키, 박만사 / 죠",
        episode: 0,
        rating: "★9.48",
        ratingNumber: 9.48,
        update: 2,
        views: 9
    },
    {
        isRecommend: false, 
        image: "https://image-comic.pstatic.net/webtoon/784248/thumbnail/thumbnail_IMAG21_20a8aca7-23d3-4bc0-9916-a31ebc884ca8.jpg",
        title: "내가 키운 S급들",
        author: "seri / 비완 / 근서",
        episode: 0,
        rating: "★9.48",
        ratingNumber: 9.48, 
        update: 1,
        views: 10
    },
    {
        isRecommend: false, 
        image: "https://image-comic.pstatic.net/webtoon/833255/thumbnail/thumbnail_IMAG21_504f6152-8a60-42a0-a1c0-43cd77f9c430.jpg",
        title: "낢이 사는 이야기",
        author: "서나래",
        episode: 0,
        rating: "★9.95",
        ratingNumber: 9.95, 
        update: 4,
        views: 8
    }
];

function WebtoonPage() {
  const [sortOrder, setSortOrder] = useState("인기순");

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
    <div className="WebtoonPage">
    {/*추천 웹툰*/}
      <h3>추천 화요웹툰</h3>
      <div style={{ display: 'flex', marginBottom: '100px'}}>
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

      {/*전체 웹툰*/}
      <NonRecommendHeader style={{ display: 'inline-block', marginRight: '540px' }}>전체 화요웹툰</NonRecommendHeader>
      <FilterOption style={{ display: 'inline-block', marginLeft: '20px'}}>
        {['인기순', '업데이트순', '조회순'].map((option) => (
          <FilterOption
            key={option}
            isGreen={sortOrder === option}
            onClick={() => setSortOrder(option)}
          > {option}
          </FilterOption>
        ))}
      </FilterOption>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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

export default WebtoonPage; 