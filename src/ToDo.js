import React from 'react';
import { FaRegTimesCircle } from "react-icons/fa";


function ToDo(props) {
    const Done = (e) => {
        e.target.classList.toggle('done');
    }
    return (
        <div className='task'>
            <button
                onClick={() => {
                    props.onSelect(props.id);
                }}
            >
                <FaRegTimesCircle />
            </button>
            <li onClick={Done} title="Mark 🆗 ✅">
                {props.text}
            </li>
        </div>
    )
}

export default ToDo