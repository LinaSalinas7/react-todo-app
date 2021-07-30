import React, { useContext } from "react";
import AppContext from "../../store/AppContext";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.scss";

const TaskList = () => {
  const state = useContext(AppContext);

  return (
    <div className="taskList">
      {state.tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          completed={task.completed}
          title={task.title}
        />
      ))}
    </div>
  );
};

export default TaskList;
