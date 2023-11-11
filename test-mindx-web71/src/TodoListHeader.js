import { useTodo } from "./Context/context";

const Header = () => {
  const { unDoneTask, language, onShowUndoneTask, showUndoneTask } = useTodo();
  const taskLeft = unDoneTask.filter((task) => task.isDone === false).length;
  return (
    <div className="header">
      {language === "US"
        ? `You have ${taskLeft} tasks left!`
        : `Bạn có ${taskLeft} việc chưa hoàn thành ! `}
      <label htmlFor="checkUndoneTask" className="not-finish-task">
        <input
          id="checkUndoneTask"
          value={showUndoneTask}
          type="checkbox"
          onClick={(e) => onShowUndoneTask(e)}
        />
        Những việc chưa làm
      </label>
    </div>
  );
};

export default Header;
