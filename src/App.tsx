import { css } from "./styled-system/css";
export default function App() {
  return (
    <span
      className={css({
        color: "green.500",
        _hover: {
          color: "blue.400",
        },
      })}
    >
      Hello World from React
    </span>
  );
}
