import React from 'react';
import ReactDOM from 'react-dom/client';
//reactdom:react컴포넌트를 실제 dom에 렌더링하는 역할
//1.DOM:html문서의 프로그래밍 인터페이스-문서의 구조화된 표현 제공(트리형태)
//2.reactDOM:react컴포넌트를(가상의 DOM에서 작업함) 실제 DOM에 렌더링(실제 부라우저의 DOM을 동기화)하는 역할

//react-dom/client: createroot api를 사용하기 위해 필요
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//document.getElementById('root'): html파일에서 id가 root인 요소를 가져옴
//ReactDOM.createRoot: 이 요소를 루트 컨테이너로 설정하여 react컴포넌트를 그 안에 렌더링할 준비함
root.render(//root 객체의 render메서드를 호출하여 실제 DOM에 react컴포넌트를 렌더링함
  <React.StrictMode>
    <App />
  </React.StrictMode>
  //  <React.StrictMode>:react의 개발모드에서 추가적인 검사, 경고를 활성화함
);
