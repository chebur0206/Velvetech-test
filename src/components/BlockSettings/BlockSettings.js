import React from "react";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { InputLabel, TextField } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import useStyles from "./styles";

const BlockSettings = ({
  handleTextChange,
  handleSizeChange,
  handleColorChange,
  handleBackgroundColorChange,
  currentIndex,
  formattedBlock,
}) => {
  const classes = useStyles();
  const isDisabled = currentIndex + 1 === 0;
  const { text = "", styles = {} } = formattedBlock;
  const { fontSize = 14, color = "black", backgroundColor = "white" } = styles;
  // const formattedFontSize = fontSize.slice(0, -2);
  // console.log(formattedFontSize);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <Divider />
        <InputLabel classes={{ root: classes.inputLabel }}>
          Block № {currentIndex + 1}
        </InputLabel>
        <TextField
          classes={{ root: classes.textField }}
          label="Text"
          variant="outlined"
          onChange={handleTextChange}
          value={text}
          InputLabelProps={{ shrink: true }}
          disabled={isDisabled}
          multiline={true}
        />
        <TextField
          classes={{ root: classes.textField }}
          label="Size"
          variant="outlined"
          onChange={handleSizeChange}
          value={fontSize}
          InputLabelProps={{ shrink: true }}
          disabled={isDisabled}
        />
        <TextField
          classes={{ root: classes.textField }}
          label="Color"
          variant="outlined"
          onChange={handleColorChange}
          value={color}
          InputLabelProps={{ shrink: true }}
          disabled={isDisabled}
        />
        <TextField
          classes={{ root: classes.textField }}
          label="BackgroundColor"
          variant="outlined"
          onChange={handleBackgroundColorChange}
          value={backgroundColor}
          InputLabelProps={{ shrink: true }}
          disabled={isDisabled}
        />
      </Drawer>
    </div>
  );
};

export default BlockSettings;
