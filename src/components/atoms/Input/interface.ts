import { InputHTMLAttributes } from 'react';

export default interface IInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  type?: 'text' | 'number' | 'email' | 'password';
  onValidChange?: (value: string, isValid: boolean) => void;
}
