import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  label?: ReactNode | string;
  help?: string;
  htmlFor?: string;
};

export default function Field({ children, label, help, htmlFor }: Props) {
  return (
    <div>
      {typeof label == 'string' ? (
        <label
          htmlFor={htmlFor}
          className='block text-sm font-medium text-gray-700 mb-1'
        >
          {label}
        </label>
      ) : (
        label
      )}

      {children}

      {help && <p className='mt-2 text-sm text-gray-500'>{help}</p>}
    </div>
  );
}
