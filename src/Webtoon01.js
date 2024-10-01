import React from 'react';

function Webtoon(props) {
    return (
        <div className="naver_webtoon">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
            <p>{props.rating}</p>
        </div>
    );
}

export default Webtoon;
