import './styles.css';
import {Done, EditWrite, Trash} from 'assets/index';
import {useState, createRef} from "react";

function Item({item, deleteItem, itemCompleted, editValue}) {
    const [more, setMore] = useState(false);
    const [editMode, setEditMode] = useState(true);
    const inputRef = createRef();

    return (
        <div className={`item ${item.done && 'done__true'} ${!editMode && 'edit__mode'}`}>
            <span className={'value'}>
                { editMode && (!more ? (item?.value?.length >= 45 ? item.value.slice(0, 45) : item.value) : item.value)}
                <form onSubmit={event => editValue(event, item.id)}>
                    <input defaultValue={item?.value?.length >= 45 ? item.value.slice(0, 45) : item.value}
                           disabled={editMode}
                           ref={inputRef}
                           style={!editMode ? {display: 'block'} : { display: 'none'}}
                    />
                </form>

                <span className={'more'}
                      onClick={() => setMore(!more)}
                      style={item?.value?.length >= 40 ? {display: 'block'} : {display: 'none'}}>...</span>
            </span>

            <div className={'manipulation'}>
                <img src={Done} alt={'done icon'} onClick={() => itemCompleted(item.id)}/>
                <img src={EditWrite} alt={'edit icon'} onClick={() => {
                    setEditMode(!editMode); inputRef.current.focus();
                }} />
                <img src={Trash} alt={'trash icon'} onClick={event => deleteItem(event, item.id)}/>
            </div>
        </div>
    )
}

export default Item;