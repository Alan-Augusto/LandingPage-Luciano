import { Navigate } from "react-router-dom";
import "./CarouselItemIndicator.css";

function CarouselItemIndicator({
  numPages,
  currentPage,
  colorItems,
  heightItems,
}) {
  const pages = Array.from({ length: numPages }, (_, index) => index + 1);

  const style = {
    gap: parseInt(heightItems) / 5,
  };
  const itemStyle = {
    backgroundColor: colorItems,
    height: heightItems,
    width: heightItems,
    borderRadius: parseInt(heightItems) / 2, // Converta a string de altura para um número inteiro
  };

  const specialItemStyle = {
    backgroundColor: colorItems,
    height: heightItems,
    width: parseInt(heightItems) * 2,
    borderRadius: parseInt(heightItems) / 2,
  };

  return (
    <div className="CarouselItemIndicator" style={style}>
      {pages.map((page, i) => (
        <div
          key={page}
          className={i === currentPage ? "special-item" : "commom-item"}
          style={i === currentPage ? specialItemStyle : itemStyle}
        ></div>
      ))}
    </div>
  );
}

export default CarouselItemIndicator;
