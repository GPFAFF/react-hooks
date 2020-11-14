// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import React, { useState } from 'react'

function Greeting({ initialValue = '' }) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const [name, setName] = useState(initialValue)

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input name={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
