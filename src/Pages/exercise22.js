import { useEffect, useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";
import Section from "../components/section";

export default function Exercise22() {
	const [value, setValue] = useState("");
	const [table, setTable] = useState([]);

	useEffect(() => {
		if (value === "") return setTable([]);
		const resulte = [];

		for (let i = 1; i <= 10; i++) resulte.push(i * value);

		setTable(resulte);
	}, [value]);

	return (
		<Form>
			<Row>
				<label>Deseja a tabuada para qual valor?</label>
				<Input
					type="number"
					width="100px"
					min="0"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</Row>
			<Section column invisible={value === ""}>
				{table.map((x, i) => (
					<p key={x}>
						{value} X {i + 1} = {x}
					</p>
				))}
			</Section>
		</Form>
	);
}
