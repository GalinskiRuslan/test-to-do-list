import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import {
  removeToDos,
  progressUp,
  progressDown,
} from "../../Redux/toolkitSlice";
import { useSelector, useDispatch } from "react-redux";

const ProgressBarCastom = ({ item, index, id }) => {
  const [isCheck, setIsCheck] = useState(false);

  const dispatch = useDispatch();

  const progressPlus = () => {
    dispatch(progressUp({ index: id, progress: "+" }));
  };
  const progressMinus = () => {
    dispatch(progressDown({ index: id }));
  };

  const progressChange = () => {
    setIsCheck(!isCheck);
    if (!isCheck) {
      progressPlus();
      console.log("+");
    } else {
      progressMinus();
      console.log("-");
    }
  };
  return (
    <React.Fragment>
      <Form id={id}>
        <Form.Check
          label={item}
          type="checkbox"
          id={index}
          onChange={() => progressChange()}
        />
      </Form>
    </React.Fragment>
  );
};
export default ProgressBarCastom;
