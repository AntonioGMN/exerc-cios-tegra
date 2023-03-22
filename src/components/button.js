import styled from "styled-components";

const ChangePage = styled.button`
	cursor: pointer;
	border: none;

	width: 100px;
	height: 80px;
	border-radius: 15%;

	:disabled {
		cursor: not-allowed;
	}
`;

export default ChangePage;
