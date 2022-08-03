import React from 'react'
import Title from '../components/UI/Title'
import classNames from 'classnames'

const AppHeader = ( {children, className, ...props} ) => {

    const classes = classNames(
        'header',
        className,
    )
  return (
    <header className={classes} {...props}>
        <Title Tag='h1'>{children}</Title>
    </header>
  )
}

export default AppHeader