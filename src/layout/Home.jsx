import React from 'react'
import AddForm from '../components/AddForm';
import Filters from '../components/Filters';
import TodosList from '../components/TodosList';

const Home = () => {
  return (
    <main>
      <AddForm></AddForm>
      <Filters></Filters>
      <TodosList></TodosList>
    </main>
  )
}

export default Home;