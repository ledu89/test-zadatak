import { useState } from "react";
import Tab1Content from "./Tab1Content";
import Tab2Content from "./Tab2Content";
import Tab3Content from "./Tab3Content";

function Main({ activeTab }) {
  const [tab1Input, setTab1Input] = useState("");
  const [tab2Input, setTab2Input] = useState("");
  const [tab3Input, setTab3Input] = useState("");

  const handleTab1InputChange = (e) => {
    setTab1Input(e.target.value);
  };

  const handleTab2InputChange = (e) => {
    setTab2Input(e.target.value);
  };

  const handleTab3InputChange = (e) => {
    setTab3Input(e.target.value);
  };
  return (
    <div className="main">
      Main
      {activeTab === "Tab 1" && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>input 1: </p>
          <Tab1Content
            inputValue={tab1Input}
            onInputChange={handleTab1InputChange}
          />
        </div>
      )}
      {activeTab === "Tab 2" && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>input 2:</p>
          <Tab2Content
            inputValue={tab2Input}
            onInputChange={handleTab2InputChange}
          />
        </div>
      )}
      {activeTab === "Tab 3" && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>input 3:</p>
          <Tab3Content
            inputValue={tab3Input}
            onInputChange={handleTab3InputChange}
          />
        </div>
      )}
    </div>
  );
}

export default Main;
