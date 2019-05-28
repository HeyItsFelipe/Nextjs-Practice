import Layout from '../components/Layout';
import ToDoListItem from '../components/ToDoListItem';
import { useState } from 'react';

function Todolist() {

    const [list, setList] = useState([
        {
            value: 'Study',
            isCompleted: false
        },
        {
            value: 'Eat',
            isCompleted: false
        },
        {
            value: 'Sleep',
            isCompleted: false
        }

    ]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        let newItem = {
            value: inputValue,
            isCompleted: false
        };
        let newTodo = [...list, newItem];
        setList(newTodo);
        setInputValue('');
    };

    // New list item is added when enter key is pressed.
    const handleInputKeyPress = (event) => {
        if (event.keyCode === 13) {
            handleSubmit();
        }
    };

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

                {list.map((listItem, index) => <ToDoListItem key={index} listItem={listItem} />)}

            </div>
        </Layout>
    );

}

export default Todolist;