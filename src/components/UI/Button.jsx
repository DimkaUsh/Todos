import React from 'react'
import calssNames from 'classnames'

const Button = ({ children, className, active, disabled, ...props}) => {
    const classes = calssNames(
        'btn',
        className,
        { active }
    )

  return (
    <button
    className={classes}
    disabled={disabled}
    {...props}
    >
        {children}
    </button>
  )
}

export default Button