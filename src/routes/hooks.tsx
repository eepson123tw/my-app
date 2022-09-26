import {
  useState,
  useRef,
  useReducer,
  useEffect,
  useLayoutEffect,
  createContext
} from 'react'
import axios from 'axios'

import User from '../components/User'
import Login from '../components/Login'
export const AppContext = createContext<{
  userName: string
  setUserName: Function
} | null>(null)
export default function Hooks() {
  //before the useEffect, before print the page
  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  }, [])
  // only called after render page => vary fast and user can not see
  useEffect(() => {
    console.log('useEffect')
  }, [])
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

  // const [fakeData, setFakeData] = useState<[{ name: string; id: number }]>([
  //   { name: '', id: 0 }
  // ])

  //useRef like an domQuerySelector help developer use dom element easily
  // const inputRef = useRef<HTMLInputElement>(null)

  // const onclickBtn = () => {
  //   if (null !== inputRef.current) {
  //     inputRef.current.focus()
  //   }
  // }

  // const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
  //     setFakeData(res.data)
  //   })
  // }, [])

  const [userName, setUserName] = useState('')

  return (
    <div className='App mt-5 mx-auto  container   bg-sky-500 '>
      <AppContext.Provider value={{ userName, setUserName }}>
        <User></User>
        <Login></Login>
      </AppContext.Provider>

      {/* {fakeData &&
        fakeData.map(
          (d, i) =>
            i <= 10 && (
              <h2 key={d.id}>
                {d.id} `&gt;`
                {d.name}
              </h2>
            )
        )}

      <div className='flex'>
        <input
          type='text'
          name='app'
          placeholder='123'
          className='border border-red-300'
          ref={inputRef}
        />
        <button onClick={onclickBtn} className=' border border-red-100'>
          add foucus
        </button>
      </div> */}

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
