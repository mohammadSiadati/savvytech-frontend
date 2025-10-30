import { FC } from 'react';
import IButtonProps from './interface';

const Button: FC<IButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      data-modal-target="static-modal"
      className={`px-3 py-1 rounded transition ${
        label === 'Edit'
          ? 'text-emerald-600 hover:bg-emerald-50'
          : label === 'Delete'
          ? 'text-rose-600 hover:bg-rose-50'
          : 'text-slate-200 hover:bg-slate-700'
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
