import React, { useRef } from 'react';
import '../styles/card.css';

const Cards = ({ item, handleClick }) => {
    const containerRef = useRef(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -440,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: 590,
                behavior: 'smooth',
            });
        }
    };

    const { title, size, price, img } = item;

    return (
      <>

<div className="card">
      <div className="image_box">
        <img src={img} alt="Image" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{size}</p>
        <p>Price - {price}Rs</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>


                    </>

                    
    );
}

export default Cards;
