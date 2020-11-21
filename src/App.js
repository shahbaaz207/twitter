import React from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import Header from './components/Header'
import { useStateValue } from './components/StateProvider'

const App = () => {
  const[{user},dispatch]=useStateValue()
  console.log(user)
  return (
    !user?
      <Header/>:
    <div className="app">
    
       <div className="app1">
      <Sidebar/>
      <Feed/>
      <Widgets/>
      </div>
    
    </div>
  )
}

export default App
