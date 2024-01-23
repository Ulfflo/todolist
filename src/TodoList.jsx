export default function TodoList({
  todos,
  handleClick,
  handleDelete,
  handleDone,
}) {
  return (
    <div>
      <button onClick={handleClick}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
            onClick={() => handleClick(todo.id)}
          >
            {todo.title}
            <button style={{margin: 5}} onClick={() => handleDone(todo)}>
              {todo.done ? "Undo" : "Done"}
            </button>
            <button onClick={() => handleDelete(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
