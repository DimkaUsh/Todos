import React from 'react'
import AddForm from '../components/AddForm';
import TodosList from '../components/TodosList';
import Filters from '../components/Filters';

const Home = () => {
  return (
    <main className='home'>
      <AddForm></AddForm>
      <Filters></Filters>
      <TodosList></TodosList>
    </main>
  )
}

export default Home;