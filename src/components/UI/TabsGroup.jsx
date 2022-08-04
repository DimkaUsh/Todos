import { useState } from "react"
import calssNames from 'classnames'

import Button from "./Button"

const TabsGroup = ({className, elements, ...props}) => {
  const [activeTab, setActiveTab] = useState('all')
  
    const classes = calssNames(
        'tabs',
        className
    )

    const isActive = (id) => {
        const active = 'active'
        const disabled = 'disabled'
        if (id === activeTab) {
            console.log(id)
            return {active, disabled}
        }
    }

  const tabs = () => {
    return elements.map(element => {
        return <Button 
                    key={element.id}
                    {...isActive(element.id)}
                    onClick={() => {setActiveTab(element.id)}}
                >
                    {element.title}
                </Button> 
    })
  }
  
  return (
    <div className={classes} {...props}>
        {tabs()}
    </div>
  )
}

export default TabsGroup
