import { ReactNode } from 'react';
import { Color } from '../types';
import cn from 'classnames';

type Props = {
  children: ReactNode;
  className?: string;
  color?: Color;
};

function Badge({ children, className, color = 'primary' }: Props) {
  const classes = () => {
    return cn(
      {
        primary: 'text-primary-800 bg-primary-100',
        secondary: 'text-secondary-800 bg-secondary-100',
        danger: 'text-danger-800 bg-danger-100',
        success: 'text-success-800 bg-success-100',
        warning: 'text-warning-800 bg-warning-100',
        info: 'text-info-800 bg-info-100',
      }[color],
      className
    );
  };

  return (
    <span
      className={`${classes()} inline-flex items-center px-2 py-0.5 rounded text-xs font-medium`}
    >
      {children}
    </span>
  );
}

export default Badge;
