import React, { useReducer, useEffect, useRef } from "react";
import "./App.css";
import ListSelector from "./components/ListSelector";
import WordList from "./components/WordList";
// var List = {"list": {
//   "dolce1":[ "it", "she", "he", "we", "said", "the"],
//   "dolce2":[ "little", "she", "was", "had", "they", "there"]
// }}
import List from "./trickyWords";
import M from "materialize-css";
let colors={dolce1:"red", dolce2:"blue", dolce3:"green" , dolce4: "purple", dolce5:"orange"}
function reducer(state, action) {
  switch (action.type) {
    case "setCurrentList":
      return {
        ...state,
        currentList: action.payload.sort(() => Math.random() - 0.5),
        listName: action.listName
      };

    default:
      return state;
  }
}
function App() {
  let sideNavRef = useRef(null);
  let [state, dispatch] = useReducer(reducer, { lists: List.list });
  useEffect(() => {
    dispatch({
      type: "setCurrentList",
      payload: state.lists[0],
      listName: "dolce1"
    });
  }, []);

  const handleListSelected = list => {
    dispatch({
      type: "setCurrentList",
      payload: state.lists[list],
      listName: list
    });
    let instance = M.Sidenav.getInstance(sideNavRef.current)
    instance.close()
  };

  const addSpace = word =>{
    
    return word != undefined ? "Dolce "+word.substring(5) : ""
  }

  useEffect(() => {
    M.Sidenav.init(sideNavRef.current);
  }, []);

  return (
    <div className={"App " + colors[state.listName] }>
      <div className="row ">
        <div className="col left-align">
          <button
            data-target="slide-out"
            className="sidenav-trigger btn transparent btn-flat white-text"
          >
            <i className="material-icons medium">menu</i>
          </button>
        </div>
        <div className="col">
          <button data-target="slide-out" className=" sidenav-trigger btn transparent btn-flat white-text" >
            {addSpace(state.listName)}
          </button>
        </div>
      </div>
      <ul ref={sideNavRef} id="slide-out" className="sidenav">
        <ListSelector
          lists={state.lists}
          listSelected={handleListSelected}
          listName={state.listName}
        />
      </ul>

      <header className="App-header">
        <WordList words={state.currentList} />
      </header>
    </div>
  );
}

export default App;
