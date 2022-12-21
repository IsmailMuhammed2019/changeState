
import './App.css';
import data from './data'
import Box from './Box'

function App() {
  
  const allBoxes = data.map(singleBox => <Box />)

  return (
    <div>
      {allBoxes}
    </div>
  );
}

export default App;
