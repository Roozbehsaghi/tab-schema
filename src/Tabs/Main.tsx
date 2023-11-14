import { useState } from "react";
import Tab from "./Tab";
import { TabSchema } from "./TabSchema";

const Main = () => {
  const [toggleState, setToggleState] = useState(0);

  return (
    <div>
      <Tab
        table={TabSchema}
        toggleState={toggleState}
        setToggleState={setToggleState}
      />
    </div>
  );
};

export default Main;
