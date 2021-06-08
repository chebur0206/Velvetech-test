import {
  ADD_BLOCK,
  SET_BACKGROUND_COLOR,
  SET_COLOR,
  SET_ID,
  SET_SIZE,
  SET_TEXT,
} from "../constants";

const initialState = {
  blocksArr: [],
  blockId: "",
};

const StatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOCK: {
      return {
        ...state,
        blocksArr: action.payload,
      };
    }
    case SET_TEXT: {
      const { currentIndex: id, text } = action.payload;
      return {
        ...state,
        blocksArr: [
          ...state.blocksArr.map((item, index) => {
            if (index === id) return { ...item, text };
            return item;
          }),
        ],
      };
    }
    case SET_ID: {
      return {
        ...state,
        blockId: action.payload,
      };
    }
    case SET_SIZE: {
      const { currentIndex: id, fontSize } = action.payload;
      return {
        ...state,
        blocksArr: [
          ...state.blocksArr.map((item, index) => {
            if (index === id)
              return { ...item, styles: { ...item.styles, fontSize } };
            return item;
          }),
        ],
      };
    }
    case SET_COLOR: {
      const { currentIndex: id, color } = action.payload;
      return {
        ...state,
        blocksArr: [
          ...state.blocksArr.map((item, index) => {
            if (index === id)
              return { ...item, styles: { ...item.styles, color } };
            return item;
          }),
        ],
      };
    }
    case SET_BACKGROUND_COLOR: {
      const { currentIndex: id, backgroundColor } = action.payload;
      return {
        ...state,
        blocksArr: [
          ...state.blocksArr.map((item, index) => {
            if (index === id)
              return { ...item, styles: { ...item.styles, backgroundColor } };
            return item;
          }),
        ],
      };
    }
    default:
      return state;
  }
};

export default StatReducer;
