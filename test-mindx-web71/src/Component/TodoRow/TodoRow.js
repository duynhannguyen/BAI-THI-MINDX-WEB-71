import React, { useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { useTodo } from "../../Context/context";

const TodoRow = (props) => {
  const { todoList, setUndoneTask } = useTodo();
  const { title, isDone, id } = props;
  const [checkBox, setCheckBox] = useState(isDone);
  const onCheck = (id) => {
    setCheckBox(!checkBox);
    const getSingleTask = todoList.findIndex((task) => task.id === id);
    todoList[getSingleTask] = {
      ...todoList[getSingleTask],
      isDone: (todoList[getSingleTask].isDone =
        !todoList[getSingleTask].isDone),
    };
    setUndoneTask([...todoList]);
  };
  return (
    <>
      <div className="todo-item-container" key={id}>
        {checkBox ? (
          <div className="todo-item-container done">
            <FaRegCheckCircle
              onClick={() => onCheck(id)}
              className="item-done-button"
              color="#9a9a9a"
            />
            <div className="item-title" id={id}>
              {title}
            </div>
          </div>
        ) : (
          <>
            <FaRegCircle
              onClick={() => onCheck(id)}
              className="item-done-button"
              color="#9a9a9a"
            />
            <div className="item-title" id={id}>
              {title}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TodoRow;
