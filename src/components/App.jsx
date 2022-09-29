// import { getCurrecy } from "../util/apilayer-api";
import { Route, Routes } from 'react-router-dom';
import { Conver } from '../pages/Convert/Convert';
import { ExchangeRates } from '../pages/ExchangeRates/ExchangeRates';
import { Box } from './Box/Box';
import { LinksButtonBlock } from './LinksButtonBlock/LinksButtonBlock';

export const App = () => {
  // getCurrecy().then((resp) => {
  // 	console.log(resp.data.symbols);
  // });

  return (
    <Box width="100%">
      <Box
        position="relative"
        maxWidth={1152}
        minHeight={350}
        bg="rgb(255, 255, 255)"
        m="100px auto"
        borderRadius={8}
        border="1px solid rgb(0, 111, 232)"
      >
        <LinksButtonBlock width="100%" height={56}></LinksButtonBlock>
        <Routes>
          <Route path="/convert" element={<Conver />}></Route>
          <Route path="/exchange-rates" element={<ExchangeRates />}></Route>
        </Routes>
      </Box>
    </Box>
  );
};
