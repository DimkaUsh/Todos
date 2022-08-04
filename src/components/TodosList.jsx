import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import TodoListItem from './TodoListItem'
import { todosFetched, todoChange } from '../redux/slices/todosSlice'
import axios from 'axios'


const TodosList = () => {
  const dispatch = useDispatch();
  const {todos, fetchedStatus} = useSelector(state => state.todos)

useEffect(() => {
  dispatch(todosFetched('http://localhost:3001/todos'))
}, [])

if (fetchedStatus === 'loading') {
 return 'Загрузка...'
} else if (fetchedStatus === 'error') {
  return 'Произошла ошибка попробуйте позже :('
} else {
  return (
    <ul className='todoList'>
      {renderList()}
    </ul>
  )
}

function onItemClick(item) {
  const fullfiled = item['fulfilled']
  axios.patch(`http://localhost:3001/todos/${item.id}`, {fulfilled: !fullfiled})
  dispatch(todoChange(item.id))
}

function renderList()  {
  return todos.map(item => {
    return <TodoListItem 
              key={item.id}
              item={item} 
              className = { item.fulfilled ? 'fulfilled' : ''}
              onClick = {(event) => onItemClick(item)}
            ></TodoListItem>
  })
}

}

export default TodosList