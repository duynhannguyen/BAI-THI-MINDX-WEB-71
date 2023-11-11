import { useTodo } from "./Context/context";

const Footer = () => {
  const { language, setLanguage } = useTodo();
  return (
    <div>
      <h3>Made by MindX 🔥</h3>
      <div>
        <span>Available on:</span>
        <span
          onClick={() => setLanguage("VN")}
          className={
            language === "VN" ? "languague-picker selected" : "languague-picker"
          }
        >
          🇻🇳
        </span>
        <span
          onClick={() => setLanguage("US")}
          className={
            language === "US" ? "languague-picker selected" : "languague-picker"
          }
        >
          🇺🇸
        </span>
      </div>
    </div>
  );
};

export default Footer;
