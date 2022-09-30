import { ListItem, StyledRatesList } from './CurrenciesRates.styled';

export const CurrenciesRates = ({ rates, currentCurrency, symbol }) => {
  return (
    <StyledRatesList>
      {Object.keys(rates).map(key => (
        <ListItem key={key}>{`1 ${currentCurrency.value} = ${(
          rates[key] / rates[currentCurrency.value]
        ).toFixed(5)} ${symbol[key]}`}</ListItem>
      ))}
    </StyledRatesList>
  );
};
