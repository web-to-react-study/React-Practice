import React from 'react';
import styled from 'styled-components'


function WebtoonCard({ imageUrl, title, author, latestEpisode, rating, type }) {
    return (
        <Container $type={type}>
            <Thumbnail $type={type} src={imageUrl} />
            <InfoContainer>
                <Title>{title}</Title>
                <Author>{author}</Author>
                {latestEpisode && <Episode>{latestEpisode}</Episode>}
                <Rating>⭐ {rating}</Rating>
            </InfoContainer>
        </Container>
    );
}

export default WebtoonCard;


const Container = styled.div`
    width: ${({ $type }) => ($type === 'recommend' ? '300px' : '150px')};
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 0;
`;
const Thumbnail = styled.img`
    width:  ${({ $type }) => ($type === 'recommend' ? '300px' : '200')};
    height: ${({ $type }) => ($type === 'recommend' ? '200px' : 'auto')};
    border-radius: 4px;
    margin-bottom: 10px;
    object-fit: cover; 
    object-position: bottom;
    border: 1px solid rgba(128, 128, 128, 0.2); /* 연한 회색 라인 추가 */
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    text-align: left;
`;

const Title = styled.h3`
    font-size: 15px;
    font-weight: bold;
    color: black;
    margin: 0;
`;

const Author = styled.p`
    font-size: 14px;
    color: black;
    margin: 4px 0;
`;

const Episode = styled.p`
    font-size: 14px;
    color: #666666;
`;

const Rating = styled.p`
    font-size: 13px;
    font-weight: bold;
    margin-top: 4px;
    color: #aaaaaa;
`;

