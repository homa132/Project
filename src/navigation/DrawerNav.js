import { createDrawerNavigator,createStackNavigator } from "react-navigation";
import SportPage from '../category/sport';
import MainPage from '../page/main';
import CreatePage from '../page/createChill';
import DiscoPage from '../category/disko';
import ItPage from '../category/it';
import DetailsPage from '../category/detail'



const AppNavigator = createStackNavigator(
  {
    Main: MainPage,
    Create: CreatePage,
    Details: DetailsPage
  },
);

const DrawerNav = createDrawerNavigator({
  Головна: AppNavigator,
  Спорт: SportPage,
  Танці:DiscoPage,
  IT: ItPage
});

export default DrawerNav;