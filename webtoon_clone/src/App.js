import logo from './logo.svg';
import './App.css';
import RecommendWebtoon from './components/recommend_webtoon';
import TotalWebtoon from './components/total_webtoon';
import { RecommendWebtoonInfo, TotalWebtoonInfo } from './data';

function App() {

  return (
    <main>
      <section className='recommend-section'>
        <h3>추천 목요웹툰</h3>
        <div className='recommend-wrapper'>
          {RecommendWebtoonInfo.map((object, index) => (
            <RecommendWebtoon
              thumbnail={object.thumbnail}
              title={object.title}
              writer={object.writer}
              updated_story={object.updated_story}
              star={object.star}
            />
          ))}
        </div>
      </section>
      <section className='total-section'>
        <h3>전체 목요웹툰</h3>
        <div className='total-wrapper'>
          {TotalWebtoonInfo.map((object, index) => (
            <TotalWebtoon
              thumbnail={object.thumbnail}
              title={object.title}
              writer={object.writer}
              star={object.star}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
