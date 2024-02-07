import React, { useState, useEffect } from "react";
import "./CarousselAssessments.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import CarousselAssessmentsItemIndicator from "./CarousselAssessmentsItemIndicator/CarousselAssessmentslItemIndicator";
import { FaStar } from "react-icons/fa";
import { LuStar } from "react-icons/lu";

function CarousselAssessments({
  items,
  itemsPerPage,
  showTitle,
  showDescription,
  showImage,
  colorIndicator,
  imagePath
}) {
  const [transitionType, setTransitionType] = useState("");
  const totalItems = items.length;

  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isNewCard, setIsNewCard] = useState(itemsPerPage - 1);
  const [counter, setCounter] = useState(0);

  const [currentPageMobile, setCurrentPageMobile] = useState(0);
  const [isTransitioningMobile, setIsTransitioningMobile] = useState(false);
  const [isNewCardMobile, setIsNewCardMobile] = useState(1);
  const [counterMobile, setCounterMobile] = useState(0);

  const handleNextPage = () => {
    setTransitionType("right");

    if (counter + 1 <= totalItems - itemsPerPage) {
      setIsTransitioning(true);
      setCounter(counter + 1);
      setTimeout(() => {
        setIsTransitioning(false);
        setIsNewCard(itemsPerPage - 1);
        setCurrentPage((prevPage) =>
          Math.min(totalItems - itemsPerPage, prevPage + 1)
        );
      }, 500);
    }

    if (counterMobile + 1 <= totalItems - 2) {
      setIsTransitioningMobile(true);
      setCounterMobile(counterMobile + 1);
      setTimeout(() => {
        setIsTransitioningMobile(false);
        setIsNewCardMobile(1);
        setCurrentPageMobile((prevPage) =>
          Math.min(totalItems - 2, prevPage + 1)
        );
      }, 500);
    }
  };

  const handlePrevPage = () => {
    setTransitionType("left");

    if (counter - 1 >= 0) {
      setIsTransitioning(true);
      setCounter(counter - 1);
      setTimeout(() => {
        setIsTransitioning(false);
        setIsNewCard(0);
        setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
      }, 500);
    } else {
      setIsNewCard(null);
    }

    if (counterMobile - 1 >= 0) {
      setIsTransitioningMobile(true);
      setCounterMobile(counterMobile - 1);
      setTimeout(() => {
        setIsTransitioningMobile(false);
        setIsNewCardMobile(0);
        setCurrentPageMobile((prevPage) => Math.max(0, prevPage - 1));
      }, 500);
    } else {
      setIsNewCardMobile(null);
    }
  };

  const startItem = currentPage;
  const endItem = startItem + itemsPerPage;
  const displayedItems = items.slice(startItem, endItem);

  const startItemMobile = currentPageMobile;
  const endItemMobile = startItemMobile + 2;
  const displayedItemsMobile = items.slice(startItemMobile, endItemMobile);

  useEffect(() => {
    // Remove a classe "new-card-item-assessments" após 0.3s
    const timer = setTimeout(() => {
      setIsNewCard(null);
      setIsNewCardMobile(null);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [isNewCard]);

  return (
    <div className="CarousselAssessments">
      <MdKeyboardArrowLeft onClick={handlePrevPage} className="button-page" />
      <div className="CarousselAssessments-general">

        <div className="CarousselAssessments-container">
          {displayedItems.map((item, i) => (
            <div
              className={`${
                isTransitioning
                  ? "card-transition-" + transitionType
                  : `${i === isNewCard ? "new-card-item-assessments" : "card-item-assessments"}`
              }`}
              id={"card-item-assessments" + i}
              key={i}
            >
              {showImage && (
                <div className="card-person">
                  <img
                    src={require(`../../../public/images/${imagePath}/${item.image}`)}
                    alt={item.title}
                  />
                  <div className="card-person-title">
                    <h3>{item.title}</h3>
                    <div className="card-person-rating">
                      {Array(item.rating).fill().map((_, i) => (
                        <div className="card-person-rating-star">
                          <FaStar key={i} color="yellow" style={{height:'15px', width: 'auto', boxShadow:''}} />
                          <LuStar key={i} color="gray" style={{height:'15px', width: 'auto', boxShadow:''}} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div className="card-text">
                {showDescription && <p>{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="CarousselAssessments-indicator">
          <CarousselAssessmentsItemIndicator
            numPages={totalItems - itemsPerPage + 1}
            currentPage={counter}
            colorItems={colorIndicator}
            heightItems={"12px"}
          />
        </div>

        <div className="mobile-CarousselAssessments-container">
          {displayedItemsMobile.map((item, i) => (
            <div
              className={`${
                isTransitioningMobile
                  ? "card-transition-" + transitionType
                  : `${i === isNewCardMobile ? "new-card-item-assessments" : "card-item-assessments"}`
              }`}
              id={"card-item-assessments" + i}
              key={i}
            >
              {showImage && (
                <div className="card-person">
                  <img
                    src={require(`../../../public/images/${imagePath}/${item.image}`)}
                    alt={item.title}
                  />
                </div>
              )}
              <div className="card-text">
                {showTitle && <h3>{item.title}</h3>}
                {showDescription && <p>{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="CarousselAssessments-mobile-indicator">
          <CarousselAssessmentsItemIndicator
            numPages={totalItems - 1}
            currentPage={counterMobile}
            colorItems={colorIndicator}
            heightItems={"12px"}
          />
        </div>
      </div>
      <MdKeyboardArrowRight onClick={handleNextPage} className="button-page" />
    </div>
  );
}

export default CarousselAssessments;
