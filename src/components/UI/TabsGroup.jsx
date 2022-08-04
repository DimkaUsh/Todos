import calssNames from 'classnames'

import Button from "./Button"

const TabsGroup = ({className, elements, activeTab, onClickTab, ...props}) => {

  const classes = calssNames(
    'tabs',
    className
  )

  const isActive = (id) => {
    const active = 'active'
    const disabled = 'disabled'
    if (id === activeTab) {
      return {active, disabled}
    }
  }

  const onClickButton = (id) => {
    onClickTab(id)
  }

  const tabs = () => {
    return elements.map(element => {
      return <Button 
                  key={element.id}
                  {...isActive(element.id)}
                  onClick={() => {onClickButton(element.id)}}
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
