import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  console.log(useState(0))
  const [students, setStudents] = useState(['souheil'])
  const [student, setStudent] = useState('')

  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    count > 0 && setCount(count - 1)
  }
  const getNameStudents = (e) => {
    setStudent(e.target.value)

  }
  const handleAddStudents = (e) => {
    e.preventDefault()
    setStudents([...students, student])
    setStudent('')
  }

  return (
    <div className="App">
      <div>
        <button onClick={handleIncrement}> +</button>
        <h1> {count}</h1>
        <button onClick={handleDecrement}> -</button>
      </div>

      <div>
        <form onSubmit={handleAddStudents}>
          <div>
            <input type='text' value={student} onChange={getNameStudents} />
          </div>
          <button type='submit'> Add Students</button>
        </form>
      </div>

      <div>
        {students.map((el, index) => <h1 key={index} >{el}</h1>)}
      </div>

    </div>
  );
}

export default App;
