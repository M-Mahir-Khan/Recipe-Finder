const RecipeCard = ({ recipe }) => {
  return (
    <div style={styles.card}>
      <img src={recipe.image} alt={recipe.title} style={styles.image} />
      <h3 style={styles.title}>{recipe.title}</h3>
      <p style={styles.details}>Cooking Time: {recipe.readyInMinutes}20 mins</p>
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
    backgroundColor: "#F5F5F5",
    border: "2px solid #FF6347",
    borderRadius: "10px",
    width: "250px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
  },
  title: {
    fontSize: "1.2rem",
    margin: "10px 0",
    color: "#FF6347",
  },
  details: {
    fontSize: "0.9rem",
    color: "#FF6347",
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    textDecoration: "none",
    color: "#FFFFFF",
    backgroundColor: "#FF6347",
    padding: "10px",
    borderRadius: "5px",
  },
};

export default RecipeCard;
