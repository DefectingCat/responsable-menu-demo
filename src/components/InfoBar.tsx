import { FC } from 'react';
import cn from 'classnames';

const InfoBar: FC = () => {
  return (
    <>
      <div className={cn('hidden', 'xl:block xl:col-span-2')}>
        Here is information
      </div>
    </>
  );
};

export default InfoBar;
