import { ReactNode } from 'react';

type Props = {
  className?: string;
  children?: ReactNode;
};

function ListGroup({ className, children }: Props) {
  return (
    <ul
      className={`${className} shadow bg-white divide-y divide-gray-200 rounded border`}
    >
      {children}
    </ul>
  );
}

function Item({ className, children }: Props) {
  return <li className={`${className} px-4 py-3`}>{children}</li>;
}

ListGroup.Item = Item;

export default ListGroup;
