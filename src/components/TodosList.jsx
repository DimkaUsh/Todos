import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import axios from 'axios'

import { todosFetched, todoChange } from '../redux/slices/todosSlice'

import TodoListItem from './TodoListItem'
import Spinner from './UI/spinner/Spinner'

const TodosList = () => {
  const dispatch = useDispatch();
  const {todos, fetchedStatus} = useSelector(state => state.todos)
  const { filterSelected } = useSelector(state => state.filters)

useEffect(() => {
  let url = `http://localhost:3001/todos`
  if (filterSelected !== 'all'){
    url = url + `?fulfilled=${filterSelected}`
  }
  dispatch(todosFetched(url))
}, [])

if (fetchedStatus === 'loading') {
 return <Spinner />
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
              onClick = {() => onItemClick(item)}
            ></TodoListItem>
  })
}

}

export default TodosList