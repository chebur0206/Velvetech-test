import React from "react";
import { Button, Card, CardActions, CardContent } from "@material-ui/core";
import useStyles from "./styles";

const Block = ({ text, id, state, style }) => {
  const classes = useStyles();

  const handleDelClick = () => {
    state.addBlock(state.blocksArr.filter((i) => i.id !== id));
  };

  const handleChangeClick = () => {
    state.setId(id);
  };

  return (
    <Card style={style} className={classes.blockWrapper}>
      <CardContent>{text}</CardContent>
      <CardActions classes={{ root: classes.cardButtons }}>
        <Button
          onClick={handleChangeClick}
          variant="outlined"
          color="primary"
          size="small"
        >
          change
        </Button>
        <Button
          onClick={handleDelClick}
          variant="outlined"
          color="secondary"
          size="small"
        >
          del
        </Button>
      </CardActions>
    </Card>
  );
};

export default Block;
