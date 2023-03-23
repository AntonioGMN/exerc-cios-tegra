import styled from "styled-components";

const Row = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	p {
		text-align: center;

		:first-child {
			width: ${(pros) => (pros.one ? "center" : "auto")};
			white-space: nowrap;
		}
	}

	input {
		height: 20%;
		margin-left: 8px;
		border-radius: 5px;
	}

	label {
		width: auto;

		:first-child {
			white-space: nowrap;
		}
	}
`;

export default Row;
