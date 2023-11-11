import { createContext, useContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  // useEffect(() => {
  //   const taskLeft = todoList.sort((task) => (task.isDone = false));
  //   console.log(taskLeft);
  //   setUndoneTask(taskLeft);
  // }, []);
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
  const onShowUndoneTask = (e) => {
    console.log(e.target.value);
    setShowUndoneTask(!e.target.value);
    console.log("task", showUndoneTask);
    if (showUndoneTask) {
      const showOnlyUndoneTask = unDoneTask.filter(
        (task) => task.isDone === false
      );
      console.log(showOnlyUndoneTask);
      setTodoList(showOnlyUndoneTask);
    } else {
      setTodoList(todoList);
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
