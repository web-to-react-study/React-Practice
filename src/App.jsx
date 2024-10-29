import styled from 'styled-components';
import Card from './components/Card';

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
    id: 1,
    title: '킬디스럽!',
    author: '김찹쌀',
    rate: 9.94,
    info: '7화',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/828909/thumbnail/titledescimage/frontImage_dc664da3-ea26-40a1-9764-0407ab9e4ec6.png',
  },
  {
    id: 2,
    title: '밤필드의 아이들 by DARK MOON',
    author: 'HYBE',
    rate: 9.89,
    info: '9화',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/822774/thumbnail/titledescimage/frontImage_5032a0cd-7afe-4927-a6bf-0be4aa6cc670.png',
  },
];

const ALL_WEBTOON = [
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

function App() {
  return (
    <Container>
      <StyledTitle>추천 일요웹툰</StyledTitle>
      <StyledRecommendBox>
        {RECOMMEND_WEBTOON.map(({ id, title, author, rate, info, thumbnail }) => (
          <Card key={id} type={'recommend'} title={title} author={author} rate={rate} info={info} thumbnail={thumbnail} />
        ))}
      </StyledRecommendBox>
      <StyledTitle>전체 일요웹툰</StyledTitle>
      <StyledAllBox>
        {ALL_WEBTOON.map(({ id, title, author, rate, thumbnail }) => (
          <Card key={id} title={title} author={author} rate={rate} thumbnail={thumbnail} />
        ))}
      </StyledAllBox>
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0 20px;
`;

const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 21px;

  margin-top: 50px;
`;

const StyledRecommendBox = styled.div`
  display: flex;
  gap: 12px;
`;

const StyledAllBox = styled.div`
  display: grid;
  grid-gap: 20px 10px;
  grid-template-columns: repeat(5, 160px);
`;
