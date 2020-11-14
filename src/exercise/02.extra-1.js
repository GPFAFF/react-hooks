// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import React, { useEffect, useState } from 'react'

function Greeting({ initialName = '' }) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  function someExpensiveComputation(initialName) {
    return window.localStorage.getItem('name' || initialName)
  }

  const [name, setName] = useState(someExpensiveComputation);

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)
  useEffect(() => {
    window.localStorage.setItem('name', name);
  });

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label
          htmlFor="name">
          Name:
        </label>
        <input
          value={name || initialName}
          onChange={handleChange}
          id="name"
        />
      </form>
      {name
        ? <strong>Hello {name}</strong>
        : 'Please type your name'
      }
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => setCount(prevCount => prevCount + 1)}
      >
        {count}
        {' '}
        Click Me
      </button>
      <Greeting initialName="Gerg" />
    </>
  )
}

export default App
