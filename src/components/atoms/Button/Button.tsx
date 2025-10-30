import { FC } from 'react';
import IButtonProps from './interface';

const Button: FC<IButtonProps> = ({ label, onClick, disabled }) => {
  const baseStyle =
    'px-3 py-1 rounded transition font-medium focus:outline-none';

  const variantStyle =
    label === 'Edit'
      ? 'text-emerald-600 hover:bg-emerald-50'
      : label === 'Delete'
      ? 'text-rose-600 hover:bg-rose-50'
      : 'text-blue-600 hover:bg-blue-50';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyle}`}
      data-modal-target="static-modal"
    >
      {label}
    </button>
  );
};

export default Button;
