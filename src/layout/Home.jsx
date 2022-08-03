import React from 'react'
import AddForm from '../components/AddForm';
import TodosList from '../components/TodosList';

const Home = () => {
  return (
    <main>
      <AddForm></AddForm>
      <TodosList></TodosList>
    </main>
  )
}

export default Home;