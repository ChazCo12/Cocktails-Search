import React from "react";
import { useGlobalContext } from "../context";
import { FaCocktail } from "react-icons/fa";

const SearchForm = () => {
  const { setSearchTerms } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerms(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <h1 className="section-title-main">
        CocktailsDB{" "}
        <span>
          <FaCocktail className="logo-main" />
        </span>
      </h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
