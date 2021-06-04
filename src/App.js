//Allows us to useState
import { useState } from 'react'
//Allows access to components
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"
//Creates functional components
function App() {
//A functional component that uses the useState hook to add react states
  const [todos, setTodos] = useState([
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);
//Creates functional component that does some stuff and uses the setTodos component.
  const addTodo = (todo) => {
    const id = Math.ceil(Math.random()*100000)
    const newTodo = {id, ...todo}
    setTodos([...todos, newTodo])
  }
//Renders to the DOM
  return (
    <div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos}/>
    </div>
  );
}

export default App;
