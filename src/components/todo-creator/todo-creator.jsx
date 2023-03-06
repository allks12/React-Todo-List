import "./todo-creator.css"

export function FormCreator({createTodo}) {
    const submitForm = (event) => {
        event.preventDefault();
        createTodo(event.target["task-title"].value);
        event.target.reset();
    }

    return (
        <form className="form" onSubmit={submitForm}>
            <input className="addTaskInputField" type="text" name="task-title"></input>
            <button className="addBtn">Add</button>
        </form>
    )
}