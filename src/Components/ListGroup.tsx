import { ReactNode } from 'react';

type Props = {
  className?: string;
  children?: ReactNode;
};

function ListGroup({ className, children }: Props) {
  return (
    <ul className={`${className} border border-gray-300 bg-white divide-y divide-gray-300 rounded`}>
      {children}
    </ul>
  );
}

function ListGroupItem({ className, children }: Props) {
  return <li className={`${className} px-4 py-3`}>{children}</li>;
}

ListGroup.Item = ListGroupItem;

export default ListGroup;
