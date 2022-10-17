import { useEffect, useState } from 'react'

export default function TodoList() {
  const [name, setName] = useState('')

  const inputHandler = (e: React.FormEvent<EventTarget>): void => {
    let ans = e.target as HTMLInputElement
    setName(ans.value)
  }

  useEffect(() => {
    console.log('useEffect')
  }, [])

  return (
    <div className='p-5 bg-sky-100  h-[12vh]'>
      <div className='flex items-center'>
        <label htmlFor='name' className='pr-5'>
          Input Your Name:
        </label>
        <input type='text' id='name' onInput={(e) => inputHandler(e)} />
      </div>
      <p>input:{name}</p>
    </div>
  )
}
