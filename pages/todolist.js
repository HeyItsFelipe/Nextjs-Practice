import Layout from '../components/Layout';
import ToDoListItem from '../components/ToDoListItem';
import fetch from 'isomorphic-unfetch';

import { useState } from 'react';

function Todolist({ fetchedList }) {

    const [list, setList] = useState(fetchedList);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        let newItem = {
            title: inputValue,
            completed: false
        };
        let newList = [...list, newItem];

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))

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

Todolist.getInitialProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const data = await res.json()

    return {
        fetchedList: data
    }
}

export default Todolist;