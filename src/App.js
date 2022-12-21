
import './App.css';
import data from './data'

function App() {
  
  const allBoxes = data.map(singleBox => <Box className='box'></Box>)

  return (
    <div>
      {allBoxes}
    </div>
  );
}

export default App;
