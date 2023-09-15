
import React, { useContext } from 'react'
import TContext from '../context/TodoContext';

export default function ListToDo() {
    const { listToDo, handleDeleteTodo,handleUpdateTodo } = useContext(TContext.ContextT)
    return (
        <div className='mt-5'>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Tình trạng</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {listToDo.toReversed().map((element,i) => (
                        <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{element.name}</td>
                            <td>{element.status ? 'Hoàn thành' : 'Đang chờ'}</td>
                            <td>
                                {element.status ? '':<button onClick={()=>handleDeleteTodo(element.id)} className="btn btn-danger mx-2">Xóa</button>}
                                <button onClick={()=>handleUpdateTodo(element.id)} className={element.status?"btn btn-success disabled":"btn btn-success"}>Hoàn thành</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table></div>
    )
}
