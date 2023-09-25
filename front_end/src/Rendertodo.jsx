import { useEffect, useState } from "react";

function Rendertodo() {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        setInterval(() => {
            fetch('http://127.0.0.1:3002/todos', {
                method: "GET",
            }).then((resp) => {
                resp.json().then((data) => {
                    setTodo(data);
                })
            })
        }, 1000);
    }, []);


    return (
        <div>
            {todo.map((td) => {
                return (
                    <div>
                        <TodoRender title={td.title} description={td.description}></TodoRender>
                    </div>
                )
            })}
        </div>
    )
}

function TodoRender(probs) {
    return (
        <div>
        {probs.title}
        {probs.description}
        </div>
    )
}

export default Rendertodo;