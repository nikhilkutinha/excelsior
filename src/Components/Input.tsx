import { useRef, useEffect, ChangeEventHandler } from 'react';
import cn from 'classnames';

type Props = {
  className?: string;
  type?: string;
  value?: string | number;
  name?: string;
  id?: string;
  required?: boolean;
  invalid?: boolean;
  focused?: boolean;
  autoComplete?: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
};

export default function Input({
  className,
  type = 'text',
  value,
  name,
  id,
  required,
  invalid = false,
  focused,
  autoComplete,
  handleChange,
}: Props) {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focused) {
      input.current?.focus();
    }
  }, []);

  const classes = () => {
    return cn(
      {
        primary: 'focus:ring-primary-500 focus:border-primary-500',
        danger: 'focus:ring-danger-500 focus:border-danger-500',
      }[invalid ? 'danger' : 'primary'],
      className
    );
  };

  return (
    <input
      id={id}
      ref={input}
      type={type}
      value={value}
      name={name}
      required={required}
      autoComplete={autoComplete}
      onChange={handleChange}
      className={`${classes()} shadow-sm block w-full sm:text-sm border-gray-300 rounded-md`}
    />
  );
}
