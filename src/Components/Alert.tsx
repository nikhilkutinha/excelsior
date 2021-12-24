import { ReactNode } from 'react';
import { XIcon } from '@heroicons/react/outline';
import cn from 'classnames';

type Props = {
  children: ReactNode;
  dismissable?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
};

export default function Alert({
  dismissable,
  color = 'primary',
  children,
}: Props) {
  const wrapperClasses = () => {
    return cn(
      [dismissable ? 'pl-4 pr-8' : 'px-4'],
      {
        primary: 'bg-primary-100 text-primary-700',
        secondary: 'bg-secondary-100 text-secondary-700',
        danger: 'bg-danger-100 text-danger-700',
        warning: 'bg-yellow-100 text-yellow-700',
        info: 'bg-info-100 text-info-700',
        success: 'bg-success-100 text-success-700',
      }[color]
    );
  };

  const buttonClasses = () => {
    return {
      primary: 'text-primary-500 hover:text-primary-700',
      secondary: 'text-secondary-500 hover:text-secondary-700',
      danger: 'text-danger-500 hover:text-danger-700',
      warning: 'text-warning-500 hover:text-warning-700',
      info: 'text-info-500 hover:text-info-700',
      success: 'text-success-500 hover:text-success-700',
    }[color];
  };

  return (
    <div className={`${wrapperClasses()} rounded-md flex relative py-3`}>
      {children}
      {dismissable && (
        <button className={`${buttonClasses()} absolute top-0 right-0 p-3`}>
          <XIcon className='w-5 h-5' />
        </button>
      )}
    </div>
  );
}
