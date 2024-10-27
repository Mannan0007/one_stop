
import React, { useRef } from 'react';
import '../styles/Content.css';

function Content() {
  const containerRef = useRef(null);


  const scrollLeft = (ref) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -540,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = (ref) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 540,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>


      <div className='contentWrapper'>
      <button className='scrollButton' onClick={scrollLeft}>❮</button>
        <div className='scrollContainer' ref={containerRef}>
          <div className='topContent'>
            <img src='./images/YFED-Summer-Shirts-Men-1x1-Banner-1-1713505949.jpeg' alt='pic1'/>
            <img src='./images/HD-PC-Size-Banner-480x457-1707137667.jpeg' alt='pic2'/>
            <img src='./images/HC---1X1---B2-899---common-1713185882.jpeg' alt='pic3'/>
            <img src='./images/1000070037-1707137668.jpeg' alt='pic4'/> 
            <img src='./images/Men-Big-Tile-OST_hdv3dNd.jpeg' alt='pic5'/>
            <img src='./images/Men-Big-Tile-cargo-jeans_gPtDJI4.jpeg' alt='pic6'/>
            <img src='./images/Men-Big-Tile-shirts_wf31A5T.jpeg' alt='pic6'/>
          </div>
        </div>
        <button className='scrollButton' onClick={scrollRight}>❯</button>
      </div>



        <h1 className='anotherheading'>GEAR UP FOR THE CRICKET SEASON</h1>
      <div className='ipl'>
          <img src='./images/ipl1.png'/>
          <img src='./images/ipl2.png'/>
          <img src='./images/ipl3.png'/>

      </div>
<h1 className='anotherheading'>Our Top Pick</h1>
      <div className='toppicks'>
      <div>
      <img src='./images/720x420-Midsize-bannner-Combos--1--1704012294.jpeg'/>
          <img src='./images/Customise-Desktop-midsize-banner-1704439012.jpeg'/>
      </div>
      <div>
          <img src='./images/Official-Merch-store-Desktop-banner-1700470826-1701771559.jpeg'/>
          <img src='./images/Sizes-6xl-Plus-Size-Desktop-midsize-Banner-1706690349.jpeg'/>
      </div>
      </div>
    </>
  );
}

export default Content;
