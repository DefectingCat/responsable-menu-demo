import cn from 'classnames';
import NavBar from 'components/NavBar';
import InfoBar from 'components/InfoBar';

function App() {
  return (
    <div
      className={cn(
        'grid grid-cols-12 gap-4 mx-auto p-2',
        'xl:grid-cols-8 xl:container'
      )}
    >
      <NavBar />

      <div className={cn('col-span-12', 'md:col-span-8', 'xl:col-span-4')}>
        Main Contents
      </div>

      <InfoBar />
    </div>
  );
}

export default App;
