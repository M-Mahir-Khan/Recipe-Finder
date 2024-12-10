const Header = () => {
    return (
      <header style={styles.header}>
        <h1 style={styles.title}>🍲 Recipe Finder 🍲</h1>
      </header>
    );
  };
  
  const styles = {
    header: {
      backgroundColor: "#FF6347",
      color: "#FFFFFF",
      padding: "20px",
      textAlign: "center",
    },
    title: {
      fontFamily: "Arial, sans-serif",
      fontSize: "2.5rem",
    },
  };
  
  export default Header;
  