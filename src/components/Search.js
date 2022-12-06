const Search = (props) => {
  return (
    <div>
      <input type="text" onChange={props.handleSearch} />
    </div>
  );
};
export default Search;
