import React, { useRef, useState } from "react";
import { allCocktails } from "../constants";

function Menu() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCocktails = allCocktails.length;
  const contentRef = useRef();

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;

    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOfSet) => {
    return allCocktails[
      (currentIndex + indexOfSet + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  return (
    <div aria-labelledby="menu-heading" id="menu">
      <img
        src="/images/slider-left-leaf.png"
        alt="Left leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right leaf"
        id="m-right-leaf"
      />

      <h2 className="sr-only" id="menu-heading">
        Cocktail menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              aria-hidden="true"
              alt="right-arrow"
            />
          </button>
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              aria-hidden="true"
              alt="right-arrow"
            />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={`${currentCocktail.image}`}
            alt="cocktail image"
            className="object-contain"
          />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe For:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
