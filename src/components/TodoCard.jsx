import React from 'react'

const TodoCard = () => {
    return (
        <div>
            <div className="todo-cards">
                <div className="todo_h2">
                    <h2>HomeWork TODO</h2>
                </div>
                <div className="todo_p_span todo_border_bottom">
                    <p>Placement Test B1</p>
                    <span>English Placement Test</span>
                </div>
                <div className="todo_p_span todo_border_bottom">
                    <p>Placement Test B1</p>
                    <span>English Placement Test</span>
                </div>
                <div className="todo_p_span">
                    <p>Placement Test B1</p>
                    <span>English Placement Test</span>
                </div>
                <button className="view">View All</button>
            </div>
        </div>
    )
}

export default TodoCard