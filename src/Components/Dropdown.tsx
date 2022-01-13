import { useState, ComponentProps, ReactNode } from 'react';
import { Transition } from '@headlessui/react';
import createContext from '../hooks/use-context';

type DropdownProps = {
  children: ReactNode;
};

type TriggerProps = {
  children: ReactNode;
};

type ContentProps = {
  align?: string;
  width?: string;
  contentClasses?: string;
  children: ReactNode;
};

type DropdownLinkProps = ComponentProps<'a'>;

const [useDropdownContext, DropdownContextProvider] = createContext<{
  open: boolean;
  setOpen: any;
  toggleOpen: any;
}>();

const Dropdown = ({ children }: DropdownProps) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };

  return (
    <DropdownContextProvider value={{ open, setOpen, toggleOpen }}>
      <div className='relative inline-block'>{children}</div>
    </DropdownContextProvider>
  );
};

const Trigger = ({ children }: TriggerProps) => {
  const { open, setOpen, toggleOpen } = useDropdownContext();

  return (
    <>
      <div className='inline-block' onClick={toggleOpen}>
        {children}
      </div>

      {open && (
        <div
          className='fixed inset-0 z-40'
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

const Content = ({
  align = 'left',
  width = '48',
  contentClasses = 'py-1 bg-white',
  children,
}: ContentProps) => {
  const { open, setOpen } = useDropdownContext();

  let alignmentClasses = 'origin-top';

  if (align === 'left') {
    alignmentClasses = 'origin-top-left left-0';
  } else if (align === 'right') {
    alignmentClasses = 'origin-top-right right-0';
  }

  let widthClasses = '';

  if (width === '48') {
    widthClasses = 'w-48';
  }

  return (
    <>
      <Transition
        show={open}
        enter='transition ease-out duration-200'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        {open && (
          <div
            className={`${alignmentClasses} ${widthClasses} absolute z-50 mt-2 rounded-md shadow-lg`}
            onClick={() => setOpen(false)}
          >
            <div
              className={`${contentClasses} rounded-md ring-1 ring-black ring-opacity-5`}
            >
              {children}
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

const DropdownLink = ({ children, ...props }: DropdownLinkProps) => {
  return (
    <a
      {...props}
      className='block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100'
    >
      {children}
    </a>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;

export default Dropdown;
