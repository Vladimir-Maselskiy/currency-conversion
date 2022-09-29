import { StyledInvalidDataMessage } from './InvalidDataMessage.styled';

export const InvalidDataMessage = ({ isValidData }) => {
  return (
    <StyledInvalidDataMessage isValidData={isValidData}>
      Please enter a valid amount
    </StyledInvalidDataMessage>
  );
};
