import { useState } from 'react'
import Input from './UI/Input'
import Button from './UI/Button'

const AddForm = () => {
  const [value, setValue] = useState('')

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
            onClick={(e) => {
                e.preventDefault()
                setValue('')
            }}
        >
            Add
        </Button>
    </form>
  )
}

export default AddForm