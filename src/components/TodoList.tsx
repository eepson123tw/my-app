import { useEffect, useRef, useState } from 'react'

interface todo {
  name: string
}

export default function TodoList() {
  // const [name, setName] = useState('')
  const [todo, setTodo] = useState<todo[]>([])
  const todoRef = useRef<HTMLInputElement | null>(null)

  // const inputHandler = (e: React.FormEvent<EventTarget>): void => {
  //   let ans = e.target as HTMLInputElement
  //   setTodo((x) => [...x, { name: ans.value }])
  // }
  const clickHandler = (): void => {
    let val = todoRef
    if (val.current?.value && val.current?.value !== '') {
      setTodo((x) => [...x, { name: `${val?.current?.value}` }])
      setTimeout(() => {
        val.current && (val.current.value = '')
      }, 1)
    }
  }

  useEffect(() => {
    // console.log('useEffect')
  }, [])

  return (
    <div className='p-5 bg-sky-100  h-[12vh]'>
      <div className='flex items-center'>
        <label htmlFor='name' className='pr-5'>
          Input Your Name:
        </label>
        <input type='text' id='name' ref={todoRef} />
        <button
          className='btn bg-neutral-400 border border-r-amber-200'
          onClick={clickHandler}
        >
          Click
        </button>
      </div>
      {todo.length && todo.map((x) => `<p>${x.name}</p>`)}
    </div>
  )
}
