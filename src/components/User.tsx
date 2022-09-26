import { useContext } from 'react'
import { AppContext } from '../routes/hooks'
export default function User() {
  const appContext = useContext(AppContext)
  return (
    <div className=' mt-5 mx-auto  container   bg-sky-100 '>
      <h2>User:{appContext?.userName}</h2>
    </div>
  )
}
