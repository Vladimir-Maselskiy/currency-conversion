import {
  FadedDigits,
  FromInfo,
  RateInfo,
  StyledConvertInfo,
  ToInfo,
} from './ConvertInfo.styled';

export const ConvertInfo = ({ rates, amount, from, to, ...props }) => {
  const toValueLong = ((amount / rates[from.value]) * rates[to.value]).toFixed(
    5
  );
  const insignificantDigits = String(toValueLong % 1).slice(2, 5);
  const toValue = Number(toValueLong).toFixed(2);
  return (
    <StyledConvertInfo {...props}>
      <FromInfo>{`${amount} ${from.label}s =`}</FromInfo>
      <ToInfo>
        {`${toValue}`}
        <FadedDigits>{insignificantDigits}</FadedDigits> {`${to.label}s`}
      </ToInfo>
      <RateInfo>{`1 ${from.value} = ${(
        rates[to.value] / rates[from.value]
      ).toFixed(5)}  ${to.value}`}</RateInfo>
      <RateInfo>{`1 ${to.value} = ${(
        rates[from.value] / rates[to.value]
      ).toFixed(5)}  ${from.value}`}</RateInfo>
    </StyledConvertInfo>
  );
};
