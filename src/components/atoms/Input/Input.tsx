import { FC, useState, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  type?: 'text' | 'number' | 'email' | 'password';
  onValidChange?: (value: string, isValid: boolean) => void;
}

const Input: FC<InputProps> = ({
  label,
  type = 'text',
  required = false,
  value,
  onChange,
  defaultValue,
  onValidChange,
  ...props
}) => {
  const [touched, setTouched] = useState(false);

  const validate = (val: string) => {
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

  const error = touched ? validate(value?.toString() || '') : '';

  return (
    <div className="flex flex-col w-full">
      <input
        {...props}
        type={type}
        value={value}
        onChange={handleChange}
        defaultValue={defaultValue}
        placeholder={label} // placeholder behind input
        className={`
          px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
          m-3
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
      />
      {error && (
        <span className="text-red-500 text-sm mt-1 block">{error}</span>
      )}
    </div>
  );
};

export default Input;
