import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";
import { someInputNotFilled } from "../utils";

export default function Exercise20() {
	const [valueA, setValueA] = useState("");
	const [valueB, setValueB] = useState("");

	function numbersBetWeen() {
		if (someInputNotFilled({ valueA, valueB })) return "--";

		let sum = 0;
		for (let i = parseInt(valueA); i <= parseInt(valueB); i++) sum += i;

		return sum;
	}

	return (
		<Form>
			<Row>
				<label>Numero incial:</label>
				<Input
					type="number"
					width="120px"
					value={valueA}
					onChange={(e) => setValueA(e.target.value)}
				/>
			</Row>
			<Row>
				<label>Numero final:</label>
				<Input
					type="number"
					width="120px"
					value={valueB}
					onChange={(e) => setValueB(e.target.value)}
				/>
			</Row>

			<Row>
				<p>Resultado</p>
				<p>{numbersBetWeen()}</p>
			</Row>
		</Form>
	);
}
