

function App() {
  return (
    <div>
      <h2>인기 웹툰</h2>
      <div className="card_box1">
        <ComicCard title="김건우의 모험" author="김건우" grade="9.97" pic="http://www.pororopark.com/images/sub/char_pororo.jpg"/>
        <ComicCard title="크롱의 모험" author="이건우" grade="9.93" pic="http://www.pororopark.com/images/sub/char_crong.jpg"/>
        <ComicCard title="에디의 모험" author="박건우" grade="9.77" pic="http://www.pororopark.com/images/sub/char_eddy.jpg"/>
        <ComicCard title="루피의 모험" author="최건우" grade="9.77" pic="http://www.pororopark.com/images/sub/char_loppy.jpg"/>
        <ComicCard title="쇼메이커의 모험" author="최우진" grade="9.91" pic="http://www.pororopark.com/images/sub/char_poby.jpg"/>

      </div>
      <h2>오늘의 웹툰</h2>
      <div className="card_box1">
        <ComicCard title="피카츄의 모험" author="한건우" grade="9.63" pic="https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002501.png"/>
        <ComicCard title="파이리의 모험" author="윤건우" grade="9.57" pic="https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000401.png"/>
        <ComicCard title="꼬부기의 모험" author="선건우" grade="8.77" pic="https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000701.png"/>
        <ComicCard title="이상해씨의 모험" author="차건우" grade="6.77" pic="https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000101.png"/>

      </div>

    </div>
  );
}

function ComicCard({ title, author, grade, pic }) {
  return (
	  <div className="card_box2">
      <img src={pic} width='150' height='150'></img>
	    <h3>{title}</h3>
	    <p>{author}</p>
	    <p>★{grade}</p>
    </div>
  );
}


export default App;
