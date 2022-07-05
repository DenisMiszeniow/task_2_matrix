import './App.css';
import React, { useState } from 'react'

// create matrix array with random integer

function App() {
  let [setRows, changeRows] = useState(3)
  const matrixArray = []
  const setMatrixArray = (rows) => {
    const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))
    for (let i = 0; i < rows; i++) {
      matrixArray[i] = []
      for (let j = 0; j < rows; j++) {
        matrixArray[i][j] = randomInteger(0, 999)
      }
    }
  }
  setMatrixArray(setRows)

// Add a new row and col of matrix
  const increaseMatrix = () => {
    changeRows(setRows + 1)
  }

// Delete row and col from matrix
  const decreaseMatrix = () => {
    matrixArray.length > 0 && changeRows(setRows - 1)
  }

// sum of rows
  const getSumRows = (arr) => {
    let sumRow = 0;
    for(let i = 0; i < arr.length; i++) {sumRow += arr[i];}
    return sumRow
  }
// sum of matrix
  const getSumArray = (globalArr) => {
    const reduceArr = globalArr.map(row => row.reduce((rowTotal, i) => rowTotal + i, 0))
    return reduceArr.reduce((arrTot, b) => arrTot + b, 0)
  }

// handle change input
const [value, setValue] = useState('')
const onChangeHandler = (e) => {
    const { value } = e.target
    setValue(value)
  }
  


// JSX
  return (
    <div className="App">
      {
        matrixArray.map(r => <div className='container'>
                                <div>{r.map(q => <input type="text" onChange={onChangeHandler} value={q} />)}<span>row sum: {getSumRows(r)}</span></div>
                              </div>
                      )
      }
      <div>{getSumArray(matrixArray)}</div>

      <div className='click'>
      <input type="button" onClick={increaseMatrix} value={'+'} />
      <input type="button" onClick={decreaseMatrix} value={'-'} />
      </div>
    </div>
  );
}

export default App;
