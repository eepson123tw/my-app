import { AppContext } from '../routes/hooks'
import { ChangeEvent, useContext } from 'react'
export default function Login() {
  const appContext = useContext(AppContext)
  return (
    <div className=' mt-5 mx-auto  container   bg-sky-100 '>
      <h2>Login:</h2>
      <input
        type='text'
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          appContext?.setUserName(e.target.value)
        }}
      />
    </div>
  )
}
