import React from "react";
import BlockSettings from "./BlockSettings";

const BlockSettingsContainer = ({ state }) => {
  const { blockId, blocksArr, setText, setSize, setColor, setBackgroundColor } =
    state;
  const formattedBlock = blocksArr.filter((item) => item.id === blockId);
  const currentIndex = blocksArr.findIndex((item) => item.id === blockId);

  const handleTextChange = (e) => {
    setText({ text: e.target.value, currentIndex });
  };

  const handleSizeChange = (e) => {
    setSize({ fontSize: Number(e.target.value), currentIndex });
  };

  const handleColorChange = (e) => {
    setColor({ color: e.target.value, currentIndex });
  };

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor({ backgroundColor: e.target.value, currentIndex });
  };

  return (
    <BlockSettings
      currentIndex={currentIndex}
      handleTextChange={handleTextChange}
      handleSizeChange={handleSizeChange}
      handleColorChange={handleColorChange}
      handleBackgroundColorChange={handleBackgroundColorChange}
      formattedBlock={formattedBlock[0] || {}}
    />
  );
};

export default BlockSettingsContainer;
