import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { filtersFetched, filterSelect } from '../redux/slices/filtersSlice'
import { todosFetched } from '../redux/slices/todosSlice'

import TabsGroup from './UI/TabsGroup'

const Filters = () => {

  const dispatch = useDispatch()
  const { filters, fetchedStatus, filterSelected } = useSelector(state => state.filters)

  useEffect(() => {
    dispatch(filtersFetched('http://localhost:3001/filters'))
  }, [])

  const onClickTab = (id) => {
    dispatch(filterSelect(id))
    let url = `http://localhost:3001/todos`
    if (id !== 'all'){
      url = url + `?fulfilled=${id}`
    }
    dispatch(todosFetched(url))
  }

  const render = () => {
    let result = ''
    if (fetchedStatus === 'success') {
      result = <TabsGroup 
                elements={filters}
                activeTab={filterSelected}
                onClickTab={onClickTab}
                className='filters'
              ></TabsGroup>
    }  else {
      result ="Загрузка фильтров..."
    }

    return result
  }

  return (
    <>
      {render()}
    </>
  )
}

export default Filters