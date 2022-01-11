import { FC } from 'react';
import type { MenuItems } from 'components/NavBar';
import cn from 'classnames';

interface Props {
  menuItem: MenuItems;
}

const MenuItem: FC<Props> = ({ menuItem }) => {
  return (
    <>
      <div
        key={menuItem.name}
        className={cn(
          'px-4 py-2 rounded-md select-none transition cursor-pointer',
          'w-full flex items-center font-semibold text-lg text-gray-500',
          'md:my-1 hover:bg-white'
        )}
      >
        {menuItem.icon}
        <span className="text-gray-700">{menuItem.name}</span>
      </div>
    </>
  );
};

export default MenuItem;
