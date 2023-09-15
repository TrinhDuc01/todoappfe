

import React, { useContext } from 'react'
import TContext from '../context/TodoContext'

export default function InputToDo() {
    const { todo, setTodo, handleAddTodo } = useContext(TContext.ContextT)

    return (
        <>
            <div className='col-4'></div>
            <div className='col-4'>
                <div className="input-group my-3">
                    <input value={todo} required onChange={(e) => setTodo(e.target.value)} type="text" name='name' className="form-control" placeholder="Nhập ToDo" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <button onClick={handleAddTodo} className="input-group-text btn btn-primary" >Thêm</button>
                </div>
            </div>
        </>
    )
}
