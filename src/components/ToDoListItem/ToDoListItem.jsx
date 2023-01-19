import React, { useState } from "react";
import { removeToDos, progressUp } from "../../Redux/toolkitSlice";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import ProgressBarCastom from "../ProgressBar";
import ProgressBar from "react-bootstrap/ProgressBar";

import "./scss/to-do-list-item.scss";

const ToDoListItem = ({ className, taskName, id, colorTask, arr }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(
      removeToDos({
        id: id,
      })
    );
  };

  const tasks = useSelector((state) => state.toolkit);
  const now =
    tasks.toDoList[id].subTasks.length == 0
      ? 0
      : tasks.toDoList[id].subTasks.length / tasks.progress[id].length ===
        Infinity
      ? 0
      : 100 / (tasks.toDoList[id].subTasks.length / tasks.progress[id].length);
  return (
    <Accordion style={{ borderBottom: "1px solid black" }}>
      <Accordion.Header className={` todo-item`}>
        <div className={`${className} flex`}>
          <p style={{ color: `${colorTask}` }}>{taskName}</p>
          <Button
            id={id}
            variant="primary"
            className="remove-button"
            onClick={() => deleteItem()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
            </svg>
          </Button>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <ProgressBar now={now} label={`${now}%`} />
        {arr.map((item, index) => {
          return <ProgressBarCastom item={item} index={index} id={id} />;
        })}
      </Accordion.Body>
    </Accordion>
  );
};

export default ToDoListItem;
