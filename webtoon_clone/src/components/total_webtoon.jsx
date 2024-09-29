function TotalWebtoon(props) {
	return (
		<section className="total-container">
			<img className="img" src={props.thumbnail} />
			<p className="title">{props.title}</p>
			<p className="writer">{props.writer}</p>
			<p className="star">⭐ {props.star}</p>
		</section>
	);
}

export default TotalWebtoon;
