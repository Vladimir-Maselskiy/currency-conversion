import styled from 'styled-components';

export const StyledInput = styled.input`
  display: ${p => (p.isValidData ? 'none' : 'block')};
  position: relative;
  width: 320px;
  height: 48px;
`;
export const Title = styled.p`
  margin-bottom: 2px;
  font-weight: 600;
`;
