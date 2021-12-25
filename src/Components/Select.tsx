import { useEffect, useRef, ComponentProps } from 'react';
import cn from 'classnames';

type SelectProps = ComponentProps<'select'> & {
  focused?: boolean;
  invalid?: boolean;
};

type SelectOptionProps = ComponentProps<'option'>;

function Select({
  children,
  className,
  focused,
  invalid,
  ...props
}: SelectProps) {
  const select = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (focused) {
      select.current?.focus();
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
    <select
      {...props}
      ref={select}
      className={`${classes()} shadow-sm block w-full sm:text-sm border-gray-300 rounded`}
    >
      {children}
    </select>
  );
}

function SelectOption({ children, ...props }: SelectOptionProps) {
  return <option {...props}>{children}</option>;
}

Select.Option = SelectOption;

export default Select;
