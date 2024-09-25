import Card from './components/Card';
import RecommendCard from './components/RecommendCard';

function App() {
  return (
    <>
      <h2>추천 일요웹툰</h2>
      <div style={{ display: 'flex' }}>
        <RecommendCard
          title="무서운게 딱좋아!"
          author={'이동규'}
          rate={9.85}
          info={'142화'}
          thumbnail={'https://image-comic.pstatic.net/webtoon/778322/thumbnail/titledescimage/frontImage_9a8619ea-a259-40ee-b33c-b9fa3ef1e36c.png'}
        />
        <RecommendCard
          title="킬디스럽!"
          author={'김찹쌀'}
          rate={9.94}
          info={'7화'}
          thumbnail={'https://image-comic.pstatic.net/webtoon/828909/thumbnail/titledescimage/frontImage_dc664da3-ea26-40a1-9764-0407ab9e4ec6.png'}
        />
        <RecommendCard
          title="밤필드의 아이들 by DARK MOON"
          author={'HYBE'}
          rate={9.89}
          info={'9화'}
          thumbnail={'https://image-comic.pstatic.net/webtoon/822774/thumbnail/titledescimage/frontImage_5032a0cd-7afe-4927-a6bf-0be4aa6cc670.png'}
        />
      </div>
      <h2>전체 일요웹툰</h2>
      <div style={{ display: 'flex' }}>
        <Card
          title={'육아일기'}
          author={'자까'}
          rate={9.95}
          thumbnail={'https://image-comic.pstatic.net/webtoon/812354/thumbnail/thumbnail_IMAG21_be53c95b-d800-4275-8869-e9b9a8413ce8.jpg'}
        />
        <Card
          title={'별이삼샵'}
          author={'혀노'}
          rate={9.97}
          thumbnail={'https://image-comic.pstatic.net/webtoon/737628/thumbnail/thumbnail_IMAG21_9e108875-36b5-4872-8ace-53a6e492376b.jpg'}
        />
        <Card
          title={'청춘계시록'}
          author={'한서'}
          rate={9.97}
          thumbnail={'https://image-comic.pstatic.net/webtoon/802079/thumbnail/thumbnail_IMAG21_a30fbbcb-33ac-4b24-aa8d-0049007595e0.jpg'}
        />
      </div>
    </>
  );
}

export default App;
