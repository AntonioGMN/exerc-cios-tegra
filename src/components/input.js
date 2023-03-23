import styled from "styled-components";

export const Input = styled.input`
	all: unset;

	width: ${(pros) => (pros.width ? pros.width : "auto")};
	height: ${(pros) => (pros.height ? pros.height : "40px")};
	padding-right: px;

	color: #000;
	font-size: 18px;
	text-align: end;

	background: #ffffff;
	border: 1px solid rgb(48 51 47 / 25%);
	border-radius: 12px;
	box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);

	:focus {
		text-align: right;
	}
`;

export default Input;
