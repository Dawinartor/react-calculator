import React, { useState } from "react";
// asus | eee
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";


const buttonValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "#"],
  [0, ".", "="],
]

const toLocaleString = (num) => String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "")

const App = () => {

  // const [state, setState] = useState(initialState);
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  console.log(calc);

  const signClickHandler = (event) => {
    event.preventDefault();
  }

  const equalsClickHandler = (event) => {
    event.preventDefault();
  }

  const percentClickHandler = (event) => {
    event.preventDefault();
  }

  const invertClickHandler = (event) => {
    event.preventDefault();
  }

  const resetClickHandler = (event) => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const commaClickHandler = (event) => {
    event.preventDefault();
    const value = event.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const numClickHandler = (event) => { // is fired with each click on numbered button
    event.preventDefault();
    const value = event.target.innerHTML;
    console.log();

    if(removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0" // avoids to add additional 0 
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  return (
    <Wrapper>
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
        {
          buttonValues.flat().map((button, i) => {
            return (
              <Button 
                key={i}
                className={button === "=" ? "equals" : ""} // classname of button is either equals or empty
                value={button}
                onClick={
                  button === "C"
                    ? resetClickHandler // if button is === C than reset the calculator
                    : button === "+-"
                    ? invertClickHandler
                    : button === "%"
                    ? percentClickHandler
                    : button === "="
                    ? equalsClickHandler
                    : button === "/" || button === "X" || button === "-" || button === "+"
                    ? signClickHandler
                    : button === "."
                    ? commaClickHandler // triggered if comma is pressed
                    : numClickHandler // triggered if buttons between 0-9 are pressed
                } 
              />
            );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;