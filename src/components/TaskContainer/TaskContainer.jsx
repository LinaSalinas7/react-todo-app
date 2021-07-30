import React, { useContext, useEffect } from "react";
import axios from "axios";
import AppContext from "../../store/AppContext";
import TaskList from "../TaskList/TaskList";
import "./TaskContainer.scss";
import TaskForm from "../TaskForm/TaskForm";
import TaskSorter from "../TaskSorter/TaskSorter";

const TaskContainer = () => {
  const state = useContext(AppContext);
  const loadTasks = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const tasks = response.data.slice(0, 5);
      state.setTasks(tasks);
    } catch (error) {}
  };

  useEffect(() => {
    loadTasks();
    console.log("lina");
  }, []);

  return (
    <div className="taskContainer">
      <TaskForm />
      <TaskSorter />
      <TaskList />
    </div>
  );
};

export default TaskContainer;
