import { useRef, useEffect, ComponentProps } from 'react';
import cn from 'classnames';

type Props = ComponentProps<'input'> & {
  focused?: boolean;
  invalid?: boolean;
};

export default function Input({
  className,
  focused,
  invalid = false,
  ...props
}: Props) {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focused) {
      input.current?.focus();
    }
  }, [focused]);

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
      {...props}
      ref={input}
      className={`${classes()} shadow-sm block w-full sm:text-sm border-gray-300 rounded`}
    />
  );
}
