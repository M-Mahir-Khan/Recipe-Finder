import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <div style={styles.container}>
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))
      ) : (
        <p style={styles.noData}>No recipes found! Try searching something else. 🍴</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  noData: {
    color: "#FF6347",
    fontSize: "1.2rem",
    textAlign: "center",
  },
};

export default RecipeList;
