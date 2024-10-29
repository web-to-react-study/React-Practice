import styled, { css } from 'styled-components';

function Card({ type, thumbnail, title, author, rate, info = '' }) {
  return (
    <Container>
      <Thumbnail $isRecommend={type === 'recommend'} src={thumbnail} alt={`${title} 썸네일 이미지`} />
      <InfoBox>
        <TitleText>{title}</TitleText>
        <p>{author}</p>
        {type === 'recommend' && <InfoText>{info}</InfoText>}
        <Star>⭐ {rate}</Star>
      </InfoBox>
    </Container>
  );
}

export default Card;

const recommendStyle = css`
  width: 272px;
  height: 165px;

  object-position: center;
  object-fit: cover;

  background-color: pink;
`;

const defaultStyle = css`
  width: 160px;
  height: 207px;
`;

const Container = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const Thumbnail = styled.img`
  ${({ $isRecommend }) => ($isRecommend ? recommendStyle : defaultStyle)};
  display: flex;
  flex-shrink: 0;
  border-radius: 4px;
`;

const InfoBox = styled.div`
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Star = styled.p`
  color: #999999;
  font-size: 13px;
`;

const InfoText = styled.p`
  color: #666666;
`;

const TitleText = styled.p`
  font-size: 15px;
  font-weight: 600;
`;
