import styled from 'styled-components';

export const StyledInput = styled.input`
  display: ${p => (p.isValidData ? 'none' : 'block')};
  position: relative;
  bottom: -5px;
  color: red;
`;
