import { Box } from 'components/Box/Box';
import { StyledNavLink } from './LinksButtonBlock.styled';
import { BsCurrencyExchange } from 'react-icons/bs';
import { BsBarChartLineFill } from 'react-icons/bs';
export const LinksButtonBlock = () => {
  return (
    <Box display="flex" width="100%" height={64} justifyContent="space-between">
      <StyledNavLink to="/convert">
        <BsCurrencyExchange />
        <span>Convert</span>
      </StyledNavLink>
      <StyledNavLink to="/exchange-rates">
        <BsBarChartLineFill />
        <span>Live Exchange Rates</span>
      </StyledNavLink>
    </Box>
  );
};
