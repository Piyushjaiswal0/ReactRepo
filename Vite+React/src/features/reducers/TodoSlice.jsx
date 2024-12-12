import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [{id:"01", text:"Hello world"}]
};

function addTodoFunc(state, action){
    console.log("AddTodoFunc called");
    const todo = {
        id: nanoid(),
        text: action.payload
    }
    state.todos.push(todo) // to access state and push into state
};

const deleteTodoFunc = (state, action) => {
    console.log("DeleteTodoFunc called");
    state.todos = [] // delete the store as we are giving empty array
};

const UpdateTodoFunc = (state, action) => {
    console.log("UpdateTodoFunc called");
    const updatedString = action.payload.text
    const todoIsPresent = state.todos.find((singleTodo)=>{
        singleTodo.id == action.payload.id
    })
    if (todoIsPresent) {
        singleTodo.text = updatedString;
    }
};

export const todoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        addTodo: addTodoFunc,
        removeTodo: (state, action)=>{
            console.log("RemoveTodoFunc called");
            state.todos = state.todos.filter(singleTodo =>
                singleTodo.id !== action.payload
            )
        },
        deleteTodo: deleteTodoFunc,
        UpdateTodo: UpdateTodoFunc
    }
})

export const {addTodo, removeTodo, deleteTodo, UpdateTodo} = todoSlice.actions;
export default todoSlice.reducer;