import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../src/app.css";
import { TodoList } from "./components/Todo.jsx";
function App() {
  const [todo, setTodo] = useState("");
  const [time, setTime] = useState("");
  const [newTodo, setNewTodo] = useState([]);

  function todoUpdate(e) {
    setTodo(e.target.value);
  }
  function timeUpdate(e) {
    setTime(e.target.value);
  }

  function submit() {
    const id = uuidv4();
    setNewTodo([...newTodo, { todoItem: todo, timeItem: time, id: id }]);
    setTodo("");
    setTime("");
    console.log(id);
  }
  return (
    <div>
      <h1 className="todo-list-h1">Todo List</h1>
      <div className="inputs">
        <label htmlFor="todo-input">todo</label>
        <input
          value={todo}
          onChange={(e) => {
            todoUpdate(e);
          }}
          id="todo-input"
          type="text"
        />
        <label htmlFor="time-input">time</label>
        <input
          value={time}
          onChange={(e) => {
            timeUpdate(e);
          }}
          id="time-input"
          type="number"
        />
        <button onClick={submit} className="add">
          ADD
        </button>
      </div>

      {newTodo.map((item) => {
        return (
          <TodoList
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            key={item.id}
            item={item}
          />
        );
      })}
    </div>
  );
}

export default App;
