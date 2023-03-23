import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";
import { someInputNotFilled } from "../utils";

export default function Exercise23() {
	const [valueA, setValueA] = useState("");
	const [valueB, setValueB] = useState("");

	function sumOddNumbers() {
		if (someInputNotFilled({ valueA, valueB })) return "--";
		let sum = 0;

		for (let i = parseInt(valueA); i < parseInt(valueB); i++)
			if (i % 2 !== 0) sum += i;

		return sum;
	}

	return (
		<Form>
			<Row>
				<label>Digite dois números :</label>
				<Input
					type="number"
					min={0}
					width="60px"
					value={valueA}
					onChange={(e) => setValueA(e.target.value)}
				/>
				<Input
					type="number"
					min={0}
					width="60px"
					value={valueB}
					onChange={(e) => setValueB(e.target.value)}
				/>
			</Row>

			<Row>
				<p>SOMA DOS ÍMPARES =</p>
				<p>{sumOddNumbers()}</p>
			</Row>
		</Form>
	);
}
