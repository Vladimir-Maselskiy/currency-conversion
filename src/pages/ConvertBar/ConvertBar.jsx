import { Box } from 'components/Box/Box';
import { useEffect, useState } from 'react';
import { StyledInput, Title } from './ConvertBar.styled';
import { InvalidDataMessage } from './InvalidDataMessage/InvalidDataMessage';

export const ConvertBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValidData, setIsValidData] = useState(true);

  useEffect(() => {
    if (inputValue !== '' && isNaN(inputValue)) {
      setIsValidData(false);
    } else {
      setIsValidData(true);
    }
  }, [inputValue]);

  const onChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <Box>
      <Box position="absolute">
        <Title>Amount</Title>
        <StyledInput type="text" onChange={onChange} />
        <InvalidDataMessage isValidData={isValidData} />
      </Box>
    </Box>
  );
};
