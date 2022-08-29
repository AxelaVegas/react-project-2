import { useState } from 'react';

export const Chat = (props) => {

/*     const [value, setValue] = useState(null)

    const handleChange = (ev) => {
        setValue(ev.target.value)
    } 

    return <div className='app-body'>
        <h2>Enter your message</h2>
        <form>
            <label>
                <p>{props.author}</p>
                <input type="text" name="name" className="inp-message" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Отправить" />
        </form>
    </div> */


    const message = ''
    const handleChange = (ev) => {
        message = ev.target.value
        console.log(message)
    } 

    const longHandleChange = () => {
        props.changeMessageList(message)
    }

    return <div className='app-body'>
        <h2>Enter your message</h2>
        <form>
            <label className='chat'>
                <p>{props.author}</p>
                <input type="text" name="name" className="inp-message" onChange={handleChange(ev)} />
                {/* <input type="text" name="name" className="inp-message" /> */}
            </label>
            {/* <input onClick={longHandleChange(message)} type="submit" value="Отправить" /> */}
            <input onClick={longHandleChange} value="Отправить" />
        </form>
    </div>



}