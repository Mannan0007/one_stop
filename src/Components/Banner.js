import React, { useRef } from 'react';
import '../styles/Banner.css';

function Banner(){
    const containerRef = useRef(null);
    const scrollLeft = (ref) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
          left: -1440,
          behavior: 'smooth',
        });
      }
    };
  
    const scrollRight = (ref) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
          left: 1440,
          behavior: 'smooth',
        });
      }
    };
    return(
        <>

     <div className='contentWrapper'>
     <button className='scrollButton2' onClick={scrollLeft}>❮</button>
        <div className='scrollContainer' ref={containerRef}>
          <div className='banners'>
            <img src='./images/Homepage-Banner_1_copy_lac0huT.jpeg' alt='banner3'/>
            <img src='./images/Homepage_Banner__copy_2.jpeg' alt='banner1'/>
            <img src='./images/web-banner_28.jpeg' alt='banner4'/>

          </div>
        </div>
        <button className='scrollButton2' onClick={scrollRight}>❯</button>
      </div>

      <br></br>
  <br></br>
  <br></br>


        </>
)
}
export default Banner;