import { useEffect, useRef, useState } from "react";

function App() {
  const inputRef = useRef();
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      setTaskList([...taskList, task]);
      setTask("");
    } else {
      setError("need not to empty");
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="border p-4">
          <h1 className="text-center mb-4">Task App</h1>
          <form action="" className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="enter task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />

              {error ? <p className="text-danger mt-2">{error}</p> : null}
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button className="btn btn-primary" type="submit">
                Add Task
              </button>
            </div>
          </form>

          <ul className="list-group mt-3">
            {taskList.map((task, index) => (
              <li key={index} className="list-group-item">
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
