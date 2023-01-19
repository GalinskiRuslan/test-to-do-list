import React from "react";
import { addedToDos } from "../../Redux/toolkitSlice";
import { useSelector, useDispatch } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import ToDoListItem from "../ToDoListItem";
import "./scss/to-do-list.scss";

const ToDoList = () => {
  const tasks = useSelector((state) => state.toolkit);
  return (
    <ListGroup>
      {tasks?.toDoList?.map((task, index) => {
        return (
          <ToDoListItem
            className={task.isImportant ? "important" : ""}
            taskName={task.taskName}
            id={index}
            colorTask={task.colorTask}
            arr={task.subTasks}
          />
        );
      })}
    </ListGroup>
  );
};

export default ToDoList;
