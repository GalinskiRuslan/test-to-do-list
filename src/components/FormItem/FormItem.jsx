import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addedToDos,
  progressStart,
  progressUp,
} from "../../Redux/toolkitSlice";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormItem = ({ onClose }) => {
  const [formName, setFormName] = useState("");
  const [colorTask, setColorTask] = useState("red");
  const [importantTask, setimportantTask] = useState(false);
  const [subTasks, setSubTasks] = useState([]);

  const submitTask = () => {
    if (formName !== "") {
      dispatch(
        addedToDos({
          id: count?.toDoList.length + 1,
          taskName: formName,
          colorTask: colorTask,
          isImportant: importantTask,
          subTasks: subTasks,
        })
      );
      dispatch(progressStart([]));
      setFormName("");
      setimportantTask(false);
      setColorTask("red");
      setSubTasks([]);
    }
  };

  const count = useSelector((state) => state.toolkit);
  const dispatch = useDispatch();
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="textInput">Введите название задачи</Form.Label>
        <Form.Control
          id="textInput"
          placeholder="Название задачи"
          onChange={(e) => {
            setFormName(e.target.value);
          }}
          value={formName}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledSelect">Выбирите цвет задачи</Form.Label>
        <Form.Select
          id="disabledSelect"
          onChange={(e) => {
            setColorTask(e.target.value);
          }}
        >
          <option value="red">Красный</option>
          <option value="black">Чёрный</option>
          <option value="blue">Синий</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          id="disabledFieldsetCheck"
          label="Важная задача"
          value={importantTask}
          onChange={() => {
            setimportantTask(!importantTask);
          }}
        />
        <Button onClick={() => setSubTasks([...subTasks, []])}>
          Добавить подзадачу
        </Button>
        {subTasks.map((task, index) => {
          return (
            <div key={index}>
              <Form.Label htmlFor="textInput">
                Введите название задачи
              </Form.Label>
              <Form.Control
                id={`subTasks-${index}`}
                placeholder="Название подзадачи"
                onChange={(e) => {
                  subTasks[index] = e.target.value;
                }}
              />
            </div>
          );
        })}
        {subTasks.length > 0 ? (
          <Button onClick={() => setSubTasks([])}> Очистить</Button>
        ) : (
          ""
        )}
      </Form.Group>
      <div onClick={onClose()}>
        <Button
          variant="primary"
          onClick={() => {
            submitTask();
          }}
        >
          Сохранить
        </Button>
      </div>
    </Form>
  );
};

export default FormItem;
