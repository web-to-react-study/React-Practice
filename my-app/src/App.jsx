import logo from './logo.svg';
import './App.css';

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


function Recommend_webtoon({thumbnail, title, author, chapter, rate}){
  return (
    <div className='rec_wt_box'>
      <img src={thumbnail} alt="이미지 없음" className='rec_wt_thumbnail'/>
      <p className='wt_title'>{title}</p>
      <p className='wt_author'>{author}</p>
      <p className='wt_chapter'>{chapter}</p>
      <p className='wt_rate'><img src={"images/rate_star.png"} width="9px" height="9px"/> {rate}</p>
    </div>
  )
}

function Webtoon({thumbnail, title, author, chapter, rate}){
  return (
    <div className='wt_box'>
      <img src={thumbnail} alt="이미지 없음" className='wt_thumbnail'/>
      <p className='wt_title'>{title}</p>
      <p className='wt_author'>{author}</p>
      <p className='wt_chapter'>{chapter}</p>
      <p className='wt_rate'><img src={"images/rate_star.png"} width="9px" height="9px"/> {rate}</p>
    </div>
  )
}

function App() {
  return (
	  <div className='box'>
      <h3 className='spacing'> 추천 {Day[day]}요웹툰 </h3>
      <Recommend_webtoon thumbnail="/images/Nunu.jpg" title="절대영도" author="누누와윌럼프" chapter="1화" rate="9.99"/>
      <Recommend_webtoon thumbnail="/images/Akali.jpg" title="무결처형" author="아칼리" chapter="1화" rate="9.99"/>
      <Recommend_webtoon thumbnail="/images/Gangplank.jpg" title="혀어어어어업상" author="갱플랭크" chapter="1화" rate="9.99"/>
      
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '50px'}}>
        <h3 className='spacing'> 전체 {Day[day]}요웹툰</h3>
        <span className='tab'>인기순 업데이트순 조회순 별점순</span>
      </div>
      <Webtoon thumbnail="/images/thumbnail.png" title="태경티비" author="김태경" rate="9.99"/>
      <Webtoon thumbnail="/images/thumbnail.png" title="태경티비" author="김태경" rate="9.99"/>
      <Webtoon thumbnail="/images/thumbnail.png" title="태경티비" author="김태경" rate="9.99"/>
      <Webtoon thumbnail="/images/thumbnail.png" title="태경티비" author="김태경" rate="9.99"/>
      <Webtoon thumbnail="/images/thumbnail.png" title="태경티비" author="김태경" rate="9.99"/>
    </div>
  );
}

export default App;
