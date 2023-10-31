import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md"

function Carousel({ items, itemsPerPage, showTitle, showDescription, showImage }) {
  const [transitionType, setTransitionType] = useState("");
  const totalItems = items.length;
  
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isNewCard, setIsNewCard] = useState(itemsPerPage-1);
  const [counter, setCounter] = useState(0);
  
  const [currentPageMobile, setCurrentPageMobile] = useState(0);
  const [isTransitioningMobile, setIsTransitioningMobile] = useState(false);
  const [isNewCardMobile, setIsNewCardMobile] = useState(1);
  const [counterMobile, setCounterMobile] = useState(0);

  const handleNextPage = () => {
    setTransitionType("right");
    if((counter+1)<=totalItems-itemsPerPage){
      setCounter(counter+1);
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
        setIsNewCard(itemsPerPage-1);
      }, 500); // 500ms é a duração da transição
      setCurrentPage((prevPage) => Math.min(totalItems - itemsPerPage, prevPage + 1));
    }

    if((counterMobile+1)<=(totalItems-2)){
      setCounterMobile(counterMobile+1);
      setIsTransitioningMobile(true);
      setTimeout(() => {
        setIsTransitioningMobile(false);
        setIsNewCardMobile(1);
      }, 500); // 500ms é a duração da transição
      setCurrentPageMobile((prevPage) => Math.min(totalItems - 2, prevPage + 1));

    }
    
  };
  
  const handlePrevPage = () => {
    setTransitionType("left");
    if((counter-1) >= 0){
      setCounter(counter-1);
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
        setIsNewCard(0);
      }, 500);
      setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
    }
    if((counterMobile-1)>=0){
      setCounterMobile(counterMobile-1);
      setIsTransitioningMobile(true);
      setTimeout(() => {
        setIsTransitioningMobile(false);
        setIsNewCardMobile(0);
      }, 500); // 500ms é a duração da transição
      setCurrentPageMobile((prevPage) => Math.max(0, prevPage - 1));

    }
  
  };
  
  const startItem = currentPage;
  const endItem = startItem + itemsPerPage;
  const displayedItems = items.slice(startItem, endItem);

  const startItemMobile = currentPageMobile;
  const endItemMobile = startItemMobile + 2;
  const displayedItemsMobile = items.slice(startItemMobile, endItemMobile);

  useEffect(() => {
    // Remove a classe "new-card-item" após 0.3s
    const timer = setTimeout(() => {
      setIsNewCard(null);
      setIsNewCardMobile(null);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [isNewCard]);

  return (
    <div className="Carousel">
      <MdKeyboardArrowLeft 
        onClick={handlePrevPage} 
        className="button-page"
      />
      <div className="carousel-container">
        {displayedItems.map((item, i) => (
          <div className={`${isTransitioning ? "card-transition-"+transitionType : `${i === isNewCard ? "new-card-item" : "card-item"}`}`} id={"card-item" + i} key={i}>
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
         <div className={`${isTransitioningMobile ? "card-transition-"+transitionType : `${i === isNewCardMobile ? "new-card-item" : "card-item"}`}`} id={"card-item" + i} key={i}>
            {showImage && (
              <div className="card-image">
                <img src={require(`../Sections/YourCases/assets/${item.image}`)} alt={item.title} />
              </div>
            )}
            <div className="card-text">
              <h3>{i}</h3>
              {showTitle && <h3>{item.title}</h3>}
              {showDescription && <p>{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
      <MdKeyboardArrowRight 
        onClick={handleNextPage} 
        className="button-page"
      />
    </div>
  );
}

export default Carousel;
