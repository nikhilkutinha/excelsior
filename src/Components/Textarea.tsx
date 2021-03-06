import { useRef, useEffect, ComponentProps } from 'react';
import cn from 'classnames';

type Props = ComponentProps<'textarea'> & {
  focused?: boolean;
  invalid?: boolean;
};

export default function Textarea({
  className,
  focused,
  invalid,
  ...props
}: Props) {
  const textarea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (focused) {
      textarea.current?.focus();
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
    <textarea
      {...props}
      ref={textarea}
      className={`${classes()} shadow-sm block w-full sm:text-sm border-gray-300 rounded`}
    />
  );
}
