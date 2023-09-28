import { useContext } from "react";
import { CalcContext } from "../context/calcContext";

export default function Button({ value }) {
  function getStyleName(btn) {
    const className = {
      "=": "operator",
      "+": "operator",
      "-": "operator",
      "x": "operator",
      "/": "operator",
      0: "zero",
    };
    return className[btn];
  }
  const { calc, setCalc } = useContext(CalcContext);

  const dotClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };
  const resetClick = () => {
    setCalc({ sign: "", num: 0, res: 0 });
  };
  const handleClickButton = () => {
    const numstr = value.toString();
    let numberValue;
    if (numstr === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numstr);
    }
    setCalc({
      ...calc,
      num: numberValue,
    });
  };
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          "x": (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return result[sign](a, b);
      };
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0,
      });
    }else{
        setCalc({
            num:0,
            res:calc.num,
            sign:""
        })
    }
  };
  const percentClick = () => {
    setCalc({
      num: calc.num / 100,
      res: calc.res / 100,
      sign: "",
    });
  };
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
    });
  };
  function handleBtnClick() {
    const result = {
      ".": dotClick,
      "AC": resetClick,
      "/": signClick,
      "x": signClick,
      "-": signClick,
      "+": signClick,
      "=": equalsClick,
      "%": percentClick,
      "+/-": invertClick,
    };
    if (result[value]) {
      return result[value]();
    } else {
      return handleClickButton();
    }
  }
  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(
        value
      )} bg-gray-200 p-7 border text-xl font-semibold border-gray-400 hover:bg-amber-200`}
    >
      {value}
    </button>
  );
}
