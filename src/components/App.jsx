// import { getCurrecy } from "../util/apilayer-api";
import symbols from "../data/symbol.json";
import { Route, Routes } from "react-router-dom";
import { ConvertBar } from "../pages/ConvertBar/ConvertBar";
import { ExchangeRates } from "../pages/ExchangeRates/ExchangeRates";
import { Box } from "./Box/Box";

function App() {
	// getCurrecy().then((resp) => {
	// 	console.log(resp.data.symbols);
	// });
	console.log(symbols);
	return (
		<Box width={1056} heigth={184} bg="red">
			<Routes>
				<Route path="/convert-bar" element={<ConvertBar />}></Route>
				<Route path="/exchange-rates" element={<ExchangeRates />}></Route>
			</Routes>
		</Box>
	);
}

export default App;
