// import { useEffect, useState } from "react";
import classes from "./CardList.module.css";
import useFetch from "./useFetch"
import { Link } from "react-router-dom"
// import { useParams } from "react-router-dom";
import useAddToCart from "./AddToCart";

const CardList = (props) => {
    // const [, setpostPending] = useState(true);

    const onAddToCartClick = useAddToCart(1, "L")


    const { data: cards, isPending, error} = useFetch("http://localhost:8000/products")


    // const { id } = useParams();
    

    const loadedCard = isPending ? <div>Loading...</div> : error ?
    <div className="">{error}</div> :
    cards.map((item, pos) => {

        return (
            <div key={item.id} className={classes.card}>
                <Link className={classes.proImg} to={`/products/${item.id}`}  >
                    <img  src={item.productImg} alt="Product Pic" />
                </Link>
                <p>{item.productName}</p>
                <p>{item.productPrice}</p>
                <button className={classes.cartBtn} onClick={() => onAddToCartClick(pos)} >ADD TO CART</button>
            </div>
            
        );
    })


    
    return (
        <div className={classes.cards}>
            { loadedCard }
        </div>
    );
}


export default CardList;
