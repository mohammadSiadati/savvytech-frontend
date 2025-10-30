import { FC, useState } from 'react';
import IInputProps from './interface';

const Input: FC<IInputProps> = ({
  label,
  type = 'text',
  required = false,
  value = '',
  onChange,
  onValidChange,
  ...props
}) => {
  const [touched, setTouched] = useState(false);

  const validate = (val: string): string => {
    if (required && !val.trim()) return 'This field is required';
    if (type === 'number' && val.trim() && isNaN(Number(val)))
      return 'Must be a number';
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTouched(true);
    onChange?.(e);

    const error = validate(val);
    onValidChange?.(val, error === '');
  };

  const error = touched ? validate(String(value)) : '';

  return (
    <div className="flex flex-col w-full gap-1 m-3">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        {...props}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={() => setTouched(true)}
        className={`
          px-4 py-2 rounded-lg border 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-colors duration-200
          ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
          bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100
        `}
      />

      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
};

export default Input;
