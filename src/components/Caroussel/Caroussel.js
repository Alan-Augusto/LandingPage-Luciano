import React, { useState } from "react";
import "./Carousel.css";

function Carousel({ items, itemsPerPage, showTitle, showDescription, showImage }) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalItems = items.length;

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(totalItems - itemsPerPage, prevPage + 1));
  };

  const startItem = currentPage;
  const endItem = startItem + itemsPerPage;
  const displayedItems = items.slice(startItem, endItem);

  const startItemMobile = currentPage * 2;
  const endItemMobile = startItemMobile + 2;
  const displayedItemsMobile = items.slice(startItemMobile, endItemMobile);

  return (
    <div className="Carousel">
      <button onClick={handlePrevPage}>Voltar</button>
      <div className="carousel-container">
        {displayedItems.map((item, i) => (
          <div className="card-item" id={"card-item" + i} key={i}>
            {showImage && (
              <div className="card-image">
                <img src={require(`../Sections/YourCases/assets/${item.image}`)} alt={item.title} />
              </div>
            )}
            <div className="card-text">
              {showTitle && <h3>{item.title}</h3>}
              {showDescription && <p>{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="mobile-carousel-container">
        {displayedItemsMobile.map((item, i) => (
          <div className="card-item" id={"card-item" + i} key={i}>
            {showImage && (
              <div className="card-image">
                <img src={require(`../Sections/YourCases/assets/${item.image}`)} alt={item.title} />
              </div>
            )}
            <div className="card-text">
              {showTitle && <h3>{item.title}</h3>}
              {showDescription && <p>{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleNextPage}>Passar</button>
    </div>
  );
}

export default Carousel;
