import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = props => {
    const { todos, toggleCompleted, deleteTodo } = props;
    return (
        <List>
        {todos.map((todo, index) => (
            <ListItem dense button key={index} onClick={()=>{toggleCompleted(index)}}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.completed}
                />
              </ListItemIcon>
              <ListItemText primary={todo.value} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="Trash" onClick={() => {deleteTodo(index)}}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
        )}
      </List>
    );
}
export default TodoList;