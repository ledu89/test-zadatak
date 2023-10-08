function Tab1Content({ inputValue, onInputChange }) {
  return (
    <div>
      <input type="text" value={inputValue} onChange={onInputChange} />
    </div>
  );
}

export default Tab1Content;
