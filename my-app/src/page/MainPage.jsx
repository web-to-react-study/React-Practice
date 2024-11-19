import styled from 'styled-components';
import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';

const Day = {
  0: "일",
  1: "월",
  2: "화",
  3: "수",
  4: "목",
  5: "금",
  6: "토"
}
const today = new Date();
const day = today.getDay();

const RECOMMEND_WEBTOON = [
  {
    id: 0,
    isRecommend: true,
    title: "달로 만든 아이",
    author: "온윤",
    chapter: "107화",
    rate: "9.98",
    thumbnail: "https://image-comic.pstatic.net/webtoon/784107/thumbnail/titledescimage/frontImage_3672d0d4-1a40-4241-bc99-a462ea87afcd.png"
  },
  {
    id: 1,
    isRecommend: true,
    title: "오늘의 일기예보",
    author: "지휘",
    chapter: "50화 : 판도라의 상자",
    rate: "9.65",
    thumbnail: "https://image-comic.pstatic.net/webtoon/817987/thumbnail/titledescimage/frontImage_ae1f112c-2e67-4dc8-9b44-96673e7c78b9.png"
  },
  {
    id: 2,
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
    id: 0,
    isRecommend: false,
    title: "참교육",
    author: "채용택/한가람",
    rate: "9.88",
    thumbnail: "https://image-comic.pstatic.net/webtoon/758037/thumbnail/thumbnail_IMAG21_15cb2611-34c0-4f02-a689-41d0b1016579.jpg",
    views: 100,
    updated: 202411061210
  },
  {
    id: 1,
    isRecommend: false,
    title: "똑 닮은 딸",
    author: "이담",
    rate: "9.98",
    thumbnail: "https://image-comic.pstatic.net/webtoon/774866/thumbnail/thumbnail_IMAG21_b03cd4bd-bc74-4469-a501-20896bcc887f.jpg",
    views: 40,
    updated: 202411061216
  },
  {
    id: 2,
    isRecommend: false,
    title: "신의 탑",
    author: "SIU",
    rate: "9.85",
    thumbnail: "https://image-comic.pstatic.net/webtoon/183559/thumbnail/thumbnail_IMAG21_5f3fec31-5c95-4afe-a73f-3046288edb47.jpg",
    views: 20,
    updated: 202411061214
  },
  {
    id: 3,
    isRecommend: false,
    title: "윈드브레이커",
    author: "조용석",
    rate: "9.84",
    thumbnail: "https://image-comic.pstatic.net/webtoon/602910/thumbnail/thumbnail_IMAG21_e861f2cf-6157-4d33-8e02-7b4cbf0a8baf.jpg",
    views: 10,
    updated: 202411061201
  },
  {
    id: 4,
    isRecommend: false,
    title: "환생천마",
    author: "JP/부겸/장영훈",
    rate: "9.94",
    thumbnail: "https://image-comic.pstatic.net/webtoon/822657/thumbnail/thumbnail_IMAG21_99e49512-e05d-48c3-846d-d898f78523df.jpg",
    views:70,
    updated: 202411061213
  },
  {
    id: 5,
    isRecommend: false,
    title: "절대검감",
    author: "김두루미/티아이/한중월야",
    rate: "9.95",
    thumbnail: "https://image-comic.pstatic.net/webtoon/796075/thumbnail/thumbnail_IMAG21_31f75c4c-81c9-454a-8d92-9e23b577e1a5.jpg",
    views: 80,
    updated: 202411061202
  },
  {
    id: 6,
    isRecommend: false,
    title: "귀촌리",
    author: "황양/이대한",
    rate: "9.95",
    thumbnail: "https://image-comic.pstatic.net/webtoon/822573/thumbnail/thumbnail_IMAG21_d5b20239-59d8-4274-85ef-3d096420738c.jpg",
    views: 30,
    updated: 202411061210
  },
  {
    id: 7,
    isRecommend: false,
    title: "히어로메이커",
    author: "빤쓰",
    rate: "9.93",
    thumbnail: "https://image-comic.pstatic.net/webtoon/21815/thumbnail/thumbnail_IMAG21_7292511306663934265.jpg",
    views: 90,
    updated: 202411061208
  },
  {
    id: 8,
    isRecommend: false,
    title: "별난식당",
    author: "HO9",
    rate: "9.96",
    thumbnail: "https://image-comic.pstatic.net/webtoon/806189/thumbnail/thumbnail_IMAG21_292de414-bd9a-418d-a4e9-d97060398223.jpg",
    views: 60,
    updated: 202411061205
  },
  {
    id: 9,
    isRecommend: false,
    title: "잔불의 기사",
    author: "환댕",
    rate: "9.96",
    thumbnail: "https://image-comic.pstatic.net/webtoon/768536/thumbnail/thumbnail_IMAG21_06774772-8958-4f9b-ad2c-895567ec11bc.jpg",
    views: 50,
    updated: 202411061211
  }
]

const Signarea = styled.div`
  display: flex;
`

const Signbutton = styled.button`
  margin: 10px;
`

const Headarea = styled.div`
  display: flex;
  width: 960px;
  justify-content: space-between;
`

const Fullheadarea = styled.div`
  display: flex;
  justify-content: space-between;
`

const Head = styled.div`
  margin: 10px;
  font-size: 23px;
  font-weight: bold;
`

const Tabarea = styled.div`
  display: flex;
`

const Cardarea = styled.div`
  display: inline-block;
  margin: 10px;
`

const Recommendlist = styled.div`
  display: flex;
  width: 960px;
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 960px;
`

const Thumbnail = styled.img`
  width: ${(prop) => (prop.$isRecommend === true ? '300px' : '172px')};
  background-color: #e6e6fa;
`

const Title = styled.div`
  margin: 3px 0;
  font-size: 14px;
  font-weight: bold;
`

const Author = styled.div`
  margin: 3px 0;
  font-size: 14px;
`

const Chapter = styled.div`
  margin: 3px 0;
  font-size: 14px;
  color: #666666;
`

const Rate = styled.div`
  margin: 3px 0;
  font-size: 13px;
  color: #999999
`

const Tabbutton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  padding: 0;
  color: ${(props) => (props.selected ? '#00DC64' : '#666666')};
  &::after {
    content: '·';
    color: '#B2B2B2';
    margin: 4px;
  }
  &:last-child::after {
    content: '';
  }
`

function WebtoonCard({isRecommend, title, author, chapter, rate, thumbnail}){
  return (
    <Cardarea>
      <div>
        <Thumbnail $isRecommend={isRecommend} src={thumbnail} alt="이미지 없음"/>
      </div>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Chapter>{isRecommend && chapter}</Chapter>
      <Rate>⭐{rate}</Rate>
    </Cardarea>
  )
}

function MainPage() {
  const [SelectedStandard, setSelectedStandard] = useState('인기순');
  const SORTED_WEBTOON = () => {
    switch (SelectedStandard) {
      case '인기순':
        return WEBTOON;
      case '업데이트순':
        return [...WEBTOON].sort((a, b) => b.updated - a.updated);
      case '조회순':
        return [...WEBTOON].sort((a, b) => b.views - a.views);
      case '별점순':
        return [...WEBTOON].sort((a, b) => b.rate - a.rate);
    }
  };
  return (
    <div>
      <Helmet>
        <title>웹툰</title>
      </Helmet>
      <Fullheadarea>
        <Headarea>
          <Head>추천 {Day[day]}요웹툰</Head>
        </Headarea>
        <Signarea>
          <Link to='signup'>
            <Signbutton>회원가입</Signbutton>
          </Link>
        </Signarea>
      </Fullheadarea>
	  <Recommendlist>
        {RECOMMEND_WEBTOON.map(({id, isRecommend, title, author, chapter, rate, thumbnail}) => (
          <WebtoonCard key={id} isRecommend={isRecommend} title={title} author={author} chapter={chapter} rate={rate} thumbnail={thumbnail} />
        ))}
      </Recommendlist> 
      
      <Headarea>
        <Head>전체 {Day[day]}요웹툰</Head>
        <Tabarea>
          <Tabbutton selected={SelectedStandard === '인기순'} onClick={() => setSelectedStandard('인기순')} >인기순</Tabbutton>
          <Tabbutton selected={SelectedStandard === '업데이트순'} onClick={() => setSelectedStandard('업데이트순')}>업데이트순</Tabbutton>
          <Tabbutton selected={SelectedStandard === '조회순'} onClick={() => setSelectedStandard('조회순')}>조회순</Tabbutton>
          <Tabbutton selected={SelectedStandard === '별점순'} onClick={() => setSelectedStandard('별점순')}>별점순</Tabbutton>
        </Tabarea>
      </Headarea>
      <List>
        {SORTED_WEBTOON().map(({id, isRecommend, title, author, rate, thumbnail}) => (
          <WebtoonCard key={id} isRecommend={isRecommend} title={title} author={author} rate={rate} thumbnail={thumbnail} />
      ))}
      </List>
    </div>
  );
}

export default MainPage;