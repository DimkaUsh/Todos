import React from 'react'
import Title from './UI/Title'
import calssNames from 'classnames'
import Button from './UI/Button'

const TodoListItem = ( {className, item, ...props}) => {
    const classes = calssNames(
        'listItem',
        className,
    )

    return (
    <li
    className={classes}
    {...props}
    >
        <Title Tag='h3'>{item.title}</Title>
        <Button className='btn-listItem'>x</Button>
    </li>
  )
}

export default TodoListItem