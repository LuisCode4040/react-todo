import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

/* Components */
import TodoForm from './TodoForm';
import TodoList from './TodoList';

/*
  1. Stateful Components:
    - Class
    - State
    - Lifecycle methods

  2. Stateless Components (Functional Components):
    - Functions
    - No State
    - No lifecycle methods
*/

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      todos: []
    }
  }

  updateValue = event => {
    this.setState({value : event.target.value});
  }

  saveTodo = () => {
    if(this.state.value){
      this.setState({
        todos: [...this.state.todos, {value: this.state.value, completed: false}],
        value: ''
      });
    }
  }

  deleteTodo = index => {
    this.setState({
      todos: this.state.todos.filter( (_, i) => index !== i)
    });
  };

  toggleCompleted = index => {
    const todos = this.state.todos;
    todos[index].completed = !todos[index].completed;
    this.setState({todos});
  }

  render(){
    return (
      <React.Fragment>
        <Typography align="center" variant="h2" gutterBottom>
          To-Do App
        </Typography>
        <Grid container justify="center">
          <Grid item>
            <TodoForm value={this.state.value} 
            updateValue={this.updateValue} 
            saveTodo={this.saveTodo} />
          </Grid>
        </Grid>
  
        <Grid container justify="center">
          <Grid item md={8}>
            <TodoList toggleCompleted={this.toggleCompleted}
            deleteTodo={this.deleteTodo}
            todos={this.state.todos}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
