import cn from 'classnames';
import NavBar from 'components/NavBar';
import InfoBar from 'components/InfoBar';
import PostCard from 'components/PostCard';

function App() {
  return (
    <div
      className={cn(
        'grid grid-cols-12 gap-4 mx-auto p-2',
        'xl:grid-cols-8 xl:container'
      )}
    >
      <NavBar />

      <div className={cn('col-span-12', 'md:col-span-10', 'xl:col-span-5')}>
        <p className="mb-2">Main Contents</p>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <PostCard key={i} className="mb-4" />
          ))}
      </div>

      <InfoBar />
    </div>
  );
}

export default App;
