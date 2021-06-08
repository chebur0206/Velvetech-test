import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: "15vw",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "15vw",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  textField: {
    margin: "1vh 1vw",
  },
  inputLabel: {
    margin: "1vh 1vw",
  },
}));

export default useStyles;
