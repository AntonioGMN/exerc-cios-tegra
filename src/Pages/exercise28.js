import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";
import { someInputNotFilled } from "../utils";

export default function Exercise28() {
	const [valueA, setValueA] = useState("");
	const [valueB, setValueB] = useState("");
	const [valueC, setValueC] = useState("");
	const [valueD, setValueD] = useState("");
	const [valueE, setValueE] = useState("");

	function minorAndMajor() {
		if (someInputNotFilled({ valueA, valueB, valueC, valueD, valueE }))
			return "--";

		const ord = [valueA, valueB, valueC, valueD, valueE];

		for (let i = 0; i < ord.length; i++) {
			for (let j = i + 1; j < ord.length; j++) {
				if (parseFloat(ord[j]) < parseFloat(ord[i])) {
					let copi = ord[j];
					ord[j] = ord[i];
					ord[i] = copi;
				}
			}
		}

		return ord[0] + " e " + ord.at(-1);
	}

	return (
		<Form>
			<label>Valores: </label>
			<Row>
				<Input
					type="number"
					width="60px"
					value={valueA}
					onChange={(e) => setValueA(e.target.value)}
				/>
				<Input
					type="number"
					width="60px"
					value={valueB}
					onChange={(e) => setValueB(e.target.value)}
				/>
				<Input
					type="number"
					width="60px"
					value={valueC}
					onChange={(e) => setValueC(e.target.value)}
				/>
				<Input
					type="number"
					width="60px"
					value={valueD}
					onChange={(e) => setValueD(e.target.value)}
				/>
				<Input
					type="number"
					width="60px"
					value={valueE}
					onChange={(e) => setValueE(e.target.value)}
				/>
			</Row>

			<Row>
				<p>Saída:</p>
				<p>{minorAndMajor()}</p>
			</Row>
		</Form>
	);
}
