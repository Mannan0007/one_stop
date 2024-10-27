import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import Amazon from './Components/Amazon';
import Cart from './Components/Cart';
import Content from './Components/Content';
import Banner from './Components/Banner';
import './styles/amazon.css';
import Women from './Components/Women';
import LoginPopup from './Components/LoginPopup'; // Import the login pop-up component
import Footer from './Components/Footer';



const App = () => {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false);
	const [showLoginPopup, setShowLoginPopup] = useState(false);


    const handleClick = (item) => {
        let isPresent = false;
        cart.forEach((product) => {
            if (item.id === product.id) isPresent = true;
        });
        if (isPresent) {
            setWarning(true);
            setTimeout(() => {
                setWarning(false);
            }, 2000);
            return;
        }
        setCart([...cart, item]);
    };
    const handleChange = (item, d) => {
        let ind = -1;
        cart.forEach((data, index) => {
            if (data.id === item.id) ind = index;
        });
        const tempArr = cart;
        tempArr[ind].amount += d;

        if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
        setCart([...tempArr]);
    };

	const handleLoginClick = () => {
		setShowLoginPopup(true);
	  }
	
	  const handleCloseLoginPopup = () => {
		setShowLoginPopup(false);
	  }
    return (
        <>
            <NavBar size={cart.length} setShow={setShow} />
            {/* Conditionally render the login pop-up */}

            {show ? (
                <>
					<Banner  handleClick={handleClick} />

                    <Content handleClick={handleClick} />
                    <Amazon handleClick={handleClick} />
                    <Women handleClick={handleClick} />
					<Footer/>
                </>
            ) : (
                <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            )}
            {warning && <div className='warning'>Item is already added to your cart</div>}
			{showLoginPopup && <LoginPopup handleClose={handleCloseLoginPopup} />}

			

        </>
    );
};
export default App;
