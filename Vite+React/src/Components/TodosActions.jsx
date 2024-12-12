import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, removeTodo } from '../features/reducers/TodoSlice'

function AddTodo() {
	const [input, setInput] = useState("")
	const todos = useSelector(state => state.todos)
	const dispatch = useDispatch()

	const addTodoHandler = (e) => {
		e.preventDefault()
		dispatch(addTodo(input))
		setInput('')
	}

	const deleteTodoHandler = () => {
		dispatch(deleteTodo())
	}

	return (
		<>
			<div className='container my-3'>
				<h4>List your Todos below: </h4>
				<div className='d-flex flex-wrap'>
					<form onSubmit={addTodoHandler}>
						<input type="text"
							placeholder='Enter a Todo'
							value={input} onChange={(e) => setInput(e.target.value)} />
						<button type='submit' className='mx-3 btn btn-dark'>Add Todo</button>
					</form>
					<button className='btn btn-danger' onClick={deleteTodoHandler}>Delete all</button>
				</div>

				<div>
					<h6 className='pt-4'>Todos list:</h6>
					{todos.map(singleTodo => (
						<li key={singleTodo.id}> {singleTodo.text}
							<button className='btn-close' onClick={() => {
								dispatch(removeTodo(singleTodo.id))
							}}></button>
						</li>
					))
					}
				</div>
			</div>
		</>
	)
}

export default AddTodo
