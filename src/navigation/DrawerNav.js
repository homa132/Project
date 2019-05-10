import { createStackNavigator } from "react-navigation";
import SportPage from '../category/sport';
import MainPage from '../page/main';
import CreatePage from '../page/createChill';
import DiscoPage from '../category/disko';
import ItPage from '../category/it';



const AppNavigator = createStackNavigator(
  {
    Main: MainPage,
    Create: CreatePage,
    Sport: SportPage,
    Dance:DiscoPage,
    IT: ItPage
  },
);


export default AppNavigator;