import { useState } from 'react';
import './App.css';
import { FormCreator } from './components/todo-creator/todo-creator';
import { TodoItem } from './components/todo-item/todo-item';

function App() {
  let [todos, addTodos] = useState([]);
  let [completed, completeTodos] = useState([]);

  const addTodo = (title) => {
    addTodos([...todos, { title }]);
  };

  const removeTodo = (index, column, updateFunction) => {
    return () => {
      column.splice(index, 1);
      updateFunction([...column]);
    };
  };

  const changeTitle = (index, column, updateFunction) => {
    return (title) => {
      column[index].title = title;
      updateFunction([...column]);
    };
  };

  const moveTodo = (index, oldColumn, oldUpdateFunction, newColumn, newUpdateFunction) => {
    return () => {
      const [todo] = oldColumn.splice(index, 1)
      newUpdateFunction([...newColumn, todo])
      oldUpdateFunction([...oldColumn])
    }
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <FormCreator createTodo={addTodo} />
      <div className="columns">
        <div className="column">
          {
            todos.map((todo, index) => {
              return <TodoItem key={index}
                title={todo.title}
                checked={false}
                deleteTodo={removeTodo(index, todos, addTodos)}
                changeTodoTitle={changeTitle(index, todos, addTodos)}
                moveTodo={moveTodo(index, todos, addTodos, completed, completeTodos)}/>;
            })
          }
        </div>
        <div className="column">
          {
            completed.map((todo, index) => {
              return <TodoItem key={index}
                title={todo.title}
                checked={true}
                deleteTodo={removeTodo(index, completed, completeTodos)}
                changeTodoTitle={changeTitle(index, completed, completeTodos)}
                moveTodo={moveTodo(index, completed, completeTodos, todos, addTodos)}/>;
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
