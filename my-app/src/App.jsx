import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Day = {
  0: "일",
  1: "월",
  2: "화",
  3: "수",
  4: "목",
  5: "금",
  6: "토"
}
const today = new Date;
const day = today.getDay();

const RECOMMEND_WEBTOON = [
  {
    isRecommend: true,
    title: "달로 만든 아이",
    author: "온윤",
    chapter: "107화",
    rate: "9.98",
    thumbnail: "https://image-comic.pstatic.net/webtoon/784107/thumbnail/titledescimage/frontImage_3672d0d4-1a40-4241-bc99-a462ea87afcd.png"
  },
  {
    isRecommend: true,
    title: "오늘의 일기예보",
    author: "지휘",
    chapter: "50화 : 판도라의 상자",
    rate: "9.65",
    thumbnail: "https://image-comic.pstatic.net/webtoon/817987/thumbnail/titledescimage/frontImage_ae1f112c-2e67-4dc8-9b44-96673e7c78b9.png"
  },
  {
    isRecommend: true,
    title: "더블클릭",
    author: "박수봉, 김장훈/박수봉",
    chapter: "165화",
    rate: "9.91",
    thumbnail: "https://image-comic.pstatic.net/webtoon/769663/thumbnail/titledescimage/frontImage_75eadd67-aabd-40bc-be5b-7b2ba52b7c66.png"
  }
]

const WEBTOON = [
  {
    isRecommend: false,
    title: "참교육",
    author: "채용택/한가람",
    rate: "9.88",
    thumbnail: "https://image-comic.pstatic.net/webtoon/758037/thumbnail/thumbnail_IMAG21_15cb2611-34c0-4f02-a689-41d0b1016579.jpg"
  },
  {
    isRecommend: false,
    title: "똑 닮은 딸",
    author: "이담",
    rate: "9.98",
    thumbnail: "https://image-comic.pstatic.net/webtoon/774866/thumbnail/thumbnail_IMAG21_b03cd4bd-bc74-4469-a501-20896bcc887f.jpg"
  },
  {
    isRecommend: false,
    title: "신의 탑",
    author: "SIU",
    rate: "9.85",
    thumbnail: "https://image-comic.pstatic.net/webtoon/183559/thumbnail/thumbnail_IMAG21_5f3fec31-5c95-4afe-a73f-3046288edb47.jpg"
  },
  {
    isRecommend: false,
    title: "윈드브레이커",
    author: "조용석",
    rate: "9.84",
    thumbnail: "https://image-comic.pstatic.net/webtoon/602910/thumbnail/thumbnail_IMAG21_e861f2cf-6157-4d33-8e02-7b4cbf0a8baf.jpg"
  },
  {
    isRecommend: false,
    title: "환생천마",
    author: "JP/부겸/장영훈",
    rate: "9.94",
    thumbnail: "https://image-comic.pstatic.net/webtoon/822657/thumbnail/thumbnail_IMAG21_99e49512-e05d-48c3-846d-d898f78523df.jpg"
  }
]

const Thumbnail = styled.img`
  width: ${(prop) => (prop.$isRecommend === true ? '300px' : '172px')};
  background-color: 'dimgrey';
`

function WebtoonCard({isRecommend, title, author, chapter, rate, thumbnail}){
  return (
    <div style={{display: 'inline-block', margin: '10px'}}>
      <div style={{backgroundColor: '#e6e6fa'}}>
        <Thumbnail $isRecommend={isRecommend} src={thumbnail} alt="이미지 없음"/>
      </div>
      <div className='webtoon_title'>{title}</div>
      <div className='webtoon_author'>{author}</div>
      <div className='webtoon_chapter'>{isRecommend && chapter}</div>
      <div className='webtoon_rate'>⭐{rate}</div>
    </div>
  )
}

function App() {
  return (
    <div>
      <h2>추천 {Day[day]}요웹툰</h2>
	    <div>
        {RECOMMEND_WEBTOON.map(({isRecommend, title, author, chapter, rate, thumbnail}) => (
          <WebtoonCard isRecommend={isRecommend} title={title} author={author} chapter={chapter} rate={rate} thumbnail={thumbnail} />
        ))}
      </div> 

      <h2>전체 {Day[day]}요웹툰</h2>
      <div style={{display: 'flex'}}>
        {WEBTOON.map(({isRecommend, title, author, rate, thumbnail}) => (
          <WebtoonCard isRecommend={isRecommend} title={title} author={author} rate={rate} thumbnail={thumbnail} />
      ))}
      </div>
    </div>
  );
}

export default App;
