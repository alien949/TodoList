import { useState } from "react";
import "../components/Todo.css";
export function TodoList({ item, newTodo, setNewTodo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState(item.todoItem);
  const [editedTime, setEditedTime] = useState(item.timeItem);

  function handleTodoChange(e) {
    setEditedTodo(e.target.value);
  }

  function handleTimeChange(e) {
    setEditedTime(e.target.value);
  }

  function editTodo() {
    return (
      <>
        <input
          className="editInputOne"
          type="text"
          value={editedTodo}
          onChange={handleTodoChange}
          defaultValue={item.todoItem}
        />
        <input
          className="editInputTwo"
          type="number"
          onChange={handleTimeChange}
          value={editedTime}
          defaultValue={item.timeItem}
        />
      </>
    );
  }
  function deleteTodo() {
    const newList = newTodo.filter((todoItem) => {
      return todoItem.id !== item.id;
    });

    setNewTodo(newList);
  }

  function editButton() {
    setIsEdit(!isEdit);
  }
  return (
    <div className="item-div">
      <p>
        {isEdit ? (
          <div className="edit-div">{editTodo()}</div>
        ) : (
          `${editedTodo} - ${editedTime}`
        )}
      </p>
      <button
        onClick={() => {
          deleteTodo();
        }}
        className="delete"
      >
        Delete
      </button>

      <button className="edit" onClick={editButton}>
        Edit avoireeeeeeeeeeeeeeeeeeeeee
      </button>
    </div>
  );
}
