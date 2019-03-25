import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Landing from "../screens/Landing";
import TruckLanding from "../screens/TruckLanding";
import TruckHome from "../screens/TruckHome";


export default createAppContainer(
  createStackNavigator(
    {
      Landing: Landing,
      TruckLand: TruckLanding,
      Truck: TruckHome,
      Home: HomeScreen,
      Settings: SettingsScreen
    },
    {
      initialRouteName: "Landing"
    }
  )
);
