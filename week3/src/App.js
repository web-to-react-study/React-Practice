// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const WebtoonSection = styled.div`
  margin-bottom: 50px;
`;

const WebtoonList = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const WebtoonCardContainer = styled.div`
  width: ${(prop) => (prop.$type === 'rec' ? '300px' : '150px')};
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: left;
`;

const WebtoonImage = styled.img`
  width: ${(prop) => (prop.$type === 'rec' ? '100%' : '100%')};
  height: 150px;
  object-fit: cover;
`;

const WebtoonInfo = styled.div`
  padding: 10px;
`;

const WebtoonTitle = styled.h3`
  font-size: 16px;
  margin: 10px 0;
`;

const WebtoonAuthor = styled.p`
  font-size: 14px;
  color: #666;
`;

const RateStar = styled.img`
  width: 16px;
  height: 16px;
`;

const WebtoonRate = styled.span`
  font-size: 14px;
  color: #f39c12;
`;

const EpisodeInfo = styled.p`
  font-size: 14px;
  color: #666;
`;
const TabContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;
const TabButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  color: ${(props) => (props.active ? 'green' : 'black')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  cursor: pointer;
  &:hover {
    color: green;
  }
`;
const WebtoonCard = ({ title, author, rate, img, episode, type}) => {
  return (
    <WebtoonCardContainer $type={type}>
      <WebtoonImage src={img} alt={title} $type={type}/>
      <WebtoonInfo>
        <WebtoonTitle>{title}</WebtoonTitle>
        <WebtoonAuthor>{author}</WebtoonAuthor>
        <RateStar src="/star.png" alt="star" />
        <WebtoonRate>{rate}</WebtoonRate>
      </WebtoonInfo>
      {type=='rec' && <EpisodeInfo>{episode}</EpisodeInfo>}
    </WebtoonCardContainer>
  );
};

const Webtoonlist = ({ webtoons }) => {
  return (
    <WebtoonSection>
      <WebtoonList>
        {webtoons.map((webtoon) => (
          <WebtoonCard
            key={webtoon.id}
            title={webtoon.title}
            author={webtoon.author}
            rate={webtoon.rate}
            img={webtoon.img}
            episode={webtoon.episode}
            type={webtoon.type}
          />
        ))}
      </WebtoonList>
    </WebtoonSection>
  );
};

function App() {
  const [userChoice, setUserChoice] = useState('인기순');
  const recommendedWebtoons = [
    { title: '두호의 모험', author: '이두호', rate: '10.00', img: 'img1.jpg', episode: '1화-완결', type: 'rec', id:'0'},
    { title: '이두호!', author: '이두호', rate: '10.00', img: 'img2.jpg', episode: '1화-완결', type: 'rec', id:'1'},
    { title: '두호주의', author: '이두호', rate: '10.00', img: 'img3.jpg', episode: '1화-완결', type: 'rec', id:'2'},
  ];

  const allWebtoons = {
    인기순: [
      { title: '귀여운두호', author: '이두호', rate: '10.00', img: 'img4.jpg', episode: '1화-완결', type: 'com', id:'0' },
      { title: '도내sss급이두호', author: '이두호', rate: '10.00', img: 'img5.jpg', episode: '1화-완결', type: 'com', id:'1' },
      { title: '만렙두호', author: '이두호', rate: '10.00', img: 'img6.jpg', episode: '1화-완결', type: 'rec', type: 'com', id:'2' },
    ],
    업데이트순: [
      { title: '인생망한이두호', author: '이두호', rate: '10.00', img: 'a1.jpg', episode: '1화-완결', type: 'com', id:'0' },
      { title: '무직백수이두호', author: '이두호', rate: '10.00', img: 'a2.jpg', episode: '1화-완결', type: 'com', id:'1' },
      { title: '쌉두호난', author: '이두호', rate: '10.00', img: 'a3.jpg', episode: '1화-완결', type: 'rec', type: 'com', id:'2' },
    ],
    최신순: [
      { title: '전지적이두호시점', author: '이두호', rate: '10.00', img: 'b1.jpg', episode: '1화-완결', type: 'com', id:'0' },
      { title: '화산두호', author: '이두호', rate: '10.00', img: 'b2.jpg', episode: '1화-완결', type: 'com', id:'1' },
      { title: '두호코믹스', author: '이두호', rate: '10.00', img: 'b3.jpg', episode: '1화-완결', type: 'rec', type: 'com', id:'2' },
    ],
  };
  const handleTabClick = (tab) => {
    setUserChoice(tab);
  };
  return (
    <AppContainer>
      <SectionTitle>{'추천 금요웹툰'}</SectionTitle>
      <Webtoonlist webtoons={recommendedWebtoons} />
      <SectionTitle>{'전체 금요웹툰'}</SectionTitle>
      <TabContainer>
        {Object.keys(allWebtoons).map((tab) => (
          <TabButton key={tab} active={userChoice === tab} onClick={() => handleTabClick(tab)}>
            {tab}
          </TabButton>
        ))}
      </TabContainer>
      <Webtoonlist webtoons={allWebtoons[userChoice]} />
    </AppContainer>
  );
}

export default App;