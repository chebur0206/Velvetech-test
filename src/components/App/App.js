import React from "react";
import { provideReduxData } from "../../hocs/provideReduxData";
import BlockSettings from "../BlockSettings";
import Blocks from "../Blocks";
import "./styles.scss";
import FormDialog from "../Modal";

const App = (props) => (
  <>
    <FormDialog state={props} />
    <div className="blocks-wrapper">
      <Blocks state={props} />
      <BlockSettings state={props} />
    </div>
  </>
);

export default provideReduxData(App);
