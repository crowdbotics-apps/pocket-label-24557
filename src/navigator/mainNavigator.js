import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps205859Navigator from '../features/Maps205859/navigator';
import Add-Item205858Navigator from '../features/Add-Item205858/navigator';
import Maps205854Navigator from '../features/Maps205854/navigator';
import UserProfile205850Navigator from '../features/UserProfile205850/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps205859: { screen: Maps205859Navigator },
Add-Item205858: { screen: Add-Item205858Navigator },
Maps205854: { screen: Maps205854Navigator },
UserProfile205850: { screen: UserProfile205850Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
