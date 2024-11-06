import logo from './logo.svg';
import './App.css';

function RecommendedWebtoon(props) {
  return (
	  <div>
      <img src={props.image}/>
	    <h3>{props.title}</h3>
	    <p>작가: {props.author}</p>
	    <p>화 수: {props.hwa}</p>
      <p>별점: {props.star}</p>
    </div>
  );
}

function TodayWebtoon(props) {
  return (
	  <div>
      <img src={props.image}/>
	    <h3>{props.title}</h3>
	    <p>작가: {props.author}</p>
      <p>평점: {props.star}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>추천 웹툰</h1>
     <RecommendedWebtoon image= "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5186%2F2013%2F12%2F19%2F45994_32005_1257_59_20131219231401.jpg&type=sc960_832" title="우진웹툰1" author="방우진" hwa="45" star="10.0" />
     <RecommendedWebtoon image="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMzA0MDJfMjU3%2FMDAxNjgwNDQwNTE5OTQz.sIIpWZLvHh3kCo3Ez7otmnk4vqC2tKmSccw53Wp6P4cg.XGJXudXI2-fO-BEk1tykEdoDIF5R33qvTqkNpgUBhnUg.JPEG%2FexternalFile.jpg&type=a340" title="우진웹툰2" author="방우잔" hwa="12" star="10.0" />
     <RecommendedWebtoon image="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTExMjZfMjIz%2FMDAxNTc0NzQ1MzAxNTkz.FBkxtXXTBJiuqq69rlHOBPNFOpG9g9v0XKLdyPE0_fYg.TBCqm-wjX5O8pyq8OBCR1GnOYRF-1QUbLQJrE1WOOiQg.PNG.hiplaza%2F%25B4%25EB%25B1%25B8%25C3%25B6%25C7%25D0%25B0%25FC_%25BF%25B9%25B4%25E7%25BF%25F8%25BF%25A1%25BC%25AD_%25C0%25FC%25C7%25CF%25B4%25C2_%25BF%25C0%25B4%25C3%25C0%25C7_%25C7%25E0%25BF%25EE%25C0%25C7_%25BC%25FD%25C0%25DA_%25283%2529.png&type=a340" title="우진웹툰3" author="방우전" hwa="15" star="10.0" />
     <h1>오늘의 웹툰</h1>
     <TodayWebtoon image="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMjVfMTI5%2FMDAxNjcxOTY4MjAwMzc5.SN6CtQaxMNAXTlVo58q9313Ec2rNWb7itsM1uioDBykg.G-kGmL4_9yJ-AqZ55hg6P5IHJYVJ57wEHTTA92cGdEMg.JPEG.woosun5677%2F%25C0%25D312.26.1.jpg&type=sc960_832" title="우진웹툰4" author="방우즌" star="10.0" />
     <TodayWebtoon image="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20121015_289%2Fjeankjy1009_1350269346253FxzrE_JPEG%2Fnumber-5.jpg&type=sc960_832" title="우진웹툰5" author="방우잰" star="10.0" />
     <TodayWebtoon image="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fus.123rf.com%2F450wm%2Fanhoog%2Fanhoog1103%2Fanhoog110300050%2F9160662-%25EB%2585%25B8%25EB%259E%2580%25EC%2583%2589-%25EA%25B8%2580%25EA%25BC%25B4-%25EC%2588%25AB%25EC%259E%2590-6.jpg%3Fver%3D6&type=sc960_832" title="우진웹툰6" author="방우준" star="10.0" />
    </div>
  );
}

export default App;
