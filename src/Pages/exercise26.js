import { useEffect, useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";

export default function Exercise26() {
	const [word, setWord] = useState("");
	const [vowels, setVowels] = useState("");
	const [consonants, setConsonants] = useState("");

	useEffect(() => {
		if (word === "") {
			setVowels("--");
			setConsonants("--");
			return;
		}
		const consonantsArray = ["a", "e", "i", "o", "u"];
		let consonantsNumber = 0;

		for (let letters of word) {
			if (consonantsArray.includes(letters.toLowerCase())) consonantsNumber++;
		}

		setConsonants(consonantsNumber);
		setVowels(word.length - consonantsNumber);
	}, [word]);

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

			<Row>
				<p>Vogais:</p>
				<p>{vowels}</p>
			</Row>
			<Row>
				<p>Consoantes:</p>
				<p>{consonants}</p>
			</Row>
		</Form>
	);
}
