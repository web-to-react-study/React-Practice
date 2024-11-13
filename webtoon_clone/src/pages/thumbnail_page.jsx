import styled from "styled-components";
import ThumbnailCard from "../components/thumbnail_card";
import RecommendWebtoonInfo from "../data/recommend_webtoon_data";
import {
	PopularWebtoonInfo,
	UpdateWebtoonInfo,
	ViewWebtoonInfo,
	StarWebtoonInfo,
} from "../data";
import { useState } from "react";
import { LuDot } from "react-icons/lu";
import { Helmet } from "react-helmet-async";

function ThumbnailPage() {
	const [orderBy, setOrderBy] = useState("인기순");

	return (
		<Main>
			<Helmet>
				<title>메인 페이지</title>
			</Helmet>
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
				<TotalHeading>
					<Heading>전체 목요웹툰</Heading>
					<OrderHeadingWrapper>
						<OrderHeading
							selected={orderBy === "인기순"}
							onClick={() => setOrderBy("인기순")}
						>
							인기순
						</OrderHeading>
						<LuDot />
						<OrderHeading
							selected={orderBy === "업데이트순"}
							onClick={() => setOrderBy("업데이트순")}
						>
							업데이트순
						</OrderHeading>
						<LuDot />
						<OrderHeading
							selected={orderBy === "조회순"}
							onClick={() => setOrderBy("조회순")}
						>
							조회순
						</OrderHeading>
						<LuDot />
						<OrderHeading
							selected={orderBy === "별점순"}
							onClick={() => setOrderBy("별점순")}
						>
							별점순
						</OrderHeading>
					</OrderHeadingWrapper>
				</TotalHeading>
				<TotalCardContainer>
					{orderBy == "인기순" &&
						PopularWebtoonInfo.map((object, index) => (
							<ThumbnailCard
								key={object.id}
								thumbnail={object.thumbnail}
								title={object.title}
								writer={object.writer}
								star={object.star}
							/>
						))}
				</TotalCardContainer>
				<TotalCardContainer>
					{orderBy == "업데이트순" &&
						UpdateWebtoonInfo.map((object, index) => (
							<ThumbnailCard
								key={object.id}
								thumbnail={object.thumbnail}
								title={object.title}
								writer={object.writer}
								star={object.star}
							/>
						))}
				</TotalCardContainer>
				<TotalCardContainer>
					{orderBy == "조회순" &&
						ViewWebtoonInfo.map((object, index) => (
							<ThumbnailCard
								key={object.id}
								thumbnail={object.thumbnail}
								title={object.title}
								writer={object.writer}
								star={object.star}
							/>
						))}
				</TotalCardContainer>
				<TotalCardContainer>
					{orderBy == "별점순" &&
						StarWebtoonInfo.map((object, index) => (
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
		</Main>
	);
}

export default ThumbnailPage;

const Main = styled.main`
	display: flex;
	justify-content: center;
`;

const Section = styled.div`
	width: 842px;
	// border: 1px solid red;
`;

const Heading = styled.div`
	font-size: 20px;
	font-weight: bold;
	padding: 20px 0px 20px 0px;
`;

const TotalHeading = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 0px;
`;

const OrderHeadingWrapper = styled.div`
	display: flex;
	justify-content: center;
	background: none;
	border: none;
`;

const OrderHeading = styled.button`
	font-family: NanumSquareNeo;
	font-size: 14px;
	color: ${(props) => (props.selected ? "limegreen" : "gray")};
	background: none;
	border: none;
	cursor: pointer;
`;

const RecommendCardContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
`;

const TotalCardContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: repeat(5, 170px);
`;
