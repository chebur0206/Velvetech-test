import {
  ADD_BLOCK,
  SET_BACKGROUND_COLOR,
  SET_COLOR,
  SET_ID,
  SET_SIZE,
  SET_TEXT,
} from "../constants";

export const addBlock = (value) => {
  return {
    type: ADD_BLOCK,
    payload: value,
  };
};
export const setText = (text) => {
  return {
    type: SET_TEXT,
    payload: text,
  };
};
export const setId = (id) => {
  return {
    type: SET_ID,
    payload: id,
  };
};
export const setSize = (size) => {
  return {
    type: SET_SIZE,
    payload: size,
  };
};
export const setColor = (color) => {
  return {
    type: SET_COLOR,
    payload: color,
  };
};
export const setBackgroundColor = (backgroundColor) => {
  return {
    type: SET_BACKGROUND_COLOR,
    payload: backgroundColor,
  };
};
