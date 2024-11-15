import { Fragment,useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/uiSlice";
import Notification from "./components/UI/Notification";

let isInitial=true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const notification=useSelector(state=>state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotificaiton({
          status: "pending",
          title: "sending...",
          message: "sending cart data",
        })
      );
      const response = await fetch(
        "https://test-9aacd-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed");
      }
      dispatch(
        uiActions.showNotificaiton({
          status: "success",
          title: "success",
          message: "sending cart data successfully",
        })
      );
  
    };
    if(isInitial){
      isInitial=false;
      return;
    }
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotificaiton({
          status: "error",
          title: "Error",
          message: "sending cart data failed",
        })
      );
    });
  }, [cart,dispatch]);
  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
