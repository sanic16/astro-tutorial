import { useEffect, useState } from "react"

const Counter = () => {

  const [count, setCount]  = useState(0)
  const [time, setTime] = useState(0)
  useEffect(() => {
    const myInterval = setInterval(() => {
        setTime(prev => prev + 1)
    }, 1000)
    return () => {
        clearInterval(myInterval)
    }
  }, [time])
  return (
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <h1>
            {time}
        </h1>
    </div>
  )
}

export default Counter