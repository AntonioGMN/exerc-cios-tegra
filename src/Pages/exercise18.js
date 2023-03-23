import { useEffect, useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";
import Section from "../components/section";
import TextInvisible from "../components/textInvisible";

export default function Exercise18() {
	const [temperaturaType, setTemperaturaType] = useState("");
	const [temperatura, setTemperatura] = useState("");
	const [equivalentTemperature, setEquivalentTemperature] = useState("");

	useEffect(() => {
		if (temperaturaType === "") setTemperatura("");

		if (temperatura.toLowerCase() === "f") {
			setEquivalentTemperature(
				((parseFloat(temperatura) / 5) * 9 - 32).toFixed(2)
			);
			return;
		}

		setEquivalentTemperature((temperatura * 9) / 5 + 32);
	}, [temperatura, temperaturaType]);

	return (
		<Form width="450px">
			<Row>
				<label>Você vai digitar a temperatura em qual escala (C/F)?:</label>
				<Input
					width="10%"
					type="text"
					value={temperaturaType}
					onChange={(e) => setTemperaturaType(e.target.value)}
				/>
			</Row>
			<Section
				collun="true"
				invisible={
					!(
						temperaturaType.toLowerCase() === "c" ||
						temperaturaType.toLowerCase() === "f"
					)
				}
			>
				<Row>
					<label>
						Digite a temperatura em
						{temperaturaType.toLowerCase() === "c" ? " Celsius" : " Fahrenheit"}:
					</label>
					<Input
						width="30%"
						type="number"
						value={temperatura}
						onChange={(e) => setTemperatura(e.target.value)}
					/>
				</Row>
				<TextInvisible invisible={temperatura === ""}>
					Temperatura equivalente em Fahrenheit: {equivalentTemperature}
				</TextInvisible>
			</Section>
		</Form>
	);
}
