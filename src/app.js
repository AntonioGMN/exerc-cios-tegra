import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Exercise1 from "./Pages/exercise1";
import Exercise2 from "./Pages/exercise2";
import Exercise3 from "./Pages/exercise3";
import Exercise4 from "./Pages/exercise4";

import HomePage from "./Pages/HomePage.jsx";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />}>
					<Route index element={<Navigate to="/exercise/1" />} />
					<Route path="/exercise/1" element={<Exercise1 />} />
					<Route path="/exercise/2" element={<Exercise2 />} />
					<Route path="/exercise/3" element={<Exercise3 />} />
					<Route path="/exercise/4" element={<Exercise4 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
