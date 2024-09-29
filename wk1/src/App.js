import RepoCard from './components/RepoCard'
import './App.css';

function App() {
  return (
    <div>
      <p>추천 일요웹툰</p>
      <div class="suggest">   
        <RepoCard image_url="https://image-comic.pstatic.net/webtoon/778322/thumbnail/titledescimage/frontImage_9a8619ea-a259-40ee-b33c-b9fa3ef1e36c.png" title="무서운게 딱좋아" description="이동규" eps="142" />
        <RepoCard image_url="https://image-comic.pstatic.net/webtoon/778322/thumbnail/titledescimage/frontImage_9a8619ea-a259-40ee-b33c-b9fa3ef1e36c.png" title="무서운게 딱좋아" description="이동규" eps="142" />
        <RepoCard image_url="https://image-comic.pstatic.net/webtoon/778322/thumbnail/titledescimage/frontImage_9a8619ea-a259-40ee-b33c-b9fa3ef1e36c.png" title="무서운게 딱좋아" description="이동규" eps="142" />
      </div>
      <p>전체 일요웹툰</p>
	    
      <div class="repo">   
      <RepoCard image_url="https://image-comic.pstatic.net/webtoon/778322/thumbnail/titledescimage/frontImage_9a8619ea-a259-40ee-b33c-b9fa3ef1e36c.png" title="무서운게 딱좋아" description="이동규" eps="142" />
      <RepoCard image_url="https://image-comic.pstatic.net/webtoon/778322/thumbnail/titledescimage/frontImage_9a8619ea-a259-40ee-b33c-b9fa3ef1e36c.png" title="무서운게 딱좋아" description="이동규" eps="142" />
      <RepoCard image_url="https://image-comic.pstatic.net/webtoon/778322/thumbnail/titledescimage/frontImage_9a8619ea-a259-40ee-b33c-b9fa3ef1e36c.png" title="무서운게 딱좋아" description="이동규" eps="142" />
      <RepoCard image_url="https://image-comic.pstatic.net/webtoon/778322/thumbnail/titledescimage/frontImage_9a8619ea-a259-40ee-b33c-b9fa3ef1e36c.png" title="무서운게 딱좋아" description="이동규" eps="142" />
      <RepoCard image_url="https://image-comic.pstatic.net/webtoon/778322/thumbnail/titledescimage/frontImage_9a8619ea-a259-40ee-b33c-b9fa3ef1e36c.png" title="무서운게 딱좋아" description="이동규" eps="142" />
      <RepoCard image_url="https://image-comic.pstatic.net/webtoon/778322/thumbnail/titledescimage/frontImage_9a8619ea-a259-40ee-b33c-b9fa3ef1e36c.png" title="무서운게 딱좋아" description="이동규" eps="142" />
      </div>
    </div>
  );
}

export default App;
