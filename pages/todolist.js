import Layout from '../components/Layout';
import ToDoListItem from '../components/ToDoListItem';
import fetch from 'isomorphic-unfetch';

import { useState } from 'react';

// Invoked by Todolist.getInitialProps to fetch todo list items upon initial render.
const fetchTodoList = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const data = await res.json()

    return {
        fetchedTodoList: data
    }
};

function Todolist({ fetchedTodoList }) {

    const [list, setList] = useState(fetchedTodoList);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const postTodoItem = (item) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    };

    const handleSubmit = () => {
        let newItem = {
            title: inputValue,
            completed: false
        };

        // Adds new list item to database.
        postTodoItem(newItem);

        // Adds new list item to user interface.
        let newList = [...list, newItem];
        setList(newList);
        setInputValue('');
    };


    // New list item is added when enter key is pressed.
    const handleInputKeyPress = (event) => {
        if (event.keyCode === 13) {
            handleSubmit();
        }
    };

    const deleteListItem = (index) => {
        let newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    const strikeListItem = (index) => {
        let newList = [...list];
        newList[index].completed = !newList[index].completed;
        setList(newList);
    }

    return (
        <Layout>
            <div className="grid-container leader-1">
                <div className="column-24">
                    <h1>To Do List</h1>
                </div>
                <div className="column-8 post-16">
                    <div className="input-group">
                        <input className="input-group-input" type="text" placeholder="Enter To Do Item"
                            value={inputValue} onChange={handleInputChange} onKeyDown={handleInputKeyPress} />
                        <span className="input-group-button">
                            <button className="btn" onClick={handleSubmit}>Submit</button>
                        </span>
                    </div>
                </div>

                {list.map((listItem, index) =>
                    <ToDoListItem
                        key={index}
                        index={index}
                        listItem={listItem}
                        deleteListItem={deleteListItem}
                        strikeListItem={strikeListItem}
                    />)}

            </div>
        </Layout>
    );

}

// Loads list by invoking fetchTodoList.
Todolist.getInitialProps = async () => {
    return await fetchTodoList();
}

export default Todolist;