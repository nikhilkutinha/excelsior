import { ComponentProps } from 'react';
import cn from 'classnames';

type Props = ComponentProps<'button'> & {
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'white';
};

export default function Button({
  children,
  className,
  color = 'primary',
  ...props
}: Props) {
  const classes = () => {
    return cn(
      {
        primary: 'text-white bg-primary-500 hover:bg-primary-600 focus:ring-primary-500',
        secondary: 'text-white bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-500',
        success: 'text-white bg-success-500 hover:bg-success-600 focus:ring-success-500',
        danger: 'text-white bg-danger-500 hover:bg-danger-600 focus:ring-danger-500',
        warning: 'text-white bg-warning-500 hover:bg-warning-600 focus:ring-warning-500',
        info: 'text-white bg-info-500 hover:bg-info-600 focus:ring-info-500',
        white: 'text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-500 border border-gray-300',
      }[color],
      className
    );
  };

  return (
    <button
      {...props}
      className={`${classes()} py-2 px-4 shadow-sm text-sm font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2`}
    >
      {children}
    </button>
  );
}
