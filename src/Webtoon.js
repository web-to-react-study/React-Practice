import React from 'react';

function Webtoon(props) {
    /* 컴포넌트 구현 */
    return (
        <div className="webtoonComponent">
            <img src={props.image} alt={props.title} style={{ width: '100%', height: 'auto' }}/>
            <h4>{props.title}</h4>
            <h5>{props.author}</h5>
            <h5>{props.episode}</h5>
            <h5>{props.rating}</h5>
        </div>
    );
}

export default Webtoon;
