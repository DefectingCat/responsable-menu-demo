import { FC } from 'react';
import cn from 'classnames';

interface Props {
  className?: string;
}

const PostCard: FC<Props> = ({ className }) => {
  return (
    <>
      <article
        className={cn(
          'rounded-lg shadow border bg-white p-6',
          'transition hover:shadow-md',
          className
        )}
      >
        <h2 className={cn('text-2xl font-semibold mb-2')}>
          This is post title
        </h2>
        <p className={cn('text-gray-500')}>Here is post description..</p>
      </article>
    </>
  );
};

export default PostCard;
