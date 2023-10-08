import "./sidebar.css";
function Sidebar({ handleClick }) {
  return (
    <div className="sidebar">
      <h3>My app</h3>
      <ul className="options">
        <li>
          <button onClick={() => handleClick("Tab 1")} className="tab">
            Tab 1
          </button>
        </li>
        <li>
          <button onClick={() => handleClick("Tab 2")} className="tab">
            Tab 2
          </button>
        </li>
        <li>
          <button onClick={() => handleClick("Tab 3")} className="tab">
            Tab 3
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
