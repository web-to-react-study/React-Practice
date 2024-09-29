import './WebtoonInfo.css'

function RecommendWebtoonInfo({thumbnail, title, writer, last, star}) 
{
    return (
        <div className="InfoBody">
            <img className="InfoRecommendInfo" src={thumbnail} alt={"${title} 썸네일"} />
            <h3>{title}</h3>
            <p>{writer}</p>
            <p>{last}</p>
            <p>★ {star}</p>
        </div>
    );
}

export default RecommendWebtoonInfo;