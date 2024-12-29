const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>🍲 Recipe Finder 🍲</h1>
    </header>
  );
};

const styles = {
  header: {
    background: "linear-gradient(135deg, #FF6347, #FF4500)",
    color: "#FFFFFF",
    padding: "30px",
    textAlign: "center",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
  },
};

export default Header;
