import axios from 'axios';
import KeywordBox from '../components/KeywordBox';
import '../style/search.css';
import { useState } from 'react';

const BASE_URL = '/v1/datalab/search';
const NAVER_CLIENT_ID = 'dZD7XbraaPyRZ4u0nkLN';
const NAVER_CLIENT_SECRET = 'b4muvJq1I7';

function SearchPage() {
  const [result, setResult] = useState([]);
  const [userInput, setUserInput] = useState({ timeUnit: 'date' });
  const postData = async () => {
    const res = await axios.post(BASE_URL, userInput, {
      headers: {
        'X-Naver-Client-Id': NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
        'Content-Type': 'application/json',
      },
    });

    return res;
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
