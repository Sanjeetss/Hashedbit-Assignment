import React, { useState } from 'react';
import '../styles/ToDoList.css';
import trash from '../assets/trash-icon.png';

function TodoListComponent() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const addItem = () => {
    setList([...list, input]);
    setInput('');
  };

  const deleteItem = (id) => {
    const newList = list.filter((_, index) => index !== id);
    setList(newList);
  };

  return (
    <div className="todo_body">
      <div>
      <input type="text" placeholder="Enter a task" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={addItem}>+</button>
      </div>
        {list.map((item, index) => (
          <div key={index} className="todo-item">
            {item}
            <button onClick={() => deleteItem(index)}><img src={trash} alt='bin'/></button>
          </div>
        ))}
    </div>
  );
}

export default TodoListComponent;
