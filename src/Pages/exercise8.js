import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";
import { someInputNotFilled } from "../utils";

export default function Exercise8() {
	const [lengthA, setLengthA] = useState("");
	const [lengthB, setLengthB] = useState("");
	const [lengthC, setLengthC] = useState("");

	function square() {
		if (someInputNotFilled({ lengthA, lengthB, lengthC })) return "--";

		return (lengthA * lengthA).toFixed(4);
	}

	function triangle() {
		if (someInputNotFilled({ lengthA, lengthB, lengthC })) return "--";

		return ((lengthA * lengthB) / 2).toFixed(4);
	}

	function trapeze() {
		if (someInputNotFilled({ lengthA, lengthB, lengthC })) return "--";

		return (((parseFloat(lengthA) + parseFloat(lengthB)) * lengthC) / 2).toFixed(
			4
		);
	}

	return (
		<Form>
			<label>Digite a medida A</label>
			<Input
				type="number"
				min="0"
				value={lengthA}
				onChange={(e) => setLengthA(e.target.value)}
			/>
			<label>Digite a medida B</label>
			<Input
				type="number"
				min="0"
				value={lengthB}
				onChange={(e) => setLengthB(e.target.value)}
			/>
			<label>Digite a medida C</label>
			<Input
				type="number"
				min="0"
				value={lengthC}
				onChange={(e) => setLengthC(e.target.value)}
			/>
			<Row>
				<p>Área do quadrado:</p>
				<p>{square()}</p>
			</Row>
			<Row>
				<p>Área do triângulo:</p>
				<p>{triangle()}</p>
			</Row>
			<Row>
				<p>Área do trapézio:</p>
				<p>{trapeze()}</p>
			</Row>
		</Form>
	);
}
