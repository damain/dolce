import React from "react";

export default props => {
  // let [lists] = props
  return (
    <React.Fragment>
      {Object.keys(props.lists).map((list, index) => {
        return (
          <li key={list+index}
            onClick={() => {
              props.listSelected(list)
            }}
            className= {props.listName === list?"active" :""}
          >
           Dolce {index + 1}
          </li>
        );
      })}
    </React.Fragment>
  );
};
