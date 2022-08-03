import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import TodoListItem from './TodoListItem'
import { todosFetched } from '../redux/slices/todosSlice'

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

function renderList()  {
  return todos.map(item => {
    return <TodoListItem 
              key={item.id}
              item={item} 
              className = {item.state === 'fulfilled' ? 'fulfilled' : ''}
            ></TodoListItem>
  })
}

}

export default TodosList