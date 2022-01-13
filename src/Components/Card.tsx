import React, { ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  children: ReactNode;
  className?: string;
};

type ImageProps = {
  src: string;
  alt?: string;
  widthClass?: string;
  heightClass?: string;
};

function Card({ children, className }: Props) {
  return (
    <div
      className={`${className} bg-white shadow-md rounded overflow-hidden border`}
    >
      {children}
    </div>
  );
}

function Header({ children, className }: Props) {
  return (
    <div className={`${className} px-4 py-3 border-b border-gray-200`}>
      {children}
    </div>
  );
}

function Image({
  src,
  alt,
  widthClass = 'aspect-w-16',
  heightClass = 'aspect-h-9',
}: ImageProps) {
  const classes = () => cn(widthClass, heightClass);

  return (
    <div className={classes()}>
      <img
        src={src}
        alt={alt}
        className='object-cover object-center w-full h-full lg:w-full lg:h-full'
      />
    </div>
  );
}

function Content({ children, className }: Props) {
  return <div className={`${className} px-4 py-3`}>{children}</div>;
}

Card.Header = Header;
Card.Content = Content;
Card.Image = Image;

export default Card;
