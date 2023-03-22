import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Exercise9 from "./Pages/exercise9";
import Exercise1 from "./Pages/exercise1";
import Exercise2 from "./Pages/exercise2";
import Exercise3 from "./Pages/exercise3";
import Exercise4 from "./Pages/exercise4";
import Exercise5 from "./Pages/exercise5";
import Exercise6 from "./Pages/exercise6";
import Exercise7 from "./Pages/exercise7";
import Exercise8 from "./Pages/exercise8";

import HomePage from "./Pages/HomePage.jsx";
import Exercise10 from "./Pages/exercise10";
import Exercise11 from "./Pages/exercise11";
import Exercise12 from "./Pages/exercise12";

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
					<Route path="/exercise/5" element={<Exercise5 />} />
					<Route path="/exercise/6" element={<Exercise6 />} />
					<Route path="/exercise/7" element={<Exercise7 />} />
					<Route path="/exercise/8" element={<Exercise8 />} />
					<Route path="/exercise/9" element={<Exercise9 />} />
					<Route path="/exercise/10" element={<Exercise10 />} />
					<Route path="/exercise/11" element={<Exercise11 />} />
					<Route path="/exercise/12" element={<Exercise12 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
