// import { getCurrecy } from "../util/apilayer-api";
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getCurrecy, getRates } from 'util/apilayer-api';
import { Conver } from '../pages/Convert/Convert';
import { ExchangeRates } from '../pages/ExchangeRates/ExchangeRates';
import { Box } from './Box/Box';
import { LinksButtonBlock } from './LinksButtonBlock/LinksButtonBlock';

export const App = () => {
  const [symbol, setSymbol] = useState({});
  const [rates, setRates] = useState({});

  useEffect(() => {
    getCurrecy().then(resp => {
      setSymbol(resp.data.symbols);
    });

    getRates().then(resp => setRates(resp.data.rates));
  }, []);

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
          <Route
            path="/"
            element={<Conver symbol={symbol} rates={rates} />}
          ></Route>
          <Route
            path="/exchange-rates"
            element={<ExchangeRates symbol={symbol} rates={rates} />}
          ></Route>
        </Routes>
      </Box>
    </Box>
  );
};
