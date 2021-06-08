import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CreateButton from "../Buttons";
import useStyles from "./styles";

const FormDialog = ({ state }) => {
  const classes = useStyles();
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    return setContent({
      id: Math.random(),
      text: e.target.value,
      styles: { fontSize: 14, color: "black", backgroundColor: "white" },
    });
  };

  const handleAddBlock = () => {
    state.addBlock([...state.blocksArr, content]);
    setOpen(false);
  };

  return (
    <div>
      <CreateButton onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        classes={{ root: classes.dialogWrapper }}
      >
        <DialogTitle id="form-dialog-title">New Block</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter your text"
            type="text"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddBlock} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
