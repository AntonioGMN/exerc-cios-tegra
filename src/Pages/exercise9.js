import { useState } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";

export default function Exercise9() {
	const [seconds, setSeconds] = useState("");

	function toHour() {
		if (seconds === "") return "--";

		const hour = parseInt(seconds / 3600);
		const minutes = parseInt((seconds % 3600) / 60);
		const remainingSeconds = seconds - hour * 3600 - minutes * 60;

		return `${hour}:${minutes}:${remainingSeconds}`;
	}

	return (
		<Form>
			<label>Digite a duração em segundos:</label>
			<Input
				type="number"
				min="0"
				value={seconds}
				onChange={(e) => setSeconds(e.target.value)}
			/>
			<Row>
				<p>Segundos em horas:</p>
				<p>{toHour()}</p>
			</Row>
		</Form>
	);
}
