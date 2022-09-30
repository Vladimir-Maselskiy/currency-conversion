import { Box } from 'components/Box/Box';
import { useEffect, useState } from 'react';
import { CurrenciesRates } from './CurrenciesRates/CurrenciesRates';
import { Title } from './ExchangeRates.styled';
import { SelectCurrency } from './SelectCurrency/SelectCurrency';

export const ExchangeRates = ({ symbol, rates }) => {
  const [currensies, setCurrensies] = useState([]);
  const [valueCurrency, setValueCurrency] = useState({
    value: 'EUR',
    label: symbol['EUR'],
  });

  useEffect(() => {
    setCurrensies(
      Object.keys(symbol).map(key => ({ value: key, label: symbol[key] }))
    );
  }, [symbol]);

  const onChangeSelectCurrency = e => {
    setValueCurrency(e);
  };

  return (
    <Box p={48} display="flex">
      <Box>
        <Title>Currency</Title>
        <SelectCurrency
          onChange={onChangeSelectCurrency}
          initialOptions={currensies}
          placeholder="EUR"
          value={valueCurrency}
        />
      </Box>
      <Box>
        <CurrenciesRates
          currentCurrency={valueCurrency}
          rates={rates}
          symbol={symbol}
        />
      </Box>
    </Box>
  );
};
