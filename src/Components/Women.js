import React, { useRef } from 'react';
import { list2, list3 } from "../data2";
import '../styles/amazon.css';
import Cards from './Cards';

const Women = ({ handleClick }) => {
    const containerRef1 = useRef(null);
    const containerRef2 = useRef(null);

    const scrollLeft = (containerRef) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -440,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = (containerRef) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: 380,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
        <div className='contentWrapper'>
                <button className='scrollButton' onClick={() => scrollLeft(containerRef1)}>❮</button>
                <div className='scrollContainer' ref={containerRef1}>
                    <section>
                        {
                            list2.map((item) => (
                                <Cards item={item} key={item.id} handleClick={handleClick} />
                            ))
                        }
                    </section>
                    </div>
                <button className='scrollButton' onClick={() => scrollRight(containerRef1)}>❯</button>
            </div>

            <div className='contentWrapper'>
                <button className='scrollButton' onClick={() => scrollLeft(containerRef2)}>❮</button>
                <div className='scrollContainer' ref={containerRef2}>
                    <section>
                        {
                            list3.map((item) => (
                                <Cards item={item} key={item.id} handleClick={handleClick} />
                            ))
                        }
                    </section>
                 </div>
                <button className='scrollButton' onClick={() => scrollRight(containerRef2)}>❯</button>
            </div>
        </>
    );
};

export default Women;
