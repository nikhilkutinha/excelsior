import { ReactNode, MouseEventHandler } from 'react';
import { XIcon } from '@heroicons/react/outline';
import cn from 'classnames';

type Props = {
  children: ReactNode;
  dismissable?: boolean;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
};

export default function Alert({
  dismissable,
  onClose,
  color = 'primary',
  children,
}: Props) {
  const alertClasses = () => {
    return cn(
      {
        primary: 'bg-primary-100 text-primary-700',
        secondary: 'bg-secondary-100 text-secondary-700',
        success: 'bg-success-100 text-success-700',
        danger: 'bg-danger-100 text-danger-700',
        warning: 'bg-yellow-100 text-yellow-700',
        info: 'bg-info-100 text-info-700',
      }[color],
      [dismissable ? 'pl-4 pr-8' : 'px-4']
    );
  };

  const buttonClasses = () => {
    return {
      primary: 'text-primary-500 hover:text-primary-700',
      secondary: 'text-secondary-500 hover:text-secondary-700',
      success: 'text-success-500 hover:text-success-700',
      danger: 'text-danger-500 hover:text-danger-700',
      warning: 'text-warning-500 hover:text-warning-700',
      info: 'text-info-500 hover:text-info-700',
    }[color];
  };

  return (
    <div className={`${alertClasses()} rounded flex relative py-3`}>
      {children}
      {dismissable && (
        <button
          onClick={onClose}
          className={`${buttonClasses()} absolute top-0 right-0 p-3`}
        >
          <XIcon className='w-5 h-5' />
        </button>
      )}
    </div>
  );
}
