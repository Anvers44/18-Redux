
import "./module.style.css";
import style from "./listTask.module.css"
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo,  toggleTask} from "../../Redux/features/todoSlice";

const ListTask = () => {
    const dispatch =useDispatch()
    const todos = useSelector((state) => state.todo);
    console.log(todos)



    const handleDelete=(id)=>{
        dispatch(deleteTodo(id))
    }

    const handleToggle=(id)=>{
        dispatch(toggleTask(id))
    }

    return (
    <div>

        <ul className={style.list}>
            {todos.map((t) => (
                    <ul key={t.id} className={style.container}>
                        <li>{t.task}</li>
                       <li><input onClick={() => handleToggle(t.id)} type={"checkbox"} /></li>
                        <li><button onClick={() => handleDelete(t.id)}>X</button></li>
                    </ul>
                ))}
        </ul>
    </div>
  );
};
export default ListTask;