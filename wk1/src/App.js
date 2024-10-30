import RepoCard from './components/RepoCard'
import styled from 'styled-components'
import './App.css';
import { useState } from 'react';
import { useCallback } from 'react';

const RECOMMEND_WEBTOON = [
  {
    id: 0,
    title: '무서운게 딱좋아!',
    author: '이동규',
    rate: 9.85,
    info: '142화',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/778322/thumbnail/titledescimage/frontImage_9a8619ea-a259-40ee-b33c-b9fa3ef1e36c.png',
  },
  {
    id:1,
    title: '킬디스럽!',
    author: '김찹쌀',
    rate: 9.94,
    info: '7화',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/828909/thumbnail/titledescimage/frontImage_dc664da3-ea26-40a1-9764-0407ab9e4ec6.png',
  },
  {
    id:2,
    title: '밤필드의 아이들 by DARK MOON',
    author: 'HYBE',
    rate: 9.89,
    info: '9화',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/822774/thumbnail/titledescimage/frontImage_5032a0cd-7afe-4927-a6bf-0be4aa6cc670.png',
  },
];

const UPDATE_WEBTOON = [
  {
    id: 0,
    title: '마루는 강쥐',
    author: '모죠',
    rate: 9.98,
    thumbnail: 'https://image-comic.pstatic.net/webtoon/796152/thumbnail/thumbnail_IMAG21_26b9c1d8-ca2d-4fc7-87ea-a3334634236a.jpg',
  },
  {
    id: 1,
    title: '육아일기',
    author: '자까',
    rate: 9.95,
    thumbnail: 'https://image-comic.pstatic.net/webtoon/812354/thumbnail/thumbnail_IMAG21_be53c95b-d800-4275-8869-e9b9a8413ce8.jpg',
  },
  {
    id: 2,
    title: '별이삼샵',
    author: '혀노',
    rate: 9.97,
    thumbnail: 'https://image-comic.pstatic.net/webtoon/737628/thumbnail/thumbnail_IMAG21_9e108875-36b5-4872-8ace-53a6e492376b.jpg',
  },
  {
    id: 3,
    title: '청춘계시록',
    author: '한서',
    rate: 9.97,
    thumbnail: 'https://image-comic.pstatic.net/webtoon/802079/thumbnail/thumbnail_IMAG21_a30fbbcb-33ac-4b24-aa8d-0049007595e0.jpg',
  },
  {
    id: 4,
    title: '좋아? 죽어!',
    author: '김용키, 박만사 / 죠',
    rate: 9.48,
    thumbnail: 'https://image-comic.pstatic.net/webtoon/821192/thumbnail/thumbnail_IMAG21_156483ac-3740-4cbf-8150-0f24595bae52.jpg',
  },
];

const COUNT_WEBTOON =[
  {
    id:1,
    title: '킬디스럽!',
    author: '김찹쌀',
    rate: 9.94,
    info: '7화',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/828909/thumbnail/titledescimage/frontImage_dc664da3-ea26-40a1-9764-0407ab9e4ec6.png',
  },
  {
    id: 0,
    title: '무서운게 딱좋아!',
    author: '이동규',
    rate: 9.85,
    info: '142화',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/778322/thumbnail/titledescimage/frontImage_9a8619ea-a259-40ee-b33c-b9fa3ef1e36c.png',
  },
  {
    id: 3,
    title: '청춘계시록',
    author: '한서',
    rate: 9.97,
    thumbnail: 'https://image-comic.pstatic.net/webtoon/802079/thumbnail/thumbnail_IMAG21_a30fbbcb-33ac-4b24-aa8d-0049007595e0.jpg',
  },
]
const STAR_WEBTOON =[
  {
    id: 3,
    title: '청춘계시록',
    author: '한서',
    rate: 9.97,
    thumbnail: 'https://image-comic.pstatic.net/webtoon/802079/thumbnail/thumbnail_IMAG21_a30fbbcb-33ac-4b24-aa8d-0049007595e0.jpg',
  },
  {
    id: 4,
    title: '좋아? 죽어!',
    author: '김용키, 박만사 / 죠',
    rate: 9.48,
    thumbnail: 'https://image-comic.pstatic.net/webtoon/821192/thumbnail/thumbnail_IMAG21_156483ac-3740-4cbf-8150-0f24595bae52.jpg',
  },
  {
    id: 0,
    title: '무서운게 딱좋아!',
    author: '이동규',
    rate: 9.85,
    info: '142화',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/778322/thumbnail/titledescimage/frontImage_9a8619ea-a259-40ee-b33c-b9fa3ef1e36c.png',
  },
  {
    id:1,
    title: '킬디스럽!',
    author: '김찹쌀',
    rate: 9.94,
    info: '7화',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/828909/thumbnail/titledescimage/frontImage_dc664da3-ea26-40a1-9764-0407ab9e4ec6.png',
  },
]

const DivBlock = styled.div`
display:flex;
`;

const DivRow = styled.div`
display:flex;
flex-direction: row;
justify-content:space-between;
align-content:center;
`

const Button = styled.button`
    color: black;
    background-color: white;
    height: 50px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    &.active {
        color: green;
    }
`

const Li = styled.li`
  list-style-type:none;
`

const data = ['인기순','업데이트순','조회순','별점순'];
const EngData = ['popular','update','count','star'];

function App() {
  const [sort, setSort] = useState('popular');

  const ClickedSort = (e) =>{
    setSort((prev) => {
      return e.target.value;
    })
  }

  const createList =(LIST) =>{
    return LIST.map(({id, title, author, rate, info, thumbnail}) => (
    <Li  key = {id}>
    <RepoCard title={title} author={author} rate={rate} info={info} thumbnail={thumbnail} type={1}/>
    </Li>
    ))
  };
  return (
    <>
      <h2>추천 일요웹툰</h2>
      <DivBlock>
        {RECOMMEND_WEBTOON.map(({id, title, author, rate, info, thumbnail}) => (
          <Li key={id}>
          <RepoCard title={title} author={author} rate={rate} info={info} thumbnail={thumbnail} type={0}/>
          </Li>
        ))}
      </DivBlock>
      <DivRow>
        <h2>전체 일요웹툰</h2>
        <DivRow>
          {data.map((item,idx) => {
           return( <Button key={idx}
            value={EngData[idx]}
            onClick={ClickedSort}
            className={"btn" + (EngData[idx] == sort ? " active" : "")}
            >
              {item}
            </Button>
           );
          })}
        </DivRow>
      </DivRow>
      <DivBlock>
        {sort === 'popular' ? createList(RECOMMEND_WEBTOON) : sort === 'update' ? createList(UPDATE_WEBTOON) :sort === 'count' ? createList(COUNT_WEBTOON): createList(STAR_WEBTOON)}
      </DivBlock>
    </>
  );
}


export default App;
