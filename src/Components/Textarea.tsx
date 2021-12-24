import { useRef, useEffect, ChangeEventHandler } from 'react';
import cn from 'classnames';

type Props = {
  className?: string;
  value?: string | number;
  name?: string;
  required?: boolean;
  invalid?: boolean;
  focused?: boolean;
  rows?: number;
  autoComplete?: string;
  handleChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

export default function Textarea({
  className,
  value,
  name,
  required,
  invalid = false,
  focused,
  rows = 5,
  autoComplete,
  handleChange,
}: Props) {
  const textarea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (focused) {
      textarea.current?.focus();
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
    <textarea
      ref={textarea}
      value={value}
      name={name}
      required={required}
      rows={rows}
      autoComplete={autoComplete}
      onChange={handleChange}
      className={`${classes()} shadow-sm block w-full sm:text-sm border-gray-300 rounded-md`}
    />
  );
}
