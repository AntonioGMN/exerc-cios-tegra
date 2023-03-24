import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";
import Section from "../components/section";

export default function Exercise27() {
	const [word, setWord] = useState("");

	function isPalindromo() {
		let wordOposte = "";

		for (let i = word.length - 1; i >= 0; i--) {
			wordOposte += word[i];
		}

		if (wordOposte === word) return "É palíndroma";
		return " Não é palíndroma";
	}

	return (
		<Form>
			<Row>
				<label>Palavra:</label>
				<Input
					type="text"
					width="120px"
					value={word}
					onChange={(e) => setWord(e.target.value)}
				/>
			</Row>

			<Section invisible={word === ""}>
				<p>{isPalindromo()}</p>
			</Section>
		</Form>
	);
}
