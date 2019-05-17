import { createStackNavigator } from "react-navigation";
import SportPage from '../category/sport';
import MainPage from '../page/main';
import CreatePage from '../page/createChill';
import DiscoPage from '../category/disko';
import ItPage from '../category/it';



const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: MainPage,
      
    },
    Create: {
      screen:CreatePage,
      
    },
    Sport: {
      screen:SportPage,
      
    },
    Dance:{
      screen:DiscoPage,
      
    },
    IT: {
      screen:ItPage,
      
    }
  },{
    headerMode: 'none',
    mode: 'modal'
  }
);


export default AppNavigator;