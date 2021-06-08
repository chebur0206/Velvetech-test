import {
  addBlock,
  setId,
  setText,
  setSize,
  setColor,
  setBackgroundColor,
} from "../redux/actions";
import { connect } from "react-redux";

export const provideReduxData = (Component) => {
  const mapStateToProps = (store) => {
    return {
      blocksArr: store.blocksArr,
      blockId: store.blockId,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      addBlock: (value) => dispatch(addBlock(value)),
      setId: (id) => dispatch(setId(id)),
      setText: (text) => dispatch(setText(text)),
      setSize: (size) => dispatch(setSize(size)),
      setColor: (color) => dispatch(setColor(color)),
      setBackgroundColor: (backgroundColor) =>
        dispatch(setBackgroundColor(backgroundColor)),
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(Component);
};
