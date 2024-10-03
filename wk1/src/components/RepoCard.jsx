import styled from 'styled-components';

const Card = styled.div`
display: flex;
flex-direction: column;
`;
const Title = styled.h3`
margin: 0;
padding: 10px 0px;
`;
const P = styled.p`
margin: 0;
`;
const Thumbnail = styled.img`
position: relative;
width: ${({ $type }) => ($type === 0 ? '272px' : '160px')};
height: ${({ $type }) => ($type === 0 ? '165px' : '207px')};
overflow: ${({ $type }) => ($type === 0 ? 'visible' : 'hidden')}
`;

function RepoCard({title, author, rate, info, thumbnail, type}) {
    return (
      <Card>
            <Thumbnail $type={type} src={thumbnail}/>
            <Title>{title}</Title>
            <P>{author}</P>
            {type === 0 && <P>{info}</P>}
            <P>⭐️{rate}</P>
      </Card>
    );
  }

  export default RepoCard;