import './WebtoonInfo.css'

function WebtoonInfo({thumbnail, title, writer, star})
{
    return (
        <div className="InfoBody">
            <img className="InfoImg" src={thumbnail} alt={"${title} 썸네일"}></img>
            <h3>{title}</h3>
            <p>{writer}</p>
            <p>★ {star}</p>
        </div>
    );
}

export default WebtoonInfo;