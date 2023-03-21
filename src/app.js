import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercio1 from "./Pages/exercio1";
import HomePage from "./Pages/HomePage";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" element={<Exercio1 />} /> */}
				<Route path="/" element={<HomePage />}></Route>
			</Routes>
		</BrowserRouter>
	);
}
