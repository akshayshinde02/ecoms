import React from 'react';
import {FaMimus, FaPlus} from "react-icons/fail";
const CartAmountToggle =({ amount,setDecrease,setIncrease})=>{
return(
<div classNmae="cart-button">
    <div className="amount-toggle">
    <button onClick={()=> setDecrease()}/>
    <FaMimus/>
    <div className="amount-style">{amount}</div>
    <button onClick={()=> setIncrease()}/>
    <FaPlus/>

    
    </div>
</div>

);
};
export default CartAmountToggle;