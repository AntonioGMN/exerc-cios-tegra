import { useState, useEffect } from "react";
import { Form } from "../components/form";
import Input from "../components/input";
import Row from "../components/row";
import { handlerInput, someInputNotFilled } from "../utils";

export default function Exercise14() {
	const [change, setChange] = useState(null);
	const [sale, setSale] = useState({
		price: "",
		amount: "",
		revicevedMonney: "",
	});

	useEffect(() => {
		const { price, amount, revicevedMonney } = sale;

		if (someInputNotFilled(sale)) {
			setChange(null);
			return;
		}

		setChange((revicevedMonney - price * amount).toFixed(2));
	}, [sale]);

	return (
		<Form width="400px">
			<label>Digite o preço unitário do produto</label>
			<Input
				type="number"
				min="0"
				name="price"
				value={sale.price}
				onChange={(e) => handlerInput(sale, setSale, e)}
			/>
			<label>Digite a quantidade comprada</label>
			<Input
				type="number"
				min="0"
				name="amount"
				value={sale.amount}
				onChange={(e) => handlerInput(sale, setSale, e)}
			/>
			<label>Dinheiro Recebido</label>
			<Input
				type="number"
				min="0"
				name="revicevedMonney"
				value={sale.revicevedMonney}
				onChange={(e) => handlerInput(sale, setSale, e)}
			/>
			{change !== null &&
				(change >= 0 ? (
					<Row>
						<p>Troco:</p>
						<p>{change}</p>
					</Row>
				) : (
					<p>DINHEIRO INSUFICIENTE. FALTAM {change} REAIS</p>
				))}
		</Form>
	);
}
