import './styles.css';
import Item from "components/List/Item";
import {useAutoAnimate} from "@formkit/auto-animate/react";

function List({deleteItem, itemCompleted, editValue, tasks}) {
    const [animationParent] = useAutoAnimate();
    return (
        <div className={'list-container'} ref={animationParent}>
            { tasks.length === 0 && <div className={'empty'}>
                No items found
            </div>}
            { tasks && tasks.map(item => <Item item={item} deleteItem={deleteItem}
                                               itemCompleted={itemCompleted}
                                               editValue={editValue}
                                               key={item.id} />
            )}
        </div>
    )
}

export default List;
