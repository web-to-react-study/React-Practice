import logo from './logo.svg';
import './App.css';

function Webtoon(props) {
  return (
	  <div>
	    <h3>{props.title}</h3>
	    <p>{props.writer}</p>
      <p>{props.latest_episode}</p>
	    <p>★ {props.star}</p>
      <br></br>
    </div>
  );
}


function App() {
  return (
	  <div>
      <div>
        <h3>네이버 웹툰</h3>
      </div>

      <br></br>

	    <Webtoon title="웹툰1" writer="작가1" star="5.56" latest_episode="149화"/>
	    <Webtoon title="웹툰2" writer="작가2" star="3.14" latest_episode="시즌4 6화"/>
	    <Webtoon title="웹툰3" writer="작가3" star="9.99" />
	    
    </div>
  );
}

export default App;
