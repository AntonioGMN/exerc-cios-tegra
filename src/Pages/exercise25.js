import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";

export default function Exercise25() {
	const [signo, setSigno] = useState("");

	function difinedSigno() {
		let [day, month] = signo.split("/");
		month = parseInt(month);

		if (month === 1) {
			if (day <= 20) return "Capricórnio";
			return "Aquário";
		} else if (month === 2) {
			if (day <= 19) return "Aquário";
			return "Peixes";
		} else if (month === 3) {
			if (day <= 20) return "Peixes";
			return "Áries";
		} else if (month === 4) {
			if (day <= 20) return "Áries";
			return "Touro";
		} else if (month === 5) {
			if (day <= 20) return "Touro";
			return "Gêmeos";
		} else if (month === 6) {
			if (day <= 20) return "Gêmeos";
			return "Câncer'";
		} else if (month === 7) {
			if (day <= 22) return "Câncer";
			return "Leão";
		} else if (month === 8) {
			if (day <= 22) return "Leão";
			return "Virgem";
		} else if (month === 9) {
			if (day <= 22) return "Virgem";
			return "Libra";
		} else if (month === 10) {
			if (day <= 22) return "Libra";
			return "Escorpião";
		} else if (month === 11) {
			if (day <= 21) return "Escorpião";
			return "Sagitário";
		} else if (month === 12) {
			if (day <= 21) return "Sagitário";
			return "Capricórnio";
		}

		return "--";
	}

	return (
		<Form>
			<label>Digite a duração em segundos:</label>
			<Input
				type="text"
				value={signo}
				onChange={(e) => setSigno(e.target.value)}
			/>
			<Row>
				<p>Signo:</p>
				<p>{difinedSigno()}</p>
			</Row>
		</Form>
	);
}
