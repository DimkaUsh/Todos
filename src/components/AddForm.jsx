import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

import { todoAdd } from '../redux/slices/todosSlice'

import Input from './UI/Input'
import Button from './UI/Button'

const AddForm = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onSubmitForm = (e) => {
    e.preventDefault()

    const newTodo = {
        id: uuidv4(),
        title: value,
        fulfilled: false
    };

    dispatch(todoAdd(newTodo))
    axios.post('http://localhost:3001/todos', newTodo)

    setValue('')
  }

    return (
    <form className='addForm'>
        <Input 
            type = "text" 
            value={value} 
            placeholder='Title...' 
            onChange={(e) => {setValue(e.target.value)}}>
        </Input>

        <Button 
            type="submit" 
            onClick={onSubmitForm}
        >
            Add
        </Button>
    </form>
  )
}

export default AddForm