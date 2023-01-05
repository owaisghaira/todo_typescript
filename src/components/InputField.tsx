import React from 'react'
import './styles.css'

interface props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAddTodo: (e: React.FormEvent) => void
}

const InputField: React.FC<props> = ({ todo, setTodo, handleAddTodo }) => {
  return (
    <form
      className="input"
      onSubmit={handleAddTodo}
    >
      <input
        type="text"
        placeholder="Enter a Task"
        className="input__box"
        value={todo}
        onChange={((e) => setTodo(e.target.value))}
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  )
}

export default InputField