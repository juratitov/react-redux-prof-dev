import React from 'react';

const TodoListItem = ({lebel, important = false}) => {

    const style = {
        color: important ? 'tomato' : 'black'
    };
    
    return <span style={style}>{ lebel }</span>;
};

export default TodoListItem;