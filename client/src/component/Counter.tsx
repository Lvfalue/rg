import * as React from 'react'
import styled from 'styled-components'
import useInterval from '../hook/useInterval'

const { useState, useEffect } = React

const Clock = styled.div`
  background: yellow;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-left: 50%;
  transform: translate(-50%, 0);
  font-size: 5em;
  color: black;
  text-align: center;
`
const Counter = () => {
  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState(1000)

  useInterval(() => {
    setCount(count + 1);
  }, delay)

  useEffect(() => {
    if (count >= 1000) {
      setDelay(0)
    }
  })

  return (
    <div>
      <Clock>{count}</Clock>
      <input value={delay} onChange={(e) => setDelay(parseInt(e.target.value, 10))} />
    </div>
  )
}

export default Counter
