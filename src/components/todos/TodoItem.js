import React, { Component } from 'react';

class TodoItem extends Component {
   styleTodo = () => {
      return {
         opacity: this.props.todo.isCompleted ? '0.5' : '1',
         textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none',
      };
   };

   render() {
      const { title, id } = this.props.todo;
      return (
         <div style={this.styleTodo()} className='todo'>
            <li className='todo-list'>{title}</li>
            <button
               onClick={this.props.completeTodo.bind(this, id)}
               className='complete-todo'
            >
               <i className='fas fa-check'></i>
            </button>
            <button
               onClick = {this.props.deleteTodo.bind(this, id)}
               className='trash-todo'
            >
               <i className='fas fa-trash'></i>
            </button>
         </div>
      );
   }
}

export default TodoItem;
