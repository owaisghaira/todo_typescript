import React, { useState } from 'react';
import styles from './App.module.css';
import InputField from './components/InputField';

interface todoModal {
  id: number,
  todo: string,
  isDone: boolean
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<todoModal[]>([])

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo('')
    }
  }

  return (
    <div className={styles.App}>
      <h1>TO-DO List</h1>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;
