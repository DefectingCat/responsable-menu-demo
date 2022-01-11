import { FC } from 'react';
import cn from 'classnames';
import SearchBox from 'components/SearchBox';

const InfoBar: FC = () => {
  return (
    <>
      <div className={cn('hidden mb-2', 'xl:block xl:col-span-2')}>
        <p>Here is information</p>
        <SearchBox />
      </div>
    </>
  );
};

export default InfoBar;
