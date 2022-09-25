import { useState, useReducer, useEffect } from 'react'
import axios from 'axios'

export default function Hooks() {
  // const [inputValue, setInputValue] = useState('app')

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value)
  // }

  // const reducer = (
  //   state: { count: number; showText: boolean },
  //   action: { type: string }
  // ): any => {
  //   switch (action.type) {
  //     case 'INCREMENT':
  //       return { count: state.count + 1, showText: state.showText }
  //     case 'toggleShow':
  //       return { count: state.count, showText: !state.showText }
  //     default:
  //       return state
  //   }
  // }

  const [fakeData, setFakeData] = useState<[{ name: string; id: number }]>([
    { name: '', id: 0 }
  ])

  // const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

  useEffect(() => {
    // when render execute useEffect fn will run,include changing the state ,because changing state will rerender the Page(*)
    // when page render useEffect will render once and change the state will can once (render twice)
    // use empty ary to call once , or pass the watching state which you want to focus at
    axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
      setFakeData(res.data)
      // console.log(123)
    })
  }, [])

  return (
    <div className='App mt-5 mx-auto  container   bg-sky-500 '>
      {fakeData &&
        fakeData.map((d) => (
          <h2 key={d.id}>
            {d.id} `&gt;`
            {d.name}
          </h2>
        ))}
      {/* <input
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
      </button> */}
    </div>
  )
}
