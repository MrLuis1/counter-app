import { useState } from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ( {value} ) => {

  const [ count, setCount ] = useState( value );
  const increment = (e) => {
    setCount(count + 1);
  }

  const decrement = (e) => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(value);
  }
  
  return (
    <>
      <h1>Counter App</h1>
      <h2>{ count }</h2>

      <button onClick={ increment }>+1</button>
      <button onClick={ decrement } > -1 </button>
      <button onClick={ reset } > Reset </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number
}
