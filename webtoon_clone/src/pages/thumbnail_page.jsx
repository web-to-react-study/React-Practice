import styled from "styled-components";
import ThumbnailCard from "../components/thumbnail_card";
import RecommendWebtoonInfo from "../data/recommend_webtoon_data";
import TotalWebtoonInfo from "../data/total_webtoon_data";

function ThumbnailPage() {
	return (
		<Section>
			<Heading>추천 목요웹툰</Heading>
			<RecommendCardContainer>
				{RecommendWebtoonInfo.map((object, index) => (
					<ThumbnailCard
						key={object.id}
						type={"recommend"}
						thumbnail={object.thumbnail}
						title={object.title}
						writer={object.writer}
						updated_story={object.updated_story}
						star={object.star}
					/>
				))}
			</RecommendCardContainer>
			<Heading>전체 목요웹툰</Heading>
			<TotalCardContainer>
				{TotalWebtoonInfo.map((object, index) => (
					<ThumbnailCard
						key={object.id}
						thumbnail={object.thumbnail}
						title={object.title}
						writer={object.writer}
						star={object.star}
					/>
				))}
			</TotalCardContainer>
		</Section>
	);
}

export default ThumbnailPage;

const Section = styled.div`
	display: flex;
	flex-direction: column;
`;

const Heading = styled.div`
	font-size: 18px;
	font-weight: bold;
	padding: 20px;
`;

const RecommendCardContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 0px 20px;
	gap: 20px;
`;

const TotalCardContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: repeat(5, 175px);
	padding: 0px 20px;
`;
