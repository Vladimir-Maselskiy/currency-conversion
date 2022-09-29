import styled from 'styled-components';

export const StyledInput = styled.input`
  box-sizing: border-box;
  display: ${p => (p.isValidData ? 'none' : 'block')};
  position: relative;
  padding: 0 10px 0 40px;
  border: 1px solid gray;
  border-radius: 5px;
  width: 320px;
  height: 50px;
  font-size: 16px;
  :focus-visible {
    outline: none;
  }
`;
export const Title = styled.p`
  margin-bottom: 2px;
  font-weight: 600;
`;
export const CurrencyAbbr = styled.div`
  position: absolute;
  top: 52px;
  left: 5px;
  z-index: 100;
  margin-bottom: 2px;
  font-weight: 500;
  color: gray;
`;
