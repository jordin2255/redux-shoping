import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { uiActions } from '../../store/uiSlice';


const CartButton = (props) => {
  const dispatch=useDispatch();
  const toggleCartHandler=()=>{dispatch(uiActions.toggleCart())};
  const cartValue=useSelector(state=>state.cart.cartValue);
  return (
    <button className={classes.button}onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartValue}</span>
    </button>
  );
};

export default CartButton;
