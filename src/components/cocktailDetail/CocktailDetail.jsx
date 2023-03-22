import styles from "./index.module.scss";

const CocktailDetail = ({
  setCocktailDetailContext,
  cocktailDetailContext,
}) => {
  const onHandleClick = () => {
    setCocktailDetailContext((prev) => ({ ...prev, cardIsclicked: false }));
  };

  const { payload } = cocktailDetailContext;

  return (
    <div className={styles.CocktailDetail}>
      <div className={styles.text}>
        <h1 className={styles.title}>{payload.strDrink}</h1>
        <h2 className={styles.tags}>{payload.strTags}</h2>
        <p className={styles.textInstructions}>
          {payload.strInstructions.slice(0, 700)}
        </p>
      </div>
      <img
        src="https://www.thecocktaildb.com/images/media/drink/b4cadp1619695347.jpg"
        alt={payload.strDrink}
        className={styles.image}
      />
      <button className={styles.button} onClick={onHandleClick}>
        X
      </button>
    </div>
  );
};

export default CocktailDetail;
