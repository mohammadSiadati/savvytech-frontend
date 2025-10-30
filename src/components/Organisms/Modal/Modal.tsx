import { FC } from 'react';
import Button from '@/components/atoms/Button/Button';
import { IModalProps } from './interface';

const Modal: FC<IModalProps> = ({
  label,
  title,
  desc,
  onClick,
  onCancel,
  children,
  disabled,
}) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onCancel}
      />

      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
        <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 w-full max-w-lg">
          {title && (
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {title}
            </h2>
          )}
          {desc && (
            <p className="text-gray-600 dark:text-gray-400 mb-6">{desc}</p>
          )}

          {children}

          <div className="flex justify-center gap-3 mt-6">
            {onCancel && (
              <Button
                label="Cancel"
                onClick={onCancel}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              />
            )}
            <Button
              label={label}
              disabled={disabled}
              onClick={onClick}
              className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
