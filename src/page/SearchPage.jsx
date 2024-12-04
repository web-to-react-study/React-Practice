import '../style/search.css';
import { useState } from 'react';
import KeywordBox from '../components/KeywordBox';

const BASE_URL = 'https://openapi.naver.com/v1/datalab/search';
const NAVER_CLIENT_ID = 'YOUR_ID';
const NAVER_CLIENT_SECRET = 'YOUR_SECRET';

function SearchPage() {
  const [result, setResult] = useState([]);
  const [userInput, setUserInput] = useState({ timeUnit: 'date' });
  const postData = async () => {
    /** WEEK7 TODO
     * BASE_URL로 POST 요청을 보내는 함수를 작성해 주세요.
     * BODY는 userInput을 사용하시면 됩니다!
     */
  };

  const handlePostData = (e) => {
    e.preventDefault();
    postData()
      .then((res) => setResult(res.data.results))
      .catch((err) => alert(err));
  };

  return (
    <div>
      <h1>네이버 통합 검색어 트렌드 조회 실습</h1>
      <form onSubmit={handlePostData}>
        <div>
          <h3>조회 기간 *</h3>
          <label>
            시작일
            <input type="date" required onChange={(event) => setUserInput((prev) => ({ ...prev, startDate: event.target.value }))} />
          </label>
          <br />
          <label>
            종료일
            <input type="date" required onChange={(event) => setUserInput((prev) => ({ ...prev, endDate: event.target.value }))} />
          </label>

          <hr />

          <h3>조회 단위 *</h3>
          <select name="time_unit" onChange={(event) => setUserInput((prev) => ({ ...prev, timeUnit: event.target.value }))}>
            <option value="date">일간</option>
            <option value="week">주간</option>
            <option value="month">월간</option>
          </select>

          <hr />

          <h3>검색 키워드 등록 *</h3>
          <KeywordBox setUserInput={setUserInput} />
        </div>
        <button type="submit">검색하기</button>
      </form>

      <hr />
      <h2>조회 결과</h2>
      <div>
        {result.length > 0
          ? result.map((item) => (
              <div key={item.title}>
                {item.data.map((res) => (
                  <>
                    {res.period} <div style={{ width: `${res.ratio}%`, backgroundColor: '#1ec800', height: '20px', borderRadius: '12px' }} />
                  </>
                ))}
              </div>
            ))
          : '검색 결과가 없습니다.'}
      </div>
    </div>
  );
}

export default SearchPage;
