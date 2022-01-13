import { useState, useEffect } from 'react';
import { Switch as HeadlessSwitch } from '@headlessui/react';
import { Color } from '../types';
import cn from 'classnames';

type Props = {
  color?: Color;
  value?: boolean;
  label?: string;
  onChange?: (value: boolean) => void;
};

export default function Switch({
  color = 'primary',
  value = false,
  label,
  onChange = () => {},
}: Props) {
  const [enabled, setEnabled] = useState(value);

  useEffect(() => {
    setEnabled(value);
  }, [value]);

  const backgroundClasses = enabled
    ? {
        primary: 'bg-primary-500',
        secondary: 'bg-secondary-500',
        danger: 'bg-danger-500',
        success: 'bg-success-500',
        warning: 'bg-warning-500',
        info: 'bg-info-500',
      }[color]
    : 'bg-gray-200';

  const ringClasses = {
    primary: 'focus:ring-primary-500',
    secondary: 'focus:ring-secondary-500',
    danger: 'focus:ring-danger-500',
    success: 'focus:ring-success-500',
    warning: 'focus:ring-warning-500',
    info: 'focus:ring-info-500',
  }[color];

  const classes = () => {
    return cn(backgroundClasses, ringClasses);
  };

  return (
    <HeadlessSwitch.Group>
      <div className='flex items-center'>
        {label && (
          <HeadlessSwitch.Label className='mr-4'>{label}</HeadlessSwitch.Label>
        )}
        <HeadlessSwitch
          checked={enabled}
          onChange={(value) => {
            setEnabled(value);
            onChange(value);
          }}
          className={`${classes()} relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2`}
        >
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </HeadlessSwitch>
      </div>
    </HeadlessSwitch.Group>
  );
}
