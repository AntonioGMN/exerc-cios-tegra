import { useEffect, useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";
import Section from "../components/section";
import { someInputNotFilled } from "../utils";

export default function Exercise12() {
	const [valueA, setValueA] = useState("");
	const [valueB, setValueB] = useState("");
	const [valueC, setValueC] = useState("");

	const [delta, setDelta] = useState(null);
	const [x1, setX1] = useState(null);
	const [x2, setX2] = useState(null);

	useEffect(() => {
		if (someInputNotFilled({ valueA, valueB, valueC })) {
			setDelta(null);
			return;
		}

		setDelta(Math.pow(valueB, 2) - 4 * valueA * valueC);

		setX1(((-1 * valueB + Math.sqrt(delta)) / (2 * valueA)).toFixed(4));
		setX2(((-1 * valueB - Math.sqrt(delta)) / (2 * valueA)).toFixed(4));
	}, [valueA, valueB, valueC, delta]);

	return (
		<Form>
			<label>Digite o coeficiente a:</label>
			<Input
				type="number"
				value={valueA}
				onChange={(e) => setValueA(e.target.value)}
			/>
			<label>Digite o coeficiente b:</label>
			<Input
				type="number"
				value={valueB}
				onChange={(e) => setValueB(e.target.value)}
			/>
			<label>Digite o coeficiente c:</label>
			<Input
				type="number"
				value={valueC}
				onChange={(e) => setValueC(e.target.value)}
			/>
			{delta !== null &&
				(delta >= 0 ? (
					<>
						<Row>
							<p>x1:</p>
							<p>{x1}</p>
						</Row>
						<Row>
							<p>x2:</p>
							<p>{x2}</p>
						</Row>
					</>
				) : (
					<Section invisible={delta > 0}>
						<p>Esta equação não possui raízes reais</p>
					</Section>
				))}
		</Form>
	);
}
