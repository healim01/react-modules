import { ErrorStatus } from './errorStatus';

export interface CardNumbersType {
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
}

export type CardNumberKeys = keyof CardNumbersType;

export type CardNumberErrorType =
  | ErrorStatus.INVALID_LENGTH
  | ErrorStatus.IS_NOT_NUMBER;