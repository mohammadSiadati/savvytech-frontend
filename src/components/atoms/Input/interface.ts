import { InputHTMLAttributes } from 'react';

export default interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  required?: boolean;
  type?: 'text' | 'number';
  onValidChange?: (value: string, isValid: boolean) => void;
}
