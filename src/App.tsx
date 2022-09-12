import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Link
        className=' text-base text-red-400'
        to={`/peopleList`}
        key='peopleList'
      >
        Go to peopleList
      </Link>
      123
      <Outlet />
    </div>
  )
}

export default App
