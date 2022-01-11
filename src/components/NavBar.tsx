import { FC } from 'react';
import cn from 'classnames';
import MenuBtn from './nav-bar/MenuBtn';

const NavBar: FC = () => {
  return (
    <>
      <div
        className={cn(
          'col-span-12 flex items-center',
          'md:col-span-4',
          'xl:col-span-2'
        )}
      >
        <MenuBtn className="mr-1" />

        <div>Here is Logo</div>
      </div>
    </>
  );
};

export default NavBar;
