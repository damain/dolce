import React, { useReducer, useEffect } from "react";
import Words from "./Words";

const reducer = (state, action) => {
  switch (action.type) {
    case "setWords":
      return { ...state, words: action.payload };
    case "next":
      return state.index < state.words.length - 1
        ? { ...state, index: state.index + 1 }
        : state;
    case "previous":
      return state.index > 0 ? { ...state, index: state.index - 1 } : state;

    default:
      return state;
  }
};
export default ({ words }) => {
  let [state, dispatch] = useReducer(reducer, { index: 0, words: [] });

  useEffect(() => {
    dispatch({ type: "setWords", payload: words });
  }, [words]);

  const handleNext = () => {
    dispatch({ type: "next" });
  };

  const handlePrevious = () => {
    dispatch({ type: "previous" });
  };
  return (
    <div className="row">
      <div className="col s2">
        <div onClick={handlePrevious} className={state.index === 0 ? "disabled arrow": "arrow" }>
          <i className="medium material-icons">arrow_back</i>
        </div>
      </div>
      <div className="col s8">
        <div>
          <Words word={state.words ? state.words[state.index] : []}></Words>
        </div>
      </div>
      <div className="col s2">
        <div onClick={handleNext} className={state.words && state.index === state.words.length -1 ? "disabled arrow": "arrow" }>
          <i className="medium material-icons">arrow_forward</i>
        </div>
      </div>
    </div>
  );
};
