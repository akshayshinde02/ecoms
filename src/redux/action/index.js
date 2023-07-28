// for add item to cart
// import CartAmountToggle from "./CartAmountToggle";
export const addCart =(product)=>{
    // const {id,stock} = product;
    // const [amount,setAmount] = useState(1);
    // const setDecrease = () =>{
    //     amount > 1 ? setAmount(amount - 1) : setAmount(1);
    // };
    // const setIncrease = () =>{
    //     amount < stock ? setAmount(amount + 1) : setAmount(stock);

    // };
    // <CartAmountToggle 
    // amount={amount}
    // setDecrease={setDecrease} 
    // setIncrease={setIncrease}
    // />
    return{
        type:"ADDITEM",
        payload:product
        
       
    }
}

// for Delete Item from Cart

export const delCart = (product) =>{
    return{
        type:"DELITEM",
        payload : product
    }
}