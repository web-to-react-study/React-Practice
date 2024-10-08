import styled from 'styled-components';

const ListSpotWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ComponentHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0;
`;

const TitleArea = styled.div`
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
`;

const TabControl = styled.div`
  display: flex;
  align-items: center;

  button {
    margin: 0 8px;
    padding: 8px 0;
    border: none;
    background-color: transparent; // 배경색을 투명하게 만들어 버튼이 보이지 않도록
    cursor: pointer;
    font-family: Pretendard, Helvetica, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "맑은 고딕", "Malgun Gothic", "돋움", Dotum, sans-serif;
    font-size: 12px;
    color: var(--color-text-primary); // 기본 글자 색상

    &:hover {
      color: var(--color-text-highlight); // 호버 시 글자 색상 변경
    }

    &.selected {
      color: var(--color-text-highlight); // 선택된 버튼의 글자 색상
    }

    // 가운데 점을 추가
    &::after {
      content: '·'; // 가운데 점을 표시
      margin-left: 8px;
      color: var(--color-text-secondary); // 점 색상
    }

    // 마지막 버튼에는 점이 없도록
    &:last-child::after {
      content: '';
    }
  }
`;



const RecommendList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
`;

const ListItem_recommend = styled.li`
  margin: 8px;
  width: 272px;
  font-family: Pretendard, Helvetica, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "맑은 고딕", "Malgun Gothic", "돋움", Dotum, sans-serif;
  font-size: 12px;

  &:hover {
    background-color: var(--color-bg-weekday);
    border-radius: 8px;
  }
`;

const ListItem_all = styled.li`
  margin: 20px;
  width: 110px;
  font-family: Pretendard, Helvetica, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "맑은 고딕", "Malgun Gothic", "돋움", Dotum, sans-serif;
  font-size: 12px;

  &:hover {
    background-color: var(--color-bg-weekday);
    border-radius: 8px;
  }
`;


const PosterLink = styled.a`
  display: block;
  text-decoration: none;
`;

const ThumbnailArea = styled.div`
  width: 100%;
  height: 150px; // 카드의 높이를 조정할 수 있습니다.
  background-color: var(--color-bg-primary);
  position: relative;
  border-radius: 4px; // 모든 모서리를 둥글게
  overflow: hidden;
`;

const PosterImage = styled.img`
  width: auto;
  height: 100%;
`;


const InfoArea = styled.div`
  padding: 8px 0;
`;

const ContentTitle = styled.span`
  font-weight: bold;
  display: block;
  margin-bottom: 4px;
`;

const ContentAuthor = styled.span`
  display: block;
  color: #555;
  margin-bottom: 4px;
`;

const RatingArea = styled.span`
  display: flex;
  align-items: center;

  i {
    margin-right: 4px;
  }
`;

const WebtoonList = () => {
  const recommendedWebtoons = [
    {
      title: '청춘 러브썸',
      author: '홍덕 / NEMONE',
      imageUrl: 'https://image-comic.pstatic.net/webtoon/828920/thumbnail/titledescimage/frontImage_391fbfdc-070f-4373-be3a-3560ac5f55af.png',
      link: 'https://comic.naver.com/webtoon/list?titleId=828920',
      episode: '8화',
      rating: '9.98',
      isRecommend: true,
    },
    {
      title: '나만 보는 탑 공략집',
      author: '사도 / X-NAME / 쾌조',
      imageUrl: 'https://image-comic.pstatic.net/webtoon/823434/thumbnail/titledescimage/frontImage_47f5222e-2bd7-490e-b8e0-183e7b7fd0e1.png',
      link: 'https://comic.naver.com/webtoon/list?titleId=823434',
      episode: '26화',
      rating: '9.93',
      isRecommend: true,
    },
    {
      title: '그냥 선생님',
      author: '연일',
      imageUrl: 'https://image-comic.pstatic.net/webtoon/804333/thumbnail/titledescimage/frontImage_ecea4635-1755-41f0-8160-da8f615f93db.png',
      link: 'https://comic.naver.com/webtoon/list?titleId=804333',
      episode: '183화',
      rating: '9.97',
      isRecommend: true,
    },
  ];

  const allWebtoons = [
    {
      title: '김부장',
      author: '박만사, 남자의 이야기 / 정종택',
      imageUrl: 'https://image-comic.pstatic.net/webtoon/783053/thumbnail/thumbnail_IMAG21_d7732f14-26da-4e35-8762-660cc87b53f1.jpg',
      link: 'https://comic.naver.com/webtoon/list?titleId=783053&tab=tue',
      episode: '153화',
      rating: '9.59',
      isRecommend: false,
    },
    {
      title: '마루는 강쥐',
      author: '모죠',
      imageUrl: 'https://image-comic.pstatic.net/webtoon/796152/thumbnail/thumbnail_IMAG21_26b9c1d8-ca2d-4fc7-87ea-a3334634236a.jpg',
      link: 'https://comic.naver.com/webtoon/list?titleId=796152&tab=tue',
      episode: '113화',
      rating: '9.98',
      isRecommend: false,
    },
    {
      title: '좋아? 죽어!',
      author: '김용키, 박만사 / 죠',
      imageUrl: 'https://image-comic.pstatic.net/webtoon/821192/thumbnail/thumbnail_IMAG21_156483ac-3740-4cbf-8150-0f24595bae52.jpg',
      link: 'https://comic.naver.com/webtoon/list?titleId=821192&tab=tue',
      episode: '71화',
      rating: '9.48',
      isRecommend: false,
    },
    {
      title: '서울 자가 대기업에 다니는 김 부장 이야기',
      author: '명량 / 김병곤 / 송희구',
      imageUrl: 'https://image-comic.pstatic.net/webtoon/819929/thumbnail/thumbnail_IMAG21_f1ca00e5-9b30-44d3-a1ee-7a04d539002a.jpg',
      link: 'https://comic.naver.com/webtoon/list?titleId=819929&tab=tue',
      episode: '41화',
      rating: '9.95',
      isRecommend: false,
    },
    {
      title: '내가 키운 S급들',
      author: 'seri / 비완 / 근서',
      imageUrl: 'https://image-comic.pstatic.net/webtoon/784248/thumbnail/thumbnail_IMAG21_20a8aca7-23d3-4bc0-9916-a31ebc884ca8.jpg',
      link: 'https://comic.naver.com/webtoon/list?titleId=784248&tab=tue',
      episode: '151화 : 집으로',
      rating: '9.91',
      isRecommend: false,
    },
    
  ];

  return (
    <ListSpotWrap>
      <ComponentHead>
        <TitleArea>
          <h2>추천 화요웹툰</h2>
        </TitleArea>
      </ComponentHead>
      <RecommendList>
        {recommendedWebtoons.map((webtoon) => (
          <ListItem_recommend key={webtoon.title}>
            <PosterLink href={webtoon.link}>
              <ThumbnailArea>
                <PosterImage src={webtoon.imageUrl} alt={webtoon.title} />
              </ThumbnailArea>
            </PosterLink>
            <InfoArea>
              <ContentTitle>
                <a href={webtoon.link}>{webtoon.title}</a>
              </ContentTitle>
              <ContentAuthor>{webtoon.author}</ContentAuthor>
              {/* isRecommend가 true일 때만 episode 출력 */}
              {webtoon.isRecommend && <p>{webtoon.episode}</p>}
              <RatingArea>
                <i>⭐</i>
                {webtoon.rating}
              </RatingArea>
            </InfoArea>
          </ListItem_recommend>
        ))}
      </RecommendList>

      <ComponentHead>
        <TitleArea>
          <h2>전체 화요웹툰</h2>
        </TitleArea>
        <TabControl>
          <button type="button" className="selected">인기순</button>
          <button type="button">업데이트순</button>
          <button type="button">조회순</button>
          <button type="button">별점순</button>
        </TabControl>
      </ComponentHead>

      <RecommendList>
        {allWebtoons.map((webtoon) => (
          <ListItem_all key={webtoon.title}>
            <PosterLink href={webtoon.link}>
              <ThumbnailArea>
                <PosterImage src={webtoon.imageUrl} alt={webtoon.title} />
              </ThumbnailArea>
            </PosterLink>
            <InfoArea>
              <ContentTitle>
                <a href={webtoon.link}>{webtoon.title}</a>
              </ContentTitle>
              <ContentAuthor>{webtoon.author}</ContentAuthor>
              {/* 전체 웹툰은 episode 정보가 필요하지 않으므로 주석 처리 */}
              <RatingArea>
                <i>⭐</i>
                {webtoon.rating}
              </RatingArea>
            </InfoArea>
          </ListItem_all>
        ))}
      </RecommendList>
    </ListSpotWrap>
  );
};

export default WebtoonList;

