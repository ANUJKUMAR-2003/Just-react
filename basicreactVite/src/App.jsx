import { useState } from 'react'
import App2 from './app2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <App2/>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p >
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
