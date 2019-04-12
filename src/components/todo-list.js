import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem lebel='Drink Coffee' /></li>
            <li><TodoListItem lebel='Build App' important/></li>
        </ul>
    );   
};

export default TodoList;