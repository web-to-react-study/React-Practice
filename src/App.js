import React from 'react';
import Webtoon from './Webtoon01';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>추천 웹툰</h1>
      <p className="filter-options">
        <span className="highlight">내가 좋아하는 순</span> • 인기 순 • 업데이트 순 • 조회 순
      </p>
      <div className="webtoon-list">
        <Webtoon
          image="https://up.wepick.kr/wp-content/uploads/2023/03/12.png"
          title="웹툰"
          author="네이버"
          rating="★0.00"
        />
        <Webtoon
          image="https://comicthumb-phinf.pstatic.net/20230621_159/pocket_16873365055891Q6nV_JPEG/%BD%C3%B8%AE%C1%EE_%C7%A5%C1%F6_690x1000.jpg"
          title="화산귀환"
          author="LICO"
          rating="★10.00"
        />
        <Webtoon
          image="https://i.namu.wiki/i/po_Eao_CAKvoFVTDhx_0RE1uNrbleLqLNIwsedvay56f5foOuHt9E-EDIpKS_lXHD76sMbqdPNgkNeFs-W5WBw.webp"
          title="참교육"
          author="채용택/한가람"
          rating="★10.00"
        />
      </div>
    </div>
  );
}

export default App;
