import React from 'react'
import classNames from 'classnames'

const Title = ({children, className, Tag}) => {

    const classes = classNames('title', className)

  return (
    <Tag className={classes}>{children}</Tag>
  )
}

export default Title