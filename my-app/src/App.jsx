import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Thumbnail = styled.img`
  width: ${({ $type }) => ($type === 'Recommend' ? '272px' : '160px')};
  height: ${({ $type }) => ($type === 'Recommend' ? '165px' : '207px')};
  object-fit: cover;
  object-position: center;
`;

const Title = styled.h3`
  width: ${({ $type }) => ($type === 'Recommend' ? '272px' : '160px')};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Author = styled.p`
  width: ${({ $type }) => ($type === 'Recommend' ? '272px' : '160px')};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

function WebtoonCard({ type, thumbnail, title, author, info, rate }) {
  return (
    <Container>
      <Content>
        <Thumbnail $type={type} src={thumbnail} alt={`${title} Thumbnail`} />
        <Title $type={type}> {title} </Title>
        <Author $type={type}> {author} </Author>
        {type == 'Recommend' && <p>{info}</p>}
        <p>⭐ {rate}</p>
      </Content>
    </Container>
  );
}

const RECOMMEND_WEBTOON = [
  {
    type: 'Recommend',
    title: '시한부 황후의 나쁜 짓',
    author: '굄 / 이준 / 정무늬',
    info: '45화.<스텔라 전용 탈 것>',
    rate: '9.86',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/819054/thumbnail/titledescimage/backImage_d4df04e2-9a05-407e-bde9-af40103b4221.png'
  },
  {
    type: 'Recommend',
    title: '배드 엔딩 메이커',
    author: '오일구 / 심재영 / 류은가람',
    info: '69화',
    rate: '9.98',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/812017/thumbnail/titledescimage/frontImage_8be270a5-2b58-4863-9645-1921389b0cc7.png',
  },
  {
    type: 'Recommend',
    title: '여우자매',
    author: '갈치',
    info: '2부 23화 - 결핍 3',
    rate: '9.97',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/797413/thumbnail/titledescimage/backImage_aa90f72f-34fd-44bb-9cfd-7c569182b7ec.png',
  }
]

const ALL_WEBTOON = [
  {
    type: 'ALL',
    title: '김부장',
    author: '박만사, 남자의 이야기 / 정종택',
    rate: '9.59',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/783053/thumbnail/thumbnail_IMAG21_d7732f14-26da-4e35-8762-660cc87b53f1.jpg',
  },
  {
    type: 'ALL',
    title: '마루는 강쥐',
    author: '모죠',
    rate: '9.98',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/796152/thumbnail/thumbnail_IMAG21_26b9c1d8-ca2d-4fc7-87ea-a3334634236a.jpg',
  },
  {
    type: 'ALL',
    title: '좋아? 죽어!',
    author: '김용키, 박만사 / 죠',
    rate: '9.48',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/821192/thumbnail/thumbnail_IMAG21_156483ac-3740-4cbf-8150-0f24595bae52.jpg',
  },
  {
    type: 'ALL',
    title: '서울 자가에 대기업 다니는 김 부장 이야기',
    author: '명랑 / 김병관 / 송희구',
    rate: '9.95',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/819929/thumbnail/thumbnail_IMAG21_f1ca00e5-9b30-44d3-a1ee-7a04d539002a.jpg',
  },
  {
    type: 'ALL',
    title: '괴력난신',
    author: '매드버드 / 김태형 / 한중월야',
    rate: '9.95',
    thumbnail: 'https://image-comic.pstatic.net/webtoon/821597/thumbnail/thumbnail_IMAG21_d39e65d8-6ffd-4024-be77-dbeb87db820c.jpg',
  }
]

function App() {
  return (
    <>
      <h2>추천 화요웹툰</h2>
      <div style={{ display: 'flex'}}>
        {RECOMMEND_WEBTOON.map(({type, title, author, rate, info, thumbnail}) => (
          <WebtoonCard type={type} title={title} author={author} rate={rate} info={info} thumbnail={thumbnail} />
        ))}
      </div>
      <h2>전체 화요웹툰</h2>
      <div style={{ display: 'flex' }}>
        {ALL_WEBTOON.map(({type, title, author, rate, info, thumbnail}) => (
          <WebtoonCard type={type} title={title} author={author} rate={rate} info={info} thumbnail={thumbnail} />
        ))}
      </div>
    </>
  );
}

export default App;
