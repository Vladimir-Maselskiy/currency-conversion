import { StyledConvertButton } from './ConvertButton.styled';

export const ConvertButton = ({ disabled, onClick }) => {
  return (
    <StyledConvertButton onClick={onClick} disabled={disabled}>
      Convert
    </StyledConvertButton>
  );
};
