import RecommendWebtoonInfo from './components/RecommendWebtoonInfo';
import WebtoonInfo from './components/WebtoonInfo';

function App() {
  return (
    <div>
      <h1>추천 목요웹툰</h1>
      <div style={{display:'flex'}}>
        <RecommendWebtoonInfo
          thumbnail = {"https://image-comic.pstatic.net/webtoon/823439/thumbnail/titledescimage/frontImage_7e7f2191-9111-44dd-8adf-b8926171d832.png"}
          title = {"검은 늑대가 나를 부르면"}
          writer = {"해민 / 깡깡 / 임혜"}
          last = {"23화"}
          star = {9.95}
        />

        <RecommendWebtoonInfo
          thumbnail = {"https://image-comic.pstatic.net/webtoon/821973/thumbnail/titledescimage/frontImage_75937797-31a2-4164-bde9-2952e721b795.png"}
          title = {"부부의 의무를 원하신다면"}
          writer = {"핀쿠 / 은꽃 / 아소나"}
          last = {"27화"}
          star = {9.95}
        />

        <RecommendWebtoonInfo
          thumbnail = {"https://image-comic.pstatic.net/webtoon/820786/thumbnail/titledescimage/frontImage_55303847-454d-4ff1-99ef-350e3f05c023.png"}
          title = {"VS"}
          writer = {"한큰빛, 박만사 / 한큰빛"}
          last = {"37화"}
          star = {9.81}
        />
      </div>

      <h1>전체 목요웹툰</h1>
      <div style={{display: 'flex'}}>
        <WebtoonInfo
          thumbnail={"https://image-comic.pstatic.net/webtoon/812354/thumbnail/thumbnail_IMAG21_be53c95b-d800-4275-8869-e9b9a8413ce8.jpg"}
          title={"육아일기"}
          writer={"자까"}
          star = {9.95}
        />

        <WebtoonInfo
          thumbnail={"https://image-comic.pstatic.net/webtoon/747271/thumbnail/thumbnail_IMAG21_75c6a3cc-c4d1-4b51-a945-029aff772a63.jpg"}
          title={"나노마신"}
          writer={"현절무 / 금광불괴 / 한중월야"}
          star = {9.86}
        />

        <WebtoonInfo
          thumbnail={"https://image-comic.pstatic.net/webtoon/822640/thumbnail/thumbnail_IMAG21_56a8443c-14b8-47a6-8806-ae90f935cd85.jpg"}
          title={"소꿉친구 컴플렉스"}
          writer={"은하이"}
          star = {9.97}
        />

        <WebtoonInfo
          thumbnail={"https://image-comic.pstatic.net/webtoon/808198/thumbnail/thumbnail_IMAG21_f0d0007b-1edf-40a0-ade4-b850c22bb0b1.jpg"}
          title={"촉법소년"}
          writer={"박만사, 남자의 이야기"}
          star = {9.88}
        />

        <WebtoonInfo
          thumbnail={"https://image-comic.pstatic.net/webtoon/800770/thumbnail/thumbnail_IMAG21_d2e1e7ee-fc83-4030-a1e7-200378bc088f.jpg"}
          title={"재벌집 막내아들"}
          writer={"JP / 김병관 / 산경"}
          star = {9.97}
        />
      </div>      
    </div>

  );

}
export default App;
