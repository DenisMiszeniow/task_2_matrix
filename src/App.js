import './App.css';
import React, {useEffect, useState} from 'react'

// create matrix array with random integer

function App() {
    let [rows, changeRows] = useState(3)
    const [matrixArray, setMatrixArray] = useState([])

    const generateMatrixArray = (rows) => {
        const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))
        const arr = []
        for (let i = 0; i < rows; i++) {
            arr[i] = []
            for (let j = 0; j < rows; j++) {
                arr[i][j] = randomInteger(0, 999)
            }
        }
        return arr;
    }
    useEffect(() => {
        const arr = generateMatrixArray(rows)
        setMatrixArray(arr);
    }, [rows])


// Add a new row and col of matrix
    const increaseMatrix = () => {
        changeRows(rows + 1)
    }

// Delete row and col from matrix
    const decreaseMatrix = () => {
        matrixArray.length > 0 && changeRows(rows - 1)
    }

// sum of rows
    const getSumRows = (arr) => {
        let sumRow = 0;
        for (let i = 0; i < arr.length; i++) {
            sumRow += arr[i];
        }
        return sumRow
    }
// sum of matrix
    const getSumArray = (globalArr) => {
        const reduceArr = globalArr.map(row => row.reduce((rowTotal, i) => rowTotal + i, 0))
        return reduceArr.reduce((arrTot, b) => arrTot + b, 0)
    }

// handle change input
    const onChangeHandler = (i1, i2, value) => {
        const arr = [...matrixArray]
          arr[i1][i2] = parseInt(value.slice(0, 3)) || 0
        setMatrixArray(arr)
    }


// JSX
    return (
        <div className="App">
            {
                matrixArray.map((r, i1) => (
                        <div className='container'>
                            <div>
                                {r.map((q, i2) => {
                                    const onChange = (e) => {
                                        const {value} = e.target
                                        onChangeHandler(i1, i2, value)
                                    }
                                    return <input type="text" onChange={onChange} value={q}/>
                                })}
                                <span>row sum: {getSumRows(r)}</span>
                            </div>
                        </div>
                    )
                )
            }
            <div>{getSumArray(matrixArray)}</div>

            <div className='click'>
                <input type="button" onClick={increaseMatrix} value={'+'}/>
                <input type="button" onClick={decreaseMatrix} value={'-'}/>
            </div>
        </div>
    );
}

export default App;
