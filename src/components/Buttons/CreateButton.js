import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "./styles";

const CreateButton = ({ onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.createButtonWrapper}>
      <Button onClick={onClick} variant="contained" color="primary">
        add block
      </Button>
    </div>
  );
};

export default CreateButton;
