import { StyledSwapButton } from './SwapButton.styled';
import { IoIosSwap } from 'react-icons/io';

export const SwapButton = ({ onClick }) => {
  return (
    <StyledSwapButton onClick={onClick}>
      <IoIosSwap />
    </StyledSwapButton>
  );
};
