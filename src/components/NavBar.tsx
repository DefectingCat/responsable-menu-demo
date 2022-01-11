import { FC, useRef, useState } from 'react';
import cn from 'classnames';
import MenuBtn from './nav-bar/MenuBtn';
import MenuItem from './nav-bar/MenuItem';
import { useMediaMatch, useOutsideClick } from 'rooks';

export type MenuItems = {
  name: string;
  path: string;
  icon: JSX.Element;
};

const menuItems = [
  {
    name: 'Home',
    path: '/',
    icon: (
      <svg
        className="w-6 h-6 mr-2 fill-current"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M555.541 117.995L868.416 342.56a117.333 117.333 0 0148.917 95.307V800c0 64.8-52.533 117.333-117.333 117.333H640V746.667c0-70.688-57.312-128-128-128s-128 57.312-128 128v170.666H224c-64.8 0-117.333-52.533-117.333-117.333V437.877a117.333 117.333 0 0148.917-95.317l312.875-224.565a74.667 74.667 0 0187.082 0z" />
      </svg>
    ),
  },
  {
    name: 'Article',
    path: '/',
    icon: (
      <svg
        className="w-6 h-6 mr-2 fill-current"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M734.635 72.448c-16.811-16.47-49.408-29.781-72.96-29.781H204.8c-42.41 0-76.8 36.522-76.8 81.664v775.338c0 45.099 34.475 81.664 76.8 81.664h614.4c42.41 0 76.8-36.693 76.8-81.578V273.493c0-23.68-13.781-56.405-30.379-72.661L734.635 72.405zM341.333 298.667h341.334a42.667 42.667 0 010 85.333H341.333a42.667 42.667 0 110-85.333zm0 170.666H512a42.667 42.667 0 010 85.334H341.333a42.667 42.667 0 010-85.334z" />
      </svg>
    ),
  },
  {
    name: 'Setting',
    path: '/',
    icon: (
      <svg
        className="w-6 h-6 mr-2 fill-current"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M951.7 428.8c-.2-1.8-.4-3.3-.7-4.2v-.8l-.4-2.2c-7.1-34.6-30-56.9-58.5-56.9h-4.7c-48.6 0-88-39.6-88-88 0-11.2 5.2-27.1 7.4-32.7 13.8-32.2-.9-68.9-35-87.6L664.5 95.7l-2-.7c-8-2.6-17.3-5.7-27.7-5.7-19.4 0-41.2 9-54.7 22.5-16.9 16.7-51.2 41.6-71.6 41.6-20.3 0-54.7-24.8-71.6-41.6-14.4-14.2-34.3-22.5-54.7-22.5-10.7 0-19.7 3-27.7 5.7l-1.8.7-112.5 60.9-.7.4c-27.3 17.1-38.4 56.3-24.5 87.4l.2.4.2.4c2.2 4.9 9 21.5 9 36 0 48.6-39.6 88-88 88h-4.7c-29.8 0-52.1 22-58.5 57.3l-.4 2v.7c0 1-.4 2.4-.7 4.2-2.5 15.1-8.5 50.7-8.5 79.8 0 29.1 5.9 64.7 8.5 79.8.2 1.8.4 3.3.7 4.2v.8l.4 2.2c7.1 34.6 30 56.9 58.5 56.9h2.4c48.6 0 88 39.6 88 88 0 11.2-5.2 27.1-7.4 32.7-13.3 30.3-.7 69.2 28.7 88.8l.8.4 106 59 2 .7c8 2.6 17.1 5.7 27.5 5.7 22.2 0 42.2-8.5 54.7-22.5 1.2-.9 2.4-2.1 3.8-3.3 12.8-11.2 47.2-40.8 69.9-40.8 16.9 0 45.2 17.7 73.7 46.2 14.4 14.2 34.3 22.5 54.7 22.5 13.8 0 24-3.8 35.6-9.5l.4-.2 108.7-60.1.4-.4c27.3-17.1 38.4-56.3 24.5-87.4l-.2-.4-.2-.4c-.2-.1-8.7-17.8-7.1-33.7l.2-1v-1c0-48.6 39.6-88 88-88h5c29.8 0 52.1-22 58.5-57.3l.4-2v-.7c.2-.8.4-2 .7-3.6 2.6-14.7 8.6-49 8.6-80.4.2-29-5.7-64.5-8.3-79.6zm-440 222.4c-76.9 0-139.2-62.3-139.2-139.2s62.3-139.2 139.2-139.2S650.9 435.1 650.9 512s-62.3 139.2-139.2 139.2z" />
      </svg>
    ),
  },
];

const NavBar: FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isNarrowWidth = useMediaMatch('(max-width: 640px)');

  const ref = useRef(null);
  const handleMenuClick = () => {
    if (!isNarrowWidth) return;
    setShowMenu(!showMenu);
  };
  useOutsideClick(ref, handleMenuClick);

  return (
    <>
      <div
        className={cn(
          'col-span-12 flex items-center relative',
          'md:col-span-2 md:flex-col',
          'xl:col-span-1'
        )}
        ref={ref}
      >
        <MenuBtn className="mr-1" onClick={handleMenuClick} />

        <div className={cn('md:mb-4')}>Here is Logo</div>

        <div
          className={cn(
            'fixed top-0 left-0 mt-10 w-full',
            'md:block md:relative md:mt-0',
            { block: showMenu, hidden: !showMenu }
          )}
        >
          <nav
            className={cn(
              'absolute left-2 bg-white p-4 rounded-lg w-2/3 shadow-sm flex flex-col',
              'md:relative md:bg-transparent md:w-full md:shadow-none md:items-center md:left-0'
            )}
          >
            {menuItems.map((item) => (
              <MenuItem key={item.name} menuItem={item} />
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
