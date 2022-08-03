import React from 'react'
import Input from './UI/Input'

const AddForm = () => {


  return (
    <form className='addForm'>
        <Input type = "text" placeholder='Title...'></Input>
        <button type="submit">Add</button>
    </form>
  )
}

export default AddForm