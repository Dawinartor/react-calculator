import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const buttonValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "#"],
  [0, ".", "="]
]

const App =() => {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        <Button className="" value="0" onClick={() => {console.log("Button Clicked!");}}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;