import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <header className=' bg-slate-400 p-2 flex '>
        <Link
          className=' text-base flex-1 text-center text-red-400 mr-2'
          to={`/peopleList`}
          key='peopleList'
        >
          peopleList
        </Link>
        <Link
          className=' text-base flex-1 text-center text-red-400  mr-2'
          to={`/hooks`}
          key='hooks'
        >
          hooks
        </Link>
        <Link
          className=' text-base flex-1 text-center text-red-400  mr-2'
          to={`/todo`}
          key='todo'
        >
          todo
        </Link>
      </header>

      <Outlet />
    </div>
  )
}

export default App
