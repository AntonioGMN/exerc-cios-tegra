import styled from "styled-components";

const TextInvisible = styled.p`
	width: 100%;

	display: ${(props) => (props.invisible ? "none" : "flex")};
`;

export default TextInvisible;
