import React from "react"

export function FunctionalComponent () {
    const [state, setState] = React.useState({ value : 0})

    const Increment = () => {
      setState({...state, value : state.value + 1})
    }

    const Decrement = () => {
      setState({...state, value : state.value - 1})
    }

    return <div>
      <h1>Functional Component</h1>

      <p>Value = <b>{state.value}</b></p>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
        
    </div>
  }