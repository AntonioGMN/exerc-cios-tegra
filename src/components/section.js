import styled from "styled-components";

const Section = styled.section`
	width: 100%;
	gap: 12px;

	display: ${(props) => (props.invisible ? "none" : "flex")};
	justify-content: space-around;

	div {
		height: 100%;
		width: auto;
	}

	span {
		display: inline-block;
		border-radius: 12px;

		width: 100%;
		height: 100%;

		font-style: normal;
		font-size: 14px;
		font-weight: 700;
		line-height: 18px;
		text-align: center;
		color: #ffffff;

		padding: 16px;
		background: #c0208f;
	}
`;

export default Section;
