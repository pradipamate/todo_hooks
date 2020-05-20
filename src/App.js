import React, { useState } from 'react';
import ReactDom from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
library.add(faTrash);

export default function TodoList() {

    const [newtodo, Setnewtodo] = useState('')
    const [todo, SetTodo] = useState([])

    const changehandler = (e) => {
        e.preventDefault();
        Setnewtodo(e.target.value);
        console.log("setNew", e.target.value);

    }

    const submitted = (e) => {
        e.preventDefault();
        if (newtodo === '')
            return
        SetTodo([...todo, { id: Date.now(), text: newtodo }])
        console.log("SetTodo", SetTodo);
        e.target.reset()

    }
    const removeTodo = (id) => {
        SetTodo(todo.filter((item) => item.id !== id))
        console.log("asdsdds", SetTodo);
    }
    return (
        <div className="todolist">
            <h1>TODOLIST USING HOOKS</h1>
            <div className="main_part">
                <form onSubmit={submitted}>
                    <input placeholder="Enter Item" onChange={changehandler} />
                </form>

                <ul>
                    {todo.map(item => (
                        <li key={item.id}>
                            {item.text}
                            <button href="#" onClick={() => removeTodo(item.id)}>
                                <span><i class="fa fa-trash" aria-hidden="true"></i></span></button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}