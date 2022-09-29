import styled from 'styled-components';

export const StyledInvalidDataMessage = styled.span`
  display: ${p => (p.isValidData ? 'none' : 'block')};
  position: absolute;
  bottom: -20px;
  color: red;
`;
