import { INPUT_NUMBER, PLUS, MINUS, MULTIPLY, DIVIDE, EQUAL, CLEAR } from "../actions/types";

const initialAppState = {
  inputValue: 0,
  operator: "",
  resultValue: 0,
  calculate: false,
  showingResult: false,
};

const calculator = (state = initialAppState, action) => {
  switch (action.type) {
    case INPUT_NUMBER:
      return {
        ...state,
        inputValue: state.inputValue * 10 + action.number,
        showingResult: false,
      };

    case PLUS:
      if (state.calculate === true) {
        // 1回でも演算子がクリックされている場合の処理
        return {
          ...state,
          inputValue: 0,
          operator: "+",
          resultValue: state.resultValue + state.inputValue, // 前回の入力値に今回の入力値をプラスする
          showingResult: true,
        };
      } else {
        // 1回も演算子がクリックされていない場合の処理
        return {
          ...state,
          inputValue: 0,
          operator: "+",
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case MINUS:
      if (state.calculate === true) {
        // 1回でも演算子がクリックされている場合の処理
        return {
          ...state,
          inputValue: 0,
          operator: "-",
          resultValue: state.resultValue - state.inputValue, // 前回の入力値に今回の入力値をプラスする
          showingResult: true,
        };
      } else {
        // 1回も演算子がクリックされていない場合の処理
        return {
          ...state,
          inputValue: 0,
          operator: "-",
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case MULTIPLY:
      if (state.calculate === true) {
        // 1回でも演算子がクリックされている場合の処理
        return {
          ...state,
          inputValue: 0,
          operator: "*",
          resultValue: state.resultValue * state.inputValue, // 前回の入力値に今回の入力値をプラスする
          showingResult: true,
        };
      } else {
        // 1回も演算子がクリックされていない場合の処理
        return {
          ...state,
          inputValue: 0,
          operator: "*",
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case DIVIDE:
      if (state.calculate === true) {
        // 1回でも演算子がクリックされている場合の処理
        return {
          ...state,
          inputValue: 0,
          operator: "/",
          resultValue: state.resultValue / state.inputValue, // 前回の入力値に今回の入力値をプラスする
          showingResult: true,
        };
      } else {
        // 1回も演算子がクリックされていない場合の処理
        return {
          ...state,
          inputValue: 0,
          operator: "/",
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case CLEAR:
      // initialStateAppに戻す処理
      return {
        inputValue: 0,
        operator: "",
        resultValue: 0,
        calculator: false,
        showingResult: false,
      };

    case EQUAL:
      switch (state.operator) {
        case "+":
          return {
            inputValue: state.resultValue + state.inputValue,
            operator: "",
            calculator: false,
            resultValue: state.resultValue + state.inputValue,
            showingResult: true,
          };
        case "-":
          return {
            inputValue: state.resultValue - state.inputValue,
            operator: "",
            calculator: false,
            resultValue: state.resultValue - state.inputValue,
            showingResult: true,
          };
        case "*":
          return {
            inputValue: state.resultValue * state.inputValue,
            operator: "",
            calculator: false,
            resultValue: state.resultValue * state.inputValue,
            showingResult: true,
          };
        case "/":
          return {
            inputValue: state.resultValue / state.inputValue,
            operator: "",
            calculator: false,
            resultValue: state.resultValue / state.inputValue,
            showingResult: true,
          };
        default:
          return state;
      }
    default:
      return state;
  }
};
