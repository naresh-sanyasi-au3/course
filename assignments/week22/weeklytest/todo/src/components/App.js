import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import '../App.css'

const App = () => (
  <div className="container mt-5">
    <h2><strong> <u>ToDo App using React  </u></strong></h2>
    <br/><br/><br/>
    <div className="custom">
      <AddTodo />
      <br/><br/>
      <VisibleTodoList />
      <br/><br/>
      <Footer />
    </div>
  </div>
)

export default App

