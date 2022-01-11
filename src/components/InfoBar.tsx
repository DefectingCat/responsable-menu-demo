import { FC } from 'react';
import cn from 'classnames';
import SearchBox from 'components/SearchBox';

const InfoBar: FC = () => {
  return (
    <>
      <div className={cn('hidden', 'xl:block xl:col-span-2')}>
        <p className="mb-2">Here is information</p>
        <SearchBox />
      </div>
    </>
  );
};

export default InfoBar;
