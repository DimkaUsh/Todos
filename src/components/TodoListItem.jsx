import { useDispatch } from 'react-redux'
import calssNames from 'classnames'
import axios from 'axios'

import { todoDelete } from '../redux/slices/todosSlice'

import Title from './UI/Title'
import Button from './UI/Button'

const TodoListItem = ( {className, item, id, ...props}) => {

    const dispatch = useDispatch()

    const classes = calssNames(
        'listItem',
        className,
    )

    const onClickListBtn = (event) => {
        event.stopPropagation()
        axios.delete(`http://localhost:3001/todos/${item.id}`)
        dispatch(todoDelete(item.id))
    }
    
    return (
    <li
    className={classes}
    {...props}
    >
        <Title Tag='h3'>{item.title}</Title>
        <Button className='btn-listItem' onClick={onClickListBtn}>x</Button>
    </li>
  )
}

export default TodoListItem