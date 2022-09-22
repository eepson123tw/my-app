import { useState, useReducer } from 'react'

export default function Hooks() {
  const [inputValue, setInputValue] = useState('app')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const reducer = (
    state: { count: number; showText: boolean },
    action: { type: string }
  ): any => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1, showText: state.showText }
      case 'toggleShow':
        return { count: state.count, showText: !state.showText }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

  return (
    <div className='App mt-5 mx-auto  container   bg-sky-500 '>
      <input
        type='text'
        placeholder='insert'
        className='border'
        onChange={onChange}
        value={inputValue}
      />{' '}
      {inputValue}
      <h2>{state.count}</h2>
      {state.showText && <h2>textshowText</h2>}{' '}
      <button
        className='ml-2 p-4 bg-slate-100 border rounded'
        onClick={() => {
          dispatch({ type: 'INCREMENT' })
          dispatch({ type: 'toggleShow' })
        }}
      >
        123
      </button>
    </div>
  )
}
