import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addedToDos } from "../../../Redux/toolkitSlice";
import "./scss/task-page.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormItem from "../../FormItem/FormItem";
import ToDoList from "../../ToDoList";

const TaskPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button variant="primary" size="lg" onClick={handleShow}>
        Добавить Задачу
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавьте задачу</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormItem onClose={()=>handleClose}/>
        </Modal.Body>
        <Modal.Footer>
 
        </Modal.Footer>
      </Modal>
      <ToDoList/>
    </React.Fragment>
  );
};
export default TaskPage;
