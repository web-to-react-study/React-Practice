import styled from "styled-components";
import { Helmet } from "react-helmet-async";

export default function LandingPage() {
	return (
		<>
			<Helmet>
				<title>홈페이지</title>
			</Helmet>
			<>홈페이지 입니다요</>
			<Links>
				<LinkTab href="/main">🤩 웹툰 페이지로 순간이동</LinkTab>
				<LinkTab href="/signup">💫 회원가입 페이지로 순간이동</LinkTab>
			</Links>
		</>
	);
}

const Links = styled.span`
	display: flex;
	padding: 20px;
	gap: 20px;
`;

const LinkTab = styled.a`
	text-decoration: none;
	color: black;
`;
