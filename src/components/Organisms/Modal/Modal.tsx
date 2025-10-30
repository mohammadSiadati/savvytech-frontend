import Button from '@/components/atoms/Button/Button';
import { FC, ReactNode } from 'react';

type TPropsModal = {
  label: string;
  title: string;
  desc: string;
  onClick?: () => void;
  onCancel?: () => void;
  onSubmit?: () => void;
  children?: ReactNode;
};

const Modal: FC<TPropsModal> = ({
  label,
  title,
  desc,
  onClick,
  onSubmit,
  onCancel,
  children,
}) => {
  return (
    <>
      <div
        className="fixed inset-0  bg-opacity-50 backdrop-blur-sm z-40"
        onClick={onCancel}
      ></div>

      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center relative w-[50%]">
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{desc}</p>

          {children}

          <div className="flex justify-center gap-4">
            {onCancel && (
              <Button
                label="Cancel"
                onClick={onCancel}
                className="px-4 py-2 rounded-lg border border-gray-300  hover:bg-gray-100 transition"
              />
            )}
            <Button
              onClick={onClick}
              label={label}
              onSubmit={onSubmit}
              className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
