import { useEffect, useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";
import Section from "../components/section";

export default function Exercise21() {
	const [value, setValue] = useState("");
	const [pairs, setPairs] = useState([]);

	useEffect(() => {
		if (value === "") setPairs([]);
		const resulte = [];

		for (let i = 2; i <= parseInt(value); i++) {
			if (i % 2 === 0) resulte.push(i);
		}

		setPairs(resulte);
	}, [value]);

	console.log(pairs);

	return (
		<Form>
			<Row>
				<label>Digite o valor de X:</label>
				<Input
					type="number"
					width="100px"
					min="0"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</Row>
			<Section column invisible={value === ""}>
				{pairs.map((x) => (
					<p key={x}>{x}</p>
				))}
			</Section>
		</Form>
	);
}
