import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PeopleList from './routes/peopleList'
import Hooks from './routes/hooks'
import Todo from './routes/todo'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='PeopleList' element={<PeopleList />} />
          <Route path='Hooks' element={<Hooks />} />
          <Route path='Todo' element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
