import List from './list/List'

function App() {
  const todos = [
    { id: 1, text: 'finish the course123' },
    { id: 2, text: '123123' }
  ]
  return (
    <div className='App'>
      <List items={todos}></List>
    </div>
  )
}

export default App
