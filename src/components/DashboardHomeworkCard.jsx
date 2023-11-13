import React from 'react'
import TodoCard from './TodoCard'
import CategoryCards from './CategoryCards'

const DashboardHomeworkCard = () => {
    return (
        <div>
            <div className="todo_container container">
                <TodoCard/>
                <TodoCard/>
                <TodoCard/>
            </div>
            <div className="cards_container container">
               <CategoryCards/>
               <CategoryCards/>
               <CategoryCards/>
               <CategoryCards/>
               <CategoryCards/>
               <CategoryCards/>
               <CategoryCards/>
               <CategoryCards/>
               <CategoryCards/>
               <CategoryCards/>
               <CategoryCards/>
               <CategoryCards/>
               <CategoryCards/>
            </div>
        </div>
    )
}

export default DashboardHomeworkCard