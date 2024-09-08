import React from 'react'
import '../Offer/offer.css'
import exclusive_imgage from '../Assets/women 5.webp'
const Offer = () => {
  return (
    <div className='offer'>
        <div className="offers-left">
           <h1>Exclusive</h1>
           <h1>Offer for you</h1>
           <p>ONLY BEST SELLERS PRODUCT</p>
           <button>Check</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_imgage} alt="" width={200} />
        </div>
      
    </div>
  )
}

export default Offer
