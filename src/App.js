import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useState } from "react";
import AntdApp from "./components/antdApp";

function App() {
  const [activeTab, setActiveTab] = useState("");
  function handleClick(tabName) {
    setActiveTab(tabName);
  }
  return (
    <div className="app">
      <AntdApp />
    </div>
  );
}

export default App;
