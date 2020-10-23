import React, { Component } from 'react';

class AddTodo extends Component {
   state = {
      title: '',
   };

   onChange = (e) => {
      this.setState({[e.target.name] : e.target.value})

   }
   formSubmitted = (e) => {
      const { title } = this.state;
      e.preventDefault();
      this.props.addTodo(title);
      this.setState({ title: '' });
   };
   render() {
      return (
         <form onSubmit={this.formSubmitted}>
            <input
               onChange={this.onChange}
               className='todo-input'
               type='text'
               name='title'
               value = {this.state.title}
            />
            <button className='todo-button' type='submit'>
               <i className='fas fa-plus-square'></i>
            </button>
         </form>
      );
   }
}

export default AddTodo;
