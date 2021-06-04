//Use the useState hook to import States
import { useState } from 'react'
//Create AddTodo functional component
const AddTodo = ({ onAdd }) => { 
    const [item, setItem] = useState('')
//Create onSumbit funtional component
    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({item})

        setItem('')
    }
//Renders in the DOM
    return (
        <form onSubmit={onSubmit}>
            <label>Add Todo:</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                value={item}
                onChange={ (e) => setItem(e.target.value)}
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo
