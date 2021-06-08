import React from "react";
import Block from "./Block";
import useStyles from "./styles";

const Blocks = ({ state }) => {
  const classes = useStyles();

  return (
    <div className={classes.blocksWrapper}>
      {state.blocksArr.map((item) => {
        console.log(item.styles);
        return (
          <Block
            key={item.id}
            style={item.styles}
            state={state}
            text={item.text}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default Blocks;
