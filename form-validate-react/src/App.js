import React, {useState} from 'react'

const App = () => {

  const [taskName,setTaskName]=useState("");  
  const [description,setDescription]=useState("");
  const [flag,setFlag]= useState(false);
  const [priority,setPriority]=useState("");
  const [completed,setCompleted]=useState("");

  const [tesks,SetTasks]=useState([]);


  const handleInputChange = (ev)=>{
    setFlag(false)

    if (ev.target.name === 'taskName'){
      setTaskName(ev.target.value);
    } else{
      setDescription(ev.target.value);
    }
  }

  const handleSubmit = (ev)=> {
    ev.preventDefault();
    setFlag(true)
    if (taskName === "" || description === "") return;
  }

  const onChangePriority = (ev)=> {
    if (ev.target.value === "Yes"){
      setPriority(ev.target.value)
    } else {
      setPriority(ev.target.value)
    }
  }

  const onChangeCompleted = (ev)=> {
    if (ev.target.value === "Yes"){
      setCompleted(ev.target.value)
    } else {
      setCompleted(ev.target.value)
    }
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="taskName"
          placeholder="Enter Task Name"
          onChange={handleInputChange}
        ></input>{" "}
        <br />
        {taskName === "" && flag && (
          <p style={{ color: "red" }}>Task Name is required</p>
        )}
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleInputChange}
        ></input>{" "}
        <br />
        {description === "" && flag && (
          <p style={{ color: "red" }}>Description is required</p>
        )}
        <label for="priority">Priority</label>
        <input
          type="radio"
          id="priority1"
          name="priority"
          value="Yes"
          onChange={onChangePriority}
        ></input>
        <label for="priority1">Yes</label>
        <input
          type="radio"
          id="priority2"
          name="priority"
          value="No"
          onChange={onChangePriority}
        ></input>
        <label for="priority2">No</label> <br />
        <label for="completed">completed status</label>
        <input
          type="radio"
          id="completed1"
          name="completed"
          value="Yes"
          onChange={onChangeCompleted}
        ></input>
        <label for="completed1">Yes</label>
        <input
          type="radio"
          id="completed2"
          name="completed"
          value="No"
          onChange={onChangeCompleted}
        ></input>
        <label for="completed2">No</label> <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <ul>
        <li>Task Name : {taskName}</li>
        <li>Description : {description}</li>
        <li>Priority : {priority}</li>
        <li>Completed : {completed}</li>
      </ul>
    </div>
  );
}
export default App