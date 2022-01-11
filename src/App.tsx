import cn from 'classnames';

function App() {
  return (
    <div
      className={cn(
        'text-red-800 text-xl',
        'md:text-blue-700',
        'lg:text-orange-500'
      )}
    >
      Hello world!
    </div>
  );
}

export default App;
