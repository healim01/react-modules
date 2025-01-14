import { useState } from 'react';
import { CardCompanyErrorMessage } from '../constants/error';
import { ErrorStatus } from '../types/errorStatus';

const checkIncludeArray = (optionArr: string[], value: string) => {
  if (!optionArr.includes(value) || !value) {
    throw new Error(ErrorStatus.INVALID_OPTION);
  }
};

const useCardCompany = ({
  initialValue,
  optionArray,
}: {
  initialValue: string;
  optionArray: string[];
}) => {
  const [value, setValue] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState('');

  const onSelect = (value: string) => {
    try {
      checkIncludeArray(optionArray, value);
      setValue(value);
    } catch (e) {
      if (e instanceof Error) {
        setErrorMessage(CardCompanyErrorMessage[ErrorStatus.INVALID_OPTION]);
      }
    }
  };

  return { value, onSelect, errorMessage };
};

export default useCardCompany;
