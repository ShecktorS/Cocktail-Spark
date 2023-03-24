import styles from "./index.module.scss";

const CocktailItem = ({ cocktail, setCocktailDetailContext }) => {
  const onHandleClick = () => {
    setCocktailDetailContext((prev) => ({
      ...prev,
      payload: cocktail,
      cardIsclicked: true,
    })),
      console.log(cocktail.strDrink);
  };

  return (
    <div className={styles.CocktailItem} onClick={onHandleClick}>
      <div className={styles.card}>
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          className={styles.cardImage}
        />
        <h2 className={styles.cardName}>{cocktail.strDrink}</h2>
      </div>
    </div>
  );
};

export default CocktailItem;
