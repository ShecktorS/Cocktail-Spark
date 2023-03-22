import styles from "./index.module.scss";
import CocktailItem from "../cocktailItem";

const CocktailList = ({ cocktailList, setCocktailDetailContext }) => {
  return (
    <div className={styles.CocktailList}>
      {cocktailList.map((cocktail) => (
        <CocktailItem
          cocktail={cocktail}
          key={cocktail.idDrink}
          setCocktailDetailContext={setCocktailDetailContext}
        />
      ))}
    </div>
  );
};

export default CocktailList;
