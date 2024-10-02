import styled from 'styled-components';

function YouTubeCard({ type, thumbnail, title, hits, nickname, created_at }) {
  return (
    <Container>
      <Thumbnail $type={type} src={thumbnail} alt={`${title}의 썸네일 이미지`} />
      {/* 나머지 요소들 배치 .. */}
    </Container>
  );
}

export default YouTubeCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Thumbnail = styled.img`
  width: ${(prop) => (prop.$type === 'shorts' ? '308px' : '470px')};
  height: ${({ $type }) => ($type === 'shorts' ? '546px' : '264px')};
  object-fit: cover;
  object-position: center;
`;
