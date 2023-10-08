import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("");
  function handleClick(tabName) {
    setActiveTab(tabName);
  }
  return (
    <div className="app">
      <Sidebar handleClick={handleClick} />
      <Main activeTab={activeTab} />
    </div>
  );
}

export default App;
