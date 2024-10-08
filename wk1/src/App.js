import RepoCard from './components/RepoCard'
import styled from 'styled-components'
import './App.css';

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

const DivBlock = styled.div`
display:flex;
`;


function App() {
  return (
    <>
      <h2>추천 일요웹툰</h2>
      <DivBlock>
        {RECOMMEND_WEBTOON.map(({id, title, author, rate, info, thumbnail}) => (
          <li key={id}>
          <RepoCard title={title} author={author} rate={rate} info={info} thumbnail={thumbnail} type={0}/>
          </li>
        ))}
      </DivBlock>
      <h2>전체 일요웹툰</h2>
      <DivBlock>
        {RECOMMEND_WEBTOON.map(({id, title, author, rate, info, thumbnail}) => (
          <li key = {id}>
          <RepoCard title={title} author={author} rate={rate} info={info} thumbnail={thumbnail} type={1}/>
          </li>
        ))}
      </DivBlock>
    </>
  );
}


export default App;
