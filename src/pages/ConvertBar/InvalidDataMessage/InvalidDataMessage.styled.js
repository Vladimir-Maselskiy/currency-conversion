import styled from 'styled-components';

export const StyledInvalidDataMessage = styled.span`
  display: ${p => (p.isValidData ? 'none' : 'block')};
  position: relative;
  bottom: -5px;
  color: red;
`;
