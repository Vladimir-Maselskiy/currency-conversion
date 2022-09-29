import { Box } from 'components/Box/Box';
import { useEffect, useState } from 'react';
import { CurrencyAbbr, StyledInput, Title } from './Convert.styled';
import { ConvertButton } from './ConvertButton/ConvertButton';
import { InvalidDataMessage } from './InvalidDataMessage/InvalidDataMessage';
import { SelectFrom } from './SelectFrom/SelectFrom';
import { SelectTo } from './SelectTo/SelectTo';
import { SwapButton } from './SwapButton/SwapButton';
import symbol from '../../data/symbol.json';
import rates from '../../data/dev-rates.json';
import { ConvertInfo } from './ConvertInfo/ConvertInfo';

export const Conver = () => {
  const [inputValue, setInputValue] = useState('');
  const [isConvertButtonDisabled, setIsConvertButtonDisabled] = useState(true);
  const [isValidData, setIsValidData] = useState(true);
  const [currensies, setCurrensies] = useState([]);
  const [currencyAbbr, setCurrencyAbbr] = useState('');
  const [valueFrom, setValueFrom] = useState(null);
  const [valueTo, setValueTo] = useState(null);
  const [isConvertInfoVisible, setIsConvertInfoVisible] = useState(false);

  useEffect(() => {
    setCurrensies(
      Object.keys(symbol).map(key => ({ value: key, label: symbol[key] }))
    );
  }, []);

  useEffect(() => {
    if (inputValue !== '' && isNaN(inputValue)) {
      setIsValidData(false);
    } else {
      setIsValidData(true);
    }
    if (inputValue !== '' && !isNaN(inputValue)) {
      setIsConvertButtonDisabled(false);
    } else {
      setIsConvertButtonDisabled(true);
    }
  }, [inputValue]);

  useEffect(() => {
    if (valueFrom) setCurrencyAbbr(valueFrom.value);
  }, [valueFrom]);

  const onChangeInput = e => {
    setInputValue(e.target.value);
  };

  const onChangeSelectFrom = e => {
    setValueFrom(e);
  };

  const onChangeSelectTo = e => {
    setValueTo(e);
  };

  const onSwapButtonClick = () => {
    const obj = valueFrom;
    setValueFrom(valueTo);
    setValueTo(obj);
  };

  return (
    <Box p={48}>
      <Box
        // position="relative"
        display="flex"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Box position="relative">
          <Title>Amount</Title>
          <CurrencyAbbr>{currencyAbbr}</CurrencyAbbr>
          <StyledInput type="text" onChange={onChangeInput} />

          <InvalidDataMessage isValidData={isValidData} />
        </Box>
        <Box>
          <Title>From</Title>
          <SelectFrom
            onChange={onChangeSelectFrom}
            initialOptions={currensies}
            placeholder="EUR"
            value={valueFrom}
          />
        </Box>
        <SwapButton onClick={onSwapButtonClick} />
        <Box>
          <Title>To</Title>
          <SelectTo
            onChange={onChangeSelectTo}
            initialOptions={currensies}
            placeholder="USD"
            value={valueTo}
          />
        </Box>
      </Box>
      <ConvertInfo
        isVisible={isConvertInfoVisible}
        amount={inputValue}
        from={valueFrom}
        to={valueTo}
        rates={rates}
      />
      <ConvertButton disabled={isConvertButtonDisabled} />
    </Box>
  );
};
