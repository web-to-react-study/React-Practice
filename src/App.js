import React from 'react';
// import ReactStudyRepoCard from './components/ReactStudyRepoCard';
import RepoCard from './components/RepoCard';


//component쓰기 전
// function App() {  
//   return (
// 	  <div>
// 	    <div>
// 		    <h3>React-Study</h3>
// 		    <p>React Study 실습 / 과제 레포</p>
// 		    <p>사용언어: JavaScript</p>
// 	    </div>
// 	    <div>
// 		    <h3>Bridge</h3>
// 		    <p>Bridge.. 어쩌구 내용</p>
// 		    <p>사용언어: JavaScript</p>
// 	    </div>
// 	    <div>
// 		    <h3>Spring-Study</h3>
// 		    <p>Spring Study.. 어쩌구 내용</p>
// 		    <p>사용언어: Java</p>
// 	    </div>
// 	    {/* ... */}
//     </div>
//   );
// }

//components활용 but props는 안 사용
// function App() {  
//   return (
// 	  <div>
// 	    <div>
// 		    <h3>React-Study</h3>
// 		    <p>React Study 실습 / 과제 레포</p>
// 		    <p>사용언어: JavaScript</p>
// 	    </div>
// 	    <div>
// 		    <h3>Bridge</h3>
// 		    <p>Bridge.. 어쩌구 내용</p>
// 		    <p>사용언어: JavaScript</p>
// 	    </div>
// 	    <div>
// 		    <h3>Spring-Study</h3>
// 		    <p>Spring Study.. 어쩌구 내용</p>
// 		    <p>사용언어: Java</p>
// 	    </div>
// 	    {/* ... */}
//     </div>
//   );
// }

//props사용
function App() {
  return (
    <div>
      <RepoCard title="재혼황후" creater="히어리/은소/알파타르트" nowsubmitted="182화" rate="9.97"/>
      <RepoCard title="체크포인트" creater="가나다" nowsubmitted="181화" rate="9.97"/>
      <RepoCard title="뼈왕" creater="다라마" nowsubmitted="18화" rate="9.95"/>
      <RepoCard title="외모지상주의" creater="다라마" nowsubmitted="18화" rate="9.5"/>
      <RepoCard title="역대급 영지 설계사" creater="다라마" nowsubmitted="18화" rate="9.95"/>
      <RepoCard title="나 혼자 만렙 뉴비" creater="히어리/숨풀/알파타르트" nowsubmitted="182화" rate="9.97"/>
      <RepoCard title="좋아? 죽어!" creater="히어리/숨풀/알파타르트" nowsubmitted="182화" rate="9.97"/>
      <RepoCard title="사신" creater="히어리/숨풀/알파타르트" nowsubmitted="182화" rate="9.97"/>
      <RepoCard title="상남자" creater="히어리/숨풀/알파타르트" nowsubmitted="182화" rate="9.97"/>
      <RepoCard title="나 혼자 탑에서 농사" creater="히어리/숨풀/알파타르트" nowsubmitted="182화" rate="9.97"/>
      <RepoCard title="유부감자" creater="히어리/숨풀/알파타르트" nowsubmitted="182화" rate="9.97"/>
      <RepoCard title="천하제일 대사형" creater="히어리/숨풀/알파타르트" nowsubmitted="182화" rate="9.97"/>
    </div>
  );
}
export default App;