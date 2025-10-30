import { ReactNode } from 'react';

export interface IModalProps {
  label: string;
  title: string;
  desc: string;
  onClick?: () => void;
  onCancel?: () => void;
  onSubmit?: () => void;
  children?: ReactNode;
  disabled?: boolean;
}
