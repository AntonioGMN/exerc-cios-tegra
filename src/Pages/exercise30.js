import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";

export default function Exercise30() {
	const [number, setNumber] = useState("");

	function difinedNumber() {
		if (number === "") return "--";

		const realNumber = parseInt(number);
		const ones = [
			"",
			"Um",
			"Dois",
			"Três",
			"Quatro",
			"Cinco",
			"Seis",
			"Sete",
			"Oito",
			"Nove",
		];

		const beforeTwenty = [
			"Dez",
			"Onze",
			"Doze",
			"Treze",
			"Quatorze",
			"Quinze",
			"Dezesseis",
			"Dezessete",
			"Dezoito",
			"Dezenove",
		];

		const tens = [
			"",
			"",
			"Vinte",
			"Trinta",
			"Quarenta",
			"Cinquenta",
			"Sessenta",
			"Setenta",
			"Oitenta",
			"Noventa",
			"Cem",
		];

		if (realNumber < 10) {
			console.log(ones[number]);
			return ones[number];
		} else if (realNumber < 20) {
			return beforeTwenty[number.at(-1)];
		}

		let complemente = "";
		if (number.at(-1) > 0 && realNumber !== 100)
			complemente = " e " + ones[number.at(-1)];

		return tens[number[0]] + complemente;
	}

	return (
		<Form width="250px">
			<Row>
				<label>Número:</label>
				<Input
					type="number"
					max={99}
					min={0}
					value={number}
					onChange={(e) => setNumber(e.target.value)}
				/>
			</Row>
			<Row>
				<p>Saida: </p>
				<p> {difinedNumber()}</p>
			</Row>
		</Form>
	);
}
