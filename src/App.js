import './App.css';
import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({ email: '', name: '' })

  const handleChangeName = (e) => {
    setUser({ ...user, name: e.target.value })
    console.log(user)
  }
  const handleChangeEmail = (e) => {
    setUser({ ...user, email: e.target.value })
    console.log(user)
  }
  const addUser = (e) => {
    e.preventDefault()
    setUsers([...users, user])
    setUser({ email: '', name: '' })
  }


  return (
    <div className="App">
      <form onSubmit={addUser}>
        <div>
          <input type='text' value={user.name} onChange={handleChangeName} />
        </div>
        <div>
          <input type='email' value={user.email} onChange={handleChangeEmail} />
        </div>
        <button type='submit'> Submit</button>
      </form>

      <div>
        {users.map((el, index) =>
          <div key={index}>
            <h1 >{el.name}</h1>
            <h1 >{el.email}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
