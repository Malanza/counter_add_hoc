import Counter from './components/Counter'
import Count from './components/Count'
import BackButton from './components/BackButton'
import { useState } from 'react'

const App = () => {
  // create some count state that starts at 0
  // create a button that when clicked increments the count function
  // if the count state is >= 10, display completed component that simply has an h1 that says completed.
    // In the completed component, add a button that says back that resets the count state to 0 and displays the button.
  const [count, setCount] = useState(0);

  const handleCount = () =>{
    setCount(count + 1)
  }

  const resetCount = () => {
      setCount(0)
  }

  if (count < 10) {
    return (
      <>
        <Count count={count}/>
        <Counter handleCount={handleCount}/>
      </>
    )
  } else {
    return (
      <>
      <BackButton resetCount={resetCount}/>
      </>
    )
  }

}

export default App;
