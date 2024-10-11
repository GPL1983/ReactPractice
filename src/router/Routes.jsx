import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../views/homepage/Index";
import AboutUs from "../views/static/aboutus/AboutUs";
import Shoppage from "../views/shop/Index";
import Redeem from "../views/static/Redeem";
const router = createBrowserRouter([
  {
    path: "/",

    element: <App />, // App layout with Header and Footer

    children: [
      {
        path: "/",
        element: <Homepage />, // Homepage with HeroSlider and RedemptionMenu
      },
      {
        path: "/about",
        element: <AboutUs />, // Add another component for "/about"
      },
      {
        path: "/redeem",
        element: <Redeem />, // Add another component for "/about"
      },
      {
        path: "/shop",
        element: <Shoppage />, // Add another component for "/about"
      },
    ],
  },
]);
export default router;
