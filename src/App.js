import React, { useState } from "react";

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

const App = () => {

  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const numClickHandler = (event) => {
    event.preventDefault();
    const value = event.target.innerHTML;

    if(calc.num.length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : calc.num % 1 === 0
            ? Number(calc.num + value)
            : calc.num + value,
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const commaClickHandler = (event) => {
    event.preventDefault();
    const value = event.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
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
                className={button === "=" ? "equals" : ""}
                value={button}
                onClick={
                  button === "c"
                  /*
                    ? resetClickHandler
                    : button === "+-"
                    ? invertClickHandler
                    : button === "%"
                    ? percentClickHandler
                    : button === "="
                    ? equalsClickHandler
                    : button === "/" || button === "X" || button === "-" || button === "+"
                    ? signClickHandler
                    : button === "."
                  */
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