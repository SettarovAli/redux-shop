import { useDispatch } from 'react-redux';

import Card from '../UI/Card';

import { cartActions } from '../../store/cart-slice';

import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();

  // const cart = useSelector((state) => state.cart);

  const { id, title, price, description } = props;

  const addItemToCartHandler = () => {
    // const newTotalQuantity = cart.totalQuantity + 1;

    // const updatedItems = cart.items.slice();
    // const existingItem = updatedItems.find((item) => item.id === id);

    // if (existingItem) {
    //   const updatedItem = { ...existingItem };
    //   ++updatedItem.quantity;
    //   updatedItem.price += price;

    //   const existingItemIndex = updatedItems.findIndex(
    //     (item) => item.id === id
    //   );

    //   updatedItems[existingItemIndex] = updatedItem;
    // } else {
    //   updatedItems.push({
    //     id,
    //     price,
    //     quantity: 1,
    //     totalPrice: price,
    //     title,
    //   });
    // }

    // const newCart = {
    //   totalQuantity: newTotalQuantity,
    //   items: updatedItems,
    // };

    // return dispatch(cartActions.replaceCart(newCart));

    dispatch(cartActions.addItemToCart({ id, title, price }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
