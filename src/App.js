import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/todos/AddTodo'
import Todos from './components/todos/Todos';

class App extends Component {
   state = {
      todos: [],
   };

   componentDidMount =  () =>{
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => res.json())
      .then(data => this.setState({ todos: data }))
   }

   // Complete Todo
   completeTodo = (id) => {
      this.setState({
         todos: this.state.todos.map((todo) => {
            if(todo.id === id){
               todo.isCompleted = !todo.isCompleted
            }
            return todo
         })
      })
   };

   deleteTodo = (id) =>{
      this.setState({
         todos: [...this.state.todos.filter((todo) => todo.id !== id)]
      })
   }

   

   addTodo = (title) =>{
      fetch('https://jsonplaceholder.typicode.com/todos', {
         method :'POST',
         headers: {
            Accept: 'application/json, text/plain, */* ',
            'Content-type': 'application/json'
         },
         body : JSON.stringify({ title })
      })
      .then(res => res.json())
      .then(data => this.setState({
         todos: [...this.state.todos, data]
      }))
     
      // const newTodo =  {
      //    id: 4,
      //    title: title,
      //    isCompleted : false
      // 
      
   }
   
   render() {
      return (
         <div className='container'>
            <Header />
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} completeTodo={this.completeTodo} deleteTodo={this.deleteTodo} />
         </div>
      );
   }
}

export default App;
