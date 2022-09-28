// import { getCurrecy } from "../util/apilayer-api";
import symbols from '../data/symbol.json';
import { Route, Routes } from 'react-router-dom';
import { ConvertBar } from '../pages/ConvertBar/ConvertBar';
import { ExchangeRates } from '../pages/ExchangeRates/ExchangeRates';
import { Box } from './Box/Box';
import { LinksButtonBlock } from './LinksButtonBlock/LinksButtonBlock';

export const App = () => {
  // getCurrecy().then((resp) => {
  // 	console.log(resp.data.symbols);
  // });
  console.log(symbols);
  return (
    <Box width="100%">
      <Box
        maxWidth={1056}
        height={350}
        bg="rgb(255, 255, 255)"
        m="100px auto"
        borderRadius={8}
        overflow="hidden"
        border="1px solid red"
      >
        <LinksButtonBlock width="100%" height={56}></LinksButtonBlock>
        <Routes>
          <Route path="/exchange-rates" element={<ExchangeRates />}></Route>
          <Route path="/" element={<ConvertBar />}></Route>
        </Routes>
      </Box>
    </Box>
  );
};
