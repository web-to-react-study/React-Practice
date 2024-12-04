import { useEffect, useState } from 'react';

function KeywordBox({ setUserInput }) {
  const [keyword, setKeyword] = useState({
    groupName: '',
    keywords: [],
  });

  const enterKeyword = (event) => {
    const input = document.getElementById('keyword_input').value;
    if (!input) return alert('값을 입력해 주세요.');
    if (keyword.keywords.includes(input)) return alert('이미 존재하는 키워드입니다.');
    setKeyword((prev) => ({ ...prev, keywords: [...prev.keywords, input] }));
    document.getElementById('keyword_input').value = '';
  };

  useEffect(() => {
    setUserInput((prev) => ({ ...prev, keywordGroups: [keyword] }));
  }, [keyword]);

  return (
    <div className="keyword_box">
      <div>
        <label>
          주제어
          <p>검색어 묶음을 대표하는 이름입니다.</p>
          <input
            required
            name="groupName"
            placeholder="ex. 서강대"
            onChange={(event) => setKeyword((prev) => ({ ...prev, groupName: event.target.value }))}
          />
        </label>
        <br />
        <label>
          주제어에 해당하는 검색어
          <p>최대 20개의 검색어를 배열로 설정할 수 있습니다.</p>
          {keyword.keywords.length > 0 && keyword.keywords.map((item) => <input key={item} value={item} readOnly />)}
          {keyword.keywords.length < 20 && (
            <input
              onKeyDown={(e) => e.preventDefault()}
              id="keyword_input"
              name="keywords"
              placeholder="서강대, 서강대학교, 서강대 컴공, 서강대 컴퓨터공학과 ..등"
            />
          )}
        </label>
      </div>
      <button type="button" onClick={enterKeyword}>
        추가
      </button>
    </div>
  );
}

export default KeywordBox;
