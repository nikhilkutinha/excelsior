import { Children, cloneElement, ReactNode } from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';

type BreadcrumbProps = {
  children: React.ReactElement<ItemProps>[];
};

type ItemProps = {
  children: ReactNode | string;
  last?: boolean;
};

function Breadcrumb({ children }: BreadcrumbProps) {
  const childrenArray = Children.toArray(children);

  return (
    <nav className='flex px-5 py-3 bg-white border rounded-lg'>
      <ol className='inline-flex items-center space-x-1 md:space-x-3'>
        {children.map((child: React.ReactElement<ItemProps>, index) => {
          const first = index === 0;
          const last = index === childrenArray.length - 1;

          return (
            <li className='inline-flex items-center'>
              {!first && <ChevronRightIcon className='w-5 h-5 text-gray-400' />}
              {cloneElement(child, { last })}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function Item({ children, last }: ItemProps) {
  const classes = () => {
    return last ? 'text-gray-400' : 'text-gray-500 hover:text-gray-700';
  };

  return (
    <span className={`${classes()} ml-1 text-sm font-medium md:ml-2`}>
      {children}
    </span>
  );
}

Breadcrumb.Item = Item;

export default Breadcrumb;
