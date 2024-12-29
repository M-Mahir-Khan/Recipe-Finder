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
    width: "350px",
    padding: "12px",
    fontSize: "1rem",
    border: "2px solid #FF6347",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  button: {
    background: "linear-gradient(135deg, #FF6347, #FF4500)",
    color: "#FFFFFF",
    border: "none",
    padding: "12px 24px",
    cursor: "pointer",
    borderRadius: "10px",
    fontSize: "1rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
  },
};

export default SearchBar;
