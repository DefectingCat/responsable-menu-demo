import { FC } from 'react';
import cn from 'classnames';

const SearchBox: FC = () => {
  return (
    <>
      <div className={cn('rounded-lg border bg-white')}>
        <input
          type="text"
          placeholder="Search posts.."
          className={cn(
            'w-full p-3 text-gray-700 outline-none placeholder:italic rounded-lg',
            'focus:shadow-md transition-all'
          )}
        />
      </div>
    </>
  );
};

export default SearchBox;
