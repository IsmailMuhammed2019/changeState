import React from 'react'
import './App.css';
import data from './data'
import Box from './Box'

function App() {

  const [allData, setAllData] = React.useState(data)
  
  function handle(id){
    setAllData(prevState => {
      return prevState.map(square => {
        return square.id === id ? {...square, on: !square.on} : square 
      })
    })
  }

  const allBoxes = allData.map(singleBox => <Box 
  on={singleBox.on} 
  key={singleBox.id}
  handle={() => handle(singleBox.id)}
  />)

  return (
    <div>
      {allBoxes}
    </div>
  );
}

export default App;
