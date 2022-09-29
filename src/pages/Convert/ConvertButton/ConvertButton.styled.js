import styled from 'styled-components';

export const StyledConvertButton = styled.button`
  position: absolute;
  right: 48px;
  bottom: 48px;
  background-color: rgb(0, 111, 232);
  border-radius: 5px;
  opacity: ${p => (p.disabled ? 0.5 : 1)};
  padding: 10px 20px 10px 20px;
  color: white;
`;
