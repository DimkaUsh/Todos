import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { filtersFetched } from '../redux/slices/filtersSlice'

import TabsGroup from './UI/TabsGroup'

const Filters = () => {

  const dispatch = useDispatch()
  const { filters, fetchedStatus } = useSelector(state => state.filters)

  useEffect(() => {
    dispatch(filtersFetched('http://localhost:3001/filters'))
  }, [])

  return (
    <div className='filters'>
      {fetchedStatus === 'success' ? <TabsGroup elements={filters}></TabsGroup> : "Загрузка фильтров..."}
    </div>
  )
}

export default Filters