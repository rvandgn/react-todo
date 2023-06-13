import 'assets/styles/styles.css';
import Form from "components/Form";
import List from "components/List";
import {useEffect, useState} from "react";

function App() {
    const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []);
    const uuid = Math.floor(Math.random() * new Date());
    const [value, setValue] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function submitHandle(event) {
        event.preventDefault();
        setTasks(prevState => {
            const arr = [...prevState, {id: uuid, value: event.target[0].value, done: false}];
            localStorage.setItem('tasks', JSON.stringify(arr));
            setValue('');
            return arr;
        });
    }

    function deleteItem(event, id) {
        setTasks(prevState => {
            const filtered = prevState.filter(p => p.id !== id);
            localStorage.setItem('tasks', JSON.stringify(filtered));
            return filtered;
        });
    }

    function itemCompleted(id) {
        const index = tasks.findIndex(item => item.id === id);
        setTasks(prevState => {
            const item = prevState[index];
            
            return [...prevState.slice(0, index),
                {...item, done: !item.done },
                ...prevState.slice(index + 1)];
        });
    }

    function editValue(event, id) {
        event.preventDefault();
        const index = tasks.findIndex(item => item.id === id);
        setTasks(prevState => {
            const item = prevState[index];

            return [...prevState.slice(0, index),
                {...item, value: event.target[0].value },
                ...prevState.slice(index + 1)];
        });
    }

    return (<div className={'App'}>
        <div className={'container'}>
            <Form value={value} setValue={setValue} submitHandle={submitHandle}/>
            <List deleteItem={deleteItem} itemCompleted={itemCompleted} editValue={editValue} tasks={tasks}/>
        </div>
    </div>);
}

export default App;
