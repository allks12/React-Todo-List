import "./todo-item.css"

export function TodoItem({title, checked, deleteTodo, changeTodoTitle, moveTodo}) {
    const updateTitle = (event) => {
        changeTodoTitle(event.target.textContent)
    }

    return (
        <div className="todoItem">
            <input className="readyTask" type="checkbox" checked={checked} onChange={moveTodo}/>
            <p className="taskTitle" onBlur={updateTitle} contentEditable>{title}</p>
            <button className="deleteBtn" onClick={deleteTodo}>Delete</button>
        </div>
    )
} 