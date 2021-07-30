import React, { useContext, useState } from "react";
import "./TaskSorter.scss";
import AppContext from "../../store/AppContext";
import { sortLabels } from "../constants/sort";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
//import Option from "@material-ui/core/Option";

const TaskSorter = () => {
  const state = useContext(AppContext);

  const [sortType, setSortType] = useState(sortLabels[0]);

  const handleSelect = (event) => {
    const itemSelected = event.target.value;
    setSortType(itemSelected);
    state.sortTasks(itemSelected);
  };

  return (
    <div className="taskSorter">
      <Select value={sortType} onChange={handleSelect}>
        {sortLabels.map((sortLabel) => (
          <MenuItem key={sortLabel} value={sortLabel}>
            {sortLabel}
          </MenuItem>
        ))}
      </Select>
    </div>
  );

  return <p>TaskSorter</p>;
};

export default TaskSorter;
