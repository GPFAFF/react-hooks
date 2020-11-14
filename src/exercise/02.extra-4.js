// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import React, { useEffect, useState } from 'react';

function useLocalStorageState(localStorage) {

  const stringify = JSON.parse(JSON.stringify(localStorage));

  console.log(stringify)

  // function getName(initialName) {
  //   return window.localStorage.getItem(key || initialName)
  // }

  const [localStorageName, setLocalStorageName] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem(key, localStorageName)
  // }, [key, localStorageName])

  return [localStorageName, setLocalStorageName];
}

function Greeting({ initialName = '' }) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  const [localStorageName] = useLocalStorageState(window.localStorage);

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)

  function handleChange(event) {
    localStorageName(event.target.value)
  }

  return (
    <div>
      <form>
        <label
          htmlFor="name">
          Name:
        </label>
        <input
          value={localStorageName || initialName}
          onChange={handleChange}
          id="name"
        />
      </form>
      {localStorageName
        ? <strong>Hello {localStorageName}</strong>
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
