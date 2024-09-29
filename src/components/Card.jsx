function Card({ thumbnail, title, author, rate }) {
  return (
    <div className="card_body">
      <img className="card_img_v" src={thumbnail} alt={`${title} 썸네일 이미지`} />
      <p>{title}</p>
      <p>{author}</p>
      <p>⭐ {rate}</p>
    </div>
  );
}

export default Card;
