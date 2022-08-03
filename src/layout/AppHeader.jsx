import React from 'react'

const AppHeader = ( {children, className, ...props} ) => {
  return (
    <header className={className} {...props}>{children}</header>
  )
}

export default AppHeader