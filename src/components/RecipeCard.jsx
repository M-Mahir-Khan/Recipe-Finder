const RecipeCard = ({ recipe }) => {
  return (
    <div style={styles.card}>
      <img src={recipe.image} alt={recipe.title} style={styles.image} />
      <h3 style={styles.title}>{recipe.title}</h3>
      <p style={styles.details}>Ready in {recipe.readyInMinutes} 20 mins</p>
      {/* <a
        href={`https://spoonacular.com/recipes/${recipe.id}`}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        View Recipe
      </a> */}
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #FF6347",
    borderRadius: "10px",
    width: "280px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "1.2rem",
    margin: "10px 0",
    color: "#FF6347",
    fontWeight: "bold",
  },
  details: {
    fontSize: "1rem",
    color: "#666",
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    textDecoration: "none",
    color: "#FFFFFF",
    backgroundColor: "#FF6347",
    padding: "10px 15px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  linkHover: {
    backgroundColor: "#e5533d",
  },
};

export default RecipeCard;
