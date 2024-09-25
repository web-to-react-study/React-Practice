import './Card.css';

function RecommendCard({ thumbnail, title, author, rate, info }) {
  return (
    <div className="card_body">
      <img className="card_img" src={thumbnail} alt={`${title} 썸네일 이미지`} />
      <p>{title}</p>
      <p>{author}</p>
      <p>{info}</p>
      <p>⭐ {rate}</p>
    </div>
  );
}

export default RecommendCard;
