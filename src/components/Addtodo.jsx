import {useState} from 'react';

function Addtodo(){
       
    const [todoTitle, setTodoTitle] = useState("");
    const [todoList, setTodoList] = useState([]);

    function changeTodo(v){
        setTodoTitle(v)
      }
    
      function addTodo(title){
        if(!title){
          alert("Provide a valid todo task")
        }
        else {
          const newTodo = {
            id: Date.now(),
            title: title
          }
          setTodoList([ newTodo, ...todoList])
        }
      }

    return (
     <div className='container'>   
      <div className="input-field">
        <input onChange={(event)=> changeTodo(event.target.value)} value = {todoTitle} type="text" placeholder='Enter your task' />
        <button onClick={(e)=> {
          e.preventDefault();
          addTodo(todoTitle);
          setTodoTitle("")
        }} className="btn1">Add Todo</button>
        </div>

        <ul className='list-container'> 
            {todoList.map((todo) => (
              <li>
                <div className='title'>{todo.title}</div>
                <button onClick = {(e) => {
                    e.preventDefault();
                  const newTodoList = todoList.filter((item) => item.id !== todo.id);
                  setTodoList(newTodoList)
                  }} className='del'>Delete</button>
              </li>
            ))}
          </ul>
        </div>
    );
}
export default Addtodo;