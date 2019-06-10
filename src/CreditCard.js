import React from "react";


// 
 function CreditCard ({cardNumber,clientName,validThru,renderClientName,renderCardNumber,renderValidThru} )
{
  console.log(cardNumber, "hhhh")
    return (
   <div className='ccard'>
             <div classNameName="card">
  <div className="card__front card__part">
    <img className="card__front-square card__square" src="https://image.ibb.co/cZeFjx/little_square.png" alt=''/>
    <img className="card__front-logo card__logo" src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png" alt=''/>
    <p className="card_numer">{renderClientName(cardNumber)}</p>
    <div className="card__space-75">
      <span className="card__label">5422</span>
      { <p className="card__info">{renderCardNumber(clientName)}</p> }
    </div>
    <div className="card__space-25">
      <span className="card__label"></span>
            { <p className="card__info">{renderValidThru(validThru)}</p> }
    </div>
  </div>  
</div>      
</div>
  );
}       


export default CreditCard ;