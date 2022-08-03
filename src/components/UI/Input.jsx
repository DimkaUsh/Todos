import React from 'react'
import calssNames from 'classnames'

const Input = ({ id, className, label, error, ...props}) => {

    const classes = calssNames(
        'input',
        className,
        { error }
    )

  return (
    <div className="inputWrapper">
        <label 
            htmlFor={id}>
            {label}
        </label>
        <input 
            name={id}
            id={id}
            className={classes}
            {...props}
        />
        {error
            && <span className='inputError'>{error}</span>
        }    
    </div>
  )
}

export default Input