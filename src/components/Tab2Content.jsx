function Tab2Content({ inputValue, onInputChange }) {
  return (
    <div>
      <input type="text" value={inputValue} onChange={onInputChange} />
    </div>
  );
}

export default Tab2Content;
