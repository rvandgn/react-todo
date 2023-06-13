import './styles.css';
import {ClearIcon} from "assets/index";

function Form({value, setValue, submitHandle}) {
    // Fn: submitHandle
    return (<form className={'form-container'} onSubmit={event => submitHandle(event)}>
        <div className={'input'}>
            <input type="text"
                   value={value}
                   placeholder={'Enter task'}
                   onChange={event => setValue(event.target.value)}/>
            {!!value && <img src={ClearIcon}
                             alt="clear icon"
                             onClick={() => setValue('')}
            />}
        </div>

        <button type="submit"> Add</button>
    </form>)
}

export default Form;