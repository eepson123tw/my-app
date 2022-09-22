import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Link
        className=' text-base text-red-400 mr-2'
        to={`/peopleList`}
        key='peopleList'
      >
        Go to peopleList
      </Link>
      <Link className=' text-base text-red-400' to={`/hooks`} key='hooks'>
        hooks
      </Link>
      <Outlet />
    </div>
  )
}

export default App
