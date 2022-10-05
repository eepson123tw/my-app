import React, {
  useState,
  useRef,
  useReducer,
  useEffect,
  useLayoutEffect,
  createContext,
  useMemo
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
  // useLayoutEffect(() => {
  //   console.log('useLayoutEffect')
  // }, [])
  // only called after render page => vary fast and user can not see
  // useEffect(() => {
  //   console.log('useEffect')
  // }, [])

  // const getLongestName = useMemo(() => findName(data), [data]) //when Data has change ~

  // const [inputValue, setInputValue] = useState('app')

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value)
  // }

  const reducer = (
    state: { count: number; showText: boolean },
    action: { type: string; payload: any }
  ): any => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + 1,
          showText: action.payload.showText
        }
      case 'toggleShow':
        return { count: state.count, showText: !state.showText }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

  const changeFn = (e: React.ChangeEvent<HTMLInputElement>) => {
    let x: String = e.target.value

    dispatch({ type: 'INCREMENT', payload: { showText: x } })
  }

  // const [fakeData, setFakeData] = useState<[{ name: string; id: number }]>([
  //   { name: '', id: 0 }
  // ])

  // const [toggle, setToggle] = useState(false)

  //useRef like an domQuerySelector help developer use dom element easily
  // const inputRef = useRef<HTMLInputElement>(null)

  // const onclickBtn = () => {
  //   if (null !== inputRef.current) {
  //     inputRef.current.focus()
  //   }
  // }

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
  //     setFakeData(res.data)
  //   })
  // }, [])

  // const counter = (ary: [{ name: string; id: Number }]) => {
  //   console.log(123)
  //   return '123'
  // }

  // const memoCounter = useMemo(() => counter(fakeData), [fakeData])

  // const [userName, setUserName] = useState('')

  return (
    <div className='App mt-5 mx-auto  container   bg-sky-500 '>
      <input
        type='text'
        className='border  border-red-300'
        onChange={changeFn}
      />
      <p>{state.showText}</p>
      {/* <AppContext.Provider value={{ userName, setUserName }}>
        <User></User>
        <Login></Login>
      </AppContext.Provider> */}

      {/* {fakeData &&
        fakeData.map(
          (d, i) =>
            i <= 10 && (
              <h2 key={d.id}>
                {d.id} `&gt;`
                {d.name}
              </h2>
            )
        )} */}

      {/* <p>{memoCounter}</p> */}

      {/* {toggle && <h2>toggle</h2>} */}
      {/* <button
        className='border border-red-300 text-black'
        onClick={() => setToggle(!toggle)}
      >
        add click
      </button> */}

      {/* <div className='flex'>
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
