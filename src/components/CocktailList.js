import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return <h2 className="section-title">No cocktails Match Your Search</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title-minor">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => {
          return <Cocktail key={cocktail.id} props={cocktail} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
