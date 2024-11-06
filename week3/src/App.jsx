import styled from 'styled-components';
import { useState } from 'react';
import React from 'react';

const RECOMMEND_WEBTOON = [
  {
    title: '청춘 러브썸',
    author: '홍덕 / NEMONE',
    rate: 9.97,
    info: '8화',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/828920/thumbnail/titledescimage/frontImage_391fbfdc-070f-4373-be3a-3560ac5f55af.png',
  },
  {
    title: '나만 보는 탑 공략집',
    author: '사도 / X-NAME / 쾌조',
    rate: 9.93,
    info: '26화',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/823434/thumbnail/titledescimage/frontImage_47f5222e-2bd7-490e-b8e0-183e7b7fd0e1.png',
  },
  {
    title: '그냥 선생님',
    author: '연일',
    rate: 9.98,
    info: '182화',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/804333/thumbnail/titledescimage/frontImage_ecea4635-1755-41f0-8160-da8f615f93db.png',
  },
  {
    title: '김부장',
    author: '박만사, 남자의 이야기 / 정...',
    rate: 9.59,
    info: '8화',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/783053/thumbnail/thumbnail_IMAG21_d7732f14-26da-4e35-8762-660cc87b53f1.jpg',
  },
  {
    title: '마루는 강쥐',
    author: '모죠',
    rate: 9.98,
    info: '26화',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/796152/thumbnail/thumbnail_IMAG21_26b9c1d8-ca2d-4fc7-87ea-a3334634236a.jpg',
  },
  {
    title: '좋아? 죽어!',
    author: '김용키, 박만사 / 죠',
    rate: 9.48,
    info: '182화',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/821192/thumbnail/thumbnail_IMAG21_156483ac-3740-4cbf-8150-0f24595bae52.jpg',
  },
  {
    title: '서울 자가에 대기업 ...',
    author: '홍덕 / NEMONE',
    rate: 9.95,
    info: '8화',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/819929/thumbnail/thumbnail_IMAG21_f1ca00e5-9b30-44d3-a1ee-7a04d539002a.jpg',
  },
  {
    title: '내가 키운 S급들',
    author: 'seri / 비완 / 근서',
    rate: 9.91,
    info: '26화',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/784248/thumbnail/thumbnail_IMAG21_20a8aca7-23d3-4bc0-9916-a31ebc884ca8.jpg',
  },  
];

const Image = styled.img`
  width: ${(props) => (props.isSimple ? '160px' : '226px')};
  height: ${(props) => (props.isSimple ? '207px' : '181px')};
`;

function App() {
  const [userChoice, setUserChoice] = useState('인기순');  // 사용자가 선택한 정렬 옵션

  // 정렬 함수: 사용자가 선택한 옵션에 따라 웹툰 목록을 정렬
  const sortWebtoons = (choice) => {
    switch (choice) {
      case '인기순': 
        return [...RECOMMEND_WEBTOON].sort((a, b) => b.rate - a.rate);  // 별점 높은 순으로 정렬
      case '업데이트순':
        return [...RECOMMEND_WEBTOON].sort((a, b) => parseInt(b.info) - parseInt(a.info)); // 화수 많은 순으로 정렬
      case '조회순':
        return [...RECOMMEND_WEBTOON]; // 조회수 기준 정렬 (가정)
      case '별점순':
        return [...RECOMMEND_WEBTOON].sort((a, b) => b.rate - a.rate);  // 별점 높은 순으로 정렬
      default:
        return RECOMMEND_WEBTOON;
    }
  };

  const sortedWebtoons = sortWebtoons(userChoice); 

  return (
    <>
      <h2>추천 화요웹툰</h2>
      <div style={{ display: 'flex' }}>
        {RECOMMEND_WEBTOON.slice(0, 3).map(({ title, author, rate, info, thumbnail }) => (
          <RecommendCard 
            key={title} 
            title={title} 
            author={author} 
            rate={rate}   
            info={info} 
            thumbnail={thumbnail} 
            isSimple={false}
            isUpdated={false}
          />
        ))}
      </div>
      
      <h2>전체 화요웹툰</h2>
      <YesStatePage setUserChoice={setUserChoice} userChoice={userChoice}/>
      
      <div style={{ display: 'flex' }}>
        {sortedWebtoons.slice(3).map(({ title, author, rate, info, thumbnail }) => (
          <RecommendCard 
            key={title} 
            title={title} 
            author={author} 
            rate={rate} 
            info={info} 
            thumbnail={thumbnail} 
            isSimple={true}
            isUpdated={true}
          />
        ))}
      </div>
    </>
  );
}




function RecommendCard({ title, author, rate, info, thumbnail, isSimple, isUpdated }) {
  return (
	  <div style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px'}}>
    <Image src={thumbnail} alt={title} style={{ width: isSimple ? '160px' : '226px', height: isSimple ? '207px' : '181px' }} />
    {isUpdated ? <p>up</p> : null} <h3>{title}</h3>
	    <p>{author}</p>
      {!isSimple ? <p>화수: {info}</p> : null}
	    <p>★{rate}</p>
    </div>
  );
}


const SortOption = styled.span`
  cursor: pointer;
  margin: 0 5px;
  color: ${(props) => (props.isActive ? '#32CD32' : '#666')};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};

  &:hover {
    color: #32CD32;
  }
`;

function YesStatePage({ setUserChoice, userChoice }) {

  const options = ['인기순', '업데이트순', '조회순', '별점순'];

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {options.map((option, index) => (
        <React.Fragment key={option}>
          <SortOption
            isActive={userChoice === option}
            onClick={() => setUserChoice(option)}
          >
            {option}
          </SortOption>
          {index < options.length - 1 && <span>·</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
export {YesStatePage};


