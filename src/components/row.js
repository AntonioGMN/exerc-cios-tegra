import styled from "styled-components";

const Row = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	p {
		text-align: center;

		:first-child {
			width: auto;
			white-space: nowrap;
		}
	}
`;

export default Row;
