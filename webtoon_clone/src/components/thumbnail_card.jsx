import styled from "styled-components";

function ThumbnailCard(props) {
	return (
		<Section>
			<Thumbnail src={props.thumbnail} type={props.type} />
			<Title>{props.title}</Title>
			<Writer>{props.writer}</Writer>
			{props.type === "recommend" && (
				<UpdatedStory>{props.updated_story}</UpdatedStory>
			)}
			<Star>⭐ {props.star}</Star>
		</Section>
	);
}

export default ThumbnailCard;

const Section = styled.div``;

const Thumbnail = styled.img`
	width: ${(props) => (props.type === "recommend" ? "272px" : "160px")};
	height: ${(props) => (props.type === "recommend" ? "165px" : "207px")};

	background-color: skyblue;
	border: 1px solid lightgray;
	border-radius: 4px;
`;

const Title = styled.p`
	margin: 1px 0px;
	font-weight: bold;
`;

const Writer = styled.p`
	margin: 5px 0px;
	font-size: 13px;
	font-weight: 600;
`;

const UpdatedStory = styled.p`
	margin: 5px 0px;
	font-size: 13px;
	font-weight: 500;
	color: gray;
`;

const Star = styled.p`
	margin: 7px 0px;
	font-size: 12px;
	color: gray;
`;
