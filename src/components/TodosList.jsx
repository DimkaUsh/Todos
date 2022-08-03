import React from 'react'
import TodoListItem from './TodoListItem'

const TodosList = () => {

  const items = [
    {
      id: 1,
      title: "Купить хлеб",
      state: "fulfilled"
    },
    {
      id: 2,
      title: "Сделать зарядку",
      state: "unfulfilled"
    }
]

  const renderList = () => {
    return items.map(item => {
      return <TodoListItem 
                item={item} 
                key={item.id}
                className = {item.state === 'fulfilled' ? 'fulfilled' : ''}
              ></TodoListItem>
    })
  }

  return (
    <ul className='todoList'>
      {renderList()}
    </ul>
  )
}

export default TodosList