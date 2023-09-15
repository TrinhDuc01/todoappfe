import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ContextT = createContext();

const TodoContext = ({ children }) => {
    //state input 
    const [todo, setTodo] = useState('');
    // state kiem tra neu ma co 1 to do duoc them vao thi chay lai useeffect
    const [ren, setRen] = useState(0);
    const [listToDo, setListToDo] = useState([{}]);

    const handleAddTodo = () => {
        //.then de khi code chay tuan tu khong se say ra loi ham setRen chay trc axios
        axios.post('http://localhost:8080/api/v1/add-todo', {
            name: todo,
            status: 0
        })
            .then(() => setRen(pre => pre + 1))//thay doi state ren de chay lai useeffect
            .then(() => setTodo(''))
            .then(() => toast.success("Add to do successfully!"));
    }

    const handleDeleteTodo = (idTodo) => {
        axios.delete('http://localhost:8080/api/v1/delete-todo', {
            data: { id: idTodo }
        })
            .then(() => setRen(prev => prev + 1))
            .then(() => toast.success("Delete successfully!"));
    }

    const handleUpdateTodo = (idTodo) => {
        axios.put('http://localhost:8080/api/v1/update-todo', {
            id: idTodo 
        })
            .then(() => setRen(prev => prev + 1))
            .then(() => toast.success("Update successfully!"));
    }

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/to-do-list')
            .then((response) => {
                // Xử lý dữ liệu nhận được từ yêu cầu
                setListToDo(response.data)
            })
    }, [ren])

    const value = {
        todo,
        listToDo,
        setTodo,
        handleAddTodo,
        handleDeleteTodo,
        handleUpdateTodo
    }
    return (
        <ContextT.Provider value={value}>
            {children}
        </ContextT.Provider>
    );
}

const TContext = {
    ContextT,
    TodoContext
}

export default TContext