import React, { Component } from 'react';
import TodoItem from './TodoItem'

class Todos extends Component {
   
   render() {
      return this.props.todos.map((todo) => (
         <TodoItem todo = {todo} key= {todo.id} completeTodo = {this.props.completeTodo} deleteTodo={this.props.deleteTodo}/>
      ));
   }
}

export default Todos;
