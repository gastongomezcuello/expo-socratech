import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSession } from "../db";
import { setUser } from "../features/auth/authSlice";
import {
  usePostCartMutation,
  useDeleteCartMutation,
} from "../services/cartService";

const MainNavigator = () => {
  const user = useSelector((state) => state.auth.value.token);
  const dispatch = useDispatch();
  const localId = useSelector((state) => state.auth.value.localId);
  const cart = useSelector((state) => state.cart.value);
  const [triggerPostCart] = usePostCartMutation();
  const [triggerDeleteCart] = useDeleteCartMutation();
  useEffect(() => {
    if (cart.items.length > 0) {
      triggerPostCart({
        localId,
        cart,
      });
    } else {
      triggerDeleteCart({ localId });
    }
  }, [cart]);

  useEffect(() => {
    (async () => {
      const session = await fetchSession();
      dispatch(setUser({ data: session }));
    })();
  }, []);

  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default MainNavigator;
