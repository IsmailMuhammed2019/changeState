
import './App.css';
import data from './data'

function App() {
  
  const allBoxes = data.map(singleBox => <div className='box'></div>)

  return (
    <div>
      {allBoxes}
    </div>
  );
}

export default App;
