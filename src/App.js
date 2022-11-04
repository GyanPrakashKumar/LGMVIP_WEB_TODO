import React, { useState } from 'react';
import './index.css';
import { FaPlus } from "react-icons/fa";
import ToDo from './ToDo.js';

function App() {

  const [todos, setTodos] = useState("");
  const [items, setItems] = useState([]);
  const inputItem = (e) => {
    setTodos(e.target.value);
  };
  const addItem = () => {
    setItems((oldItems) => {
      return [...oldItems, todos];
    });
    setTodos("");
  };
  const delItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  const preventEmpty = (e) => {
    if (todos === "") {
      e.preventDefault();
    } else {
      addItem();
    }
  };

  return (
    <div className="App">
      <div className='todoLists'>
        <h1>My To-Do App</h1>
        <div className='todoInput'>
          <input
            type='text'
            placeholder='Add a new task'
            value={todos}
            required
            onChange={inputItem}
          />
          <button
            type='submit'
            onClick={preventEmpty}
          >
            <FaPlus />
          </button>
        </div>
        <div className='taskList'>
          <div className='task'>
            <ol>
              {items.map((item, index) => (
                <ToDo
                  text={item}
                  key={index}
                  id={index}
                  onSelect={delItem}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
