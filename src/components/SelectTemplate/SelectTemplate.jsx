import Select from 'react-select';
import { StyledSelectBox } from './SelectTemplate.styled';

export const SelectTemplate = ({
  onChange,
  initialOptions = [],
  placeholder = 'USD',
  value,
}) => {
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      paddingTop: '7px',
      display: 'inline-block',
      width: '100%',
    }),

    option: provided => ({
      ...provided,
      padding: 20,
    }),
    control: (_, state) => ({
      // ...provided,
      // marginLeft: 10,
      display: 'flex',
      borderRadius: 10,
      // boxShadow: 'none',
      // border: 'red',
      cursor: 'pointer',
    }),

    indicatorSeparator: provided => ({
      ...provided,
      display: 'none',
    }),

    singleValue: provided => ({
      ...provided,
      color: '#8C8C8C',
      lineHeight: 1.5,
    }),

    menu: provided => ({
      ...provided,
      width: 300,
      overflow: '-moz-scrollbars-none',
    }),

    menuList: provided => ({
      ...provided,
      // borderRadius: 30,
      padding: 0,
      overflow: '-moz-scrollbars-none',
    }),
  };

  return (
    <StyledSelectBox>
      <Select
        placeholder={initialOptions[placeholder]}
        options={initialOptions}
        styles={customStyles}
        onChange={onChange}
        value={value}
      ></Select>
    </StyledSelectBox>
  );
};
