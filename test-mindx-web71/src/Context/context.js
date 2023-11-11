import { createContext, useContext, useState } from "react";

export const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const GetTaskTitle = JSON.parse(localStorage.getItem("Title"));
  const [todoList, setTodoList] = useState(GetTaskTitle || []);
  const [unDoneTask, setUndoneTask] = useState(todoList);
  const [language, setLanguage] = useState("US");
  const [showUndoneTask, setShowUndoneTask] = useState(false);
  const onAddNewTask = (newTask) => {
    const newTaskList = [...todoList, newTask];
    const StrSaveNewTask = JSON.stringify(newTaskList);
    localStorage.setItem("Title", StrSaveNewTask);
    setTodoList(newTaskList);
  };
  const onShowUndoneTask = () => {
    if (showUndoneTask) {
      setTodoList(unDoneTask);
      setShowUndoneTask(!showUndoneTask);
    } else {
      const showOnlyUndoneTask = unDoneTask.filter(
        (task) => task.isDone === false
      );
      setShowUndoneTask(!showUndoneTask);
      setTodoList(showOnlyUndoneTask);
    }
  };
  const value = {
    todoList,
    setTodoList,
    onAddNewTask,
    unDoneTask,
    setUndoneTask,
    language,
    setLanguage,
    onShowUndoneTask,
    showUndoneTask,
  };

  return (
    <TodoContext.Provider value={value}> {children} </TodoContext.Provider>
  );
};
