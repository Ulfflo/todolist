import { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

const todo = [
  { id: 0, title: "diska", done: false },
  { id: 1, title: "dammsuga", done: false },
  { id: 2, title: "bädda sängen", done: false },
  { id: 3, title: "tvätta", done: false },
];

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");


  function handleText(e) {
    setText(e.target.value);
  }

  function handleClick() {
    if (text.trim()) {
      setTodos([
        ...todos,
        { id: todos.length, title: text.trim(), done: false },
      ]);
      setText("");
    }
  }

  function handleDelete(todo) {
    setTodos(todos.filter((item) => item.id !== todo.id));
  }

  function handleDone(todo) {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, done: !item.done } : item
      )
    );
  } 

  return (
    <div style={{ display: "flex", marginLeft: 30 }}>
      <div>
        <input type="text" value={text} onChange={handleText} />
      </div>
      <div style={{marginLeft: 5}}>
        <TodoList todos={todos} handleClick={handleClick} handleDelete={handleDelete} handleDone={handleDone}/>
      </div>
    </div>
  );
}

export default App;
