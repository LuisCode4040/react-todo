import React from 'react';
import TextField from '@material-ui/core/TextField';

const TodoForm = props => {
    const { value, saveTodo, updateValue } = props;
    return (
        <form onSubmit={
            e => {
              e.preventDefault();
              saveTodo();
            }
          }>
          <TextField placeholder="Add todo" margin="normal" onChange={updateValue} value={value}></TextField>
          </form>
    );
}
export default TodoForm;