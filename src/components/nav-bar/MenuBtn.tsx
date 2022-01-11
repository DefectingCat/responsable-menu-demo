import { FC } from 'react';
import cn from 'classnames';

interface Props {
  className?: string;
}

const MenuBtn: FC<Props> = ({ className }) => {
  return (
    <>
      <button
        className={cn(
          'w-7 h-6 p-1 rounded-md flex items-center',
          'hover:bg-brand-grey-200',
          'md:hidden',
          className
        )}
      >
        <svg
          className="fill-current"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M133.31 296.552h757.207c19.782 0 35.951-16.169 35.951-35.95 0-19.782-15.997-35.952-35.95-35.952H133.31c-19.782 0-35.951 16.17-35.951 35.951 0 19.782 16.17 35.951 35.95 35.951zM890.517 476.135H133.311c-19.782 0-35.951 16.17-35.951 35.951 0 19.782 16.17 35.951 35.95 35.951h757.207c19.782 0 35.951-16.17 35.951-35.951 0-19.782-16.17-35.95-35.95-35.95zM890.517 727.448H133.311c-19.782 0-35.951 15.997-35.951 35.95s16.17 35.952 35.95 35.952h757.207c19.782 0 35.951-15.998 35.951-35.951s-16.17-35.951-35.95-35.951z" />
        </svg>
      </button>
    </>
  );
};

export default MenuBtn;
