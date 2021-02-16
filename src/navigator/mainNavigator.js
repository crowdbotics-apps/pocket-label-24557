import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps205995Navigator from '../features/Maps205995/navigator';
import Additem205994Navigator from '../features/Additem205994/navigator';
import Maps205990Navigator from '../features/Maps205990/navigator';
import UserProfile205986Navigator from '../features/UserProfile205986/navigator';
import Maps205927Navigator from '../features/Maps205927/navigator';
import Additem205926Navigator from '../features/Additem205926/navigator';
import Maps205922Navigator from '../features/Maps205922/navigator';
import UserProfile205918Navigator from '../features/UserProfile205918/navigator';
import Maps205895Navigator from '../features/Maps205895/navigator';
import CalendarView205894Navigator from '../features/CalendarView205894/navigator';
import Camera205893Navigator from '../features/Camera205893/navigator';
import Dashboard1205882Navigator from '../features/Dashboard1205882/navigator';
import EmailAuth205878Navigator from '../features/EmailAuth205878/navigator';
import Messaging205877Navigator from '../features/Messaging205877/navigator';
import Maps205859Navigator from '../features/Maps205859/navigator';
import Add-Item205858Navigator from '../features/Add-Item205858/navigator';
import Maps205854Navigator from '../features/Maps205854/navigator';
import UserProfile205850Navigator from '../features/UserProfile205850/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps205995: { screen: Maps205995Navigator },
Additem205994: { screen: Additem205994Navigator },
Maps205990: { screen: Maps205990Navigator },
UserProfile205986: { screen: UserProfile205986Navigator },
Maps205927: { screen: Maps205927Navigator },
Additem205926: { screen: Additem205926Navigator },
Maps205922: { screen: Maps205922Navigator },
UserProfile205918: { screen: UserProfile205918Navigator },
Maps205895: { screen: Maps205895Navigator },
CalendarView205894: { screen: CalendarView205894Navigator },
Camera205893: { screen: Camera205893Navigator },
Dashboard1205882: { screen: Dashboard1205882Navigator },
EmailAuth205878: { screen: EmailAuth205878Navigator },
Messaging205877: { screen: Messaging205877Navigator },
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
