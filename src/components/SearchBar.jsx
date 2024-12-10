const SearchBar = ({ query, setQuery, onSearch }) => {
    return (
      <div style={styles.container}>
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
        />
        <button onClick={onSearch} style={styles.button}>
          Search
        </button>
      </div>
    );
  };
  
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      margin: "20px 0",
    },
    input: {
      width: "300px",
      padding: "10px",
      fontSize: "1rem",
      border: "2px solid #FF6347",
      borderRadius: "5px",
    },
    button: {
      backgroundColor: "#FF6347",
      color: "#FFFFFF",
      border: "none",
      padding: "10px 20px",
      cursor: "pointer",
      borderRadius: "5px",
      fontSize: "1rem",
    },
  };
  
  export default SearchBar;
  