import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../Redux/features/todoSlice";

const AddTask  = () => {

    const dispatch = useDispatch()
    const [text,setText]=useState("")
    const handleSubmit= (e) => {
        e.preventDefault()
        setText("")
        text?dispatch(addTodo(text)): setText("")
    }

  return (
    <div>

      <form  onSubmit={handleSubmit}>
        <label>Task</label>
        <input onChange={(e)=>{setText(e.target.value)}} value={text}/>
        <button onClick={handleSubmit}>Submit</button>
      </form>

    </div>
  );
};

export default AddTask;