import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps130222Navigator from '../features/Maps130222/navigator';
import Add-Item130221Navigator from '../features/Add-Item130221/navigator';
import Maps130217Navigator from '../features/Maps130217/navigator';
import UserProfile130213Navigator from '../features/UserProfile130213/navigator';
import Settings130120Navigator from '../features/Settings130120/navigator';
import Maps130098Navigator from '../features/Maps130098/navigator';
import Add-Item130097Navigator from '../features/Add-Item130097/navigator';
import Maps130093Navigator from '../features/Maps130093/navigator';
import UserProfile130089Navigator from '../features/UserProfile130089/navigator';
import Maps130049Navigator from '../features/Maps130049/navigator';
import Add-Item130048Navigator from '../features/Add-Item130048/navigator';
import Maps130044Navigator from '../features/Maps130044/navigator';
import UserProfile130040Navigator from '../features/UserProfile130040/navigator';
import Maps130000Navigator from '../features/Maps130000/navigator';
import Add-Item129999Navigator from '../features/Add-Item129999/navigator';
import Maps129995Navigator from '../features/Maps129995/navigator';
import UserProfile129991Navigator from '../features/UserProfile129991/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps130222: { screen: Maps130222Navigator },
Add-Item130221: { screen: Add-Item130221Navigator },
Maps130217: { screen: Maps130217Navigator },
UserProfile130213: { screen: UserProfile130213Navigator },
Settings130120: { screen: Settings130120Navigator },
Maps130098: { screen: Maps130098Navigator },
Add-Item130097: { screen: Add-Item130097Navigator },
Maps130093: { screen: Maps130093Navigator },
UserProfile130089: { screen: UserProfile130089Navigator },
Maps130049: { screen: Maps130049Navigator },
Add-Item130048: { screen: Add-Item130048Navigator },
Maps130044: { screen: Maps130044Navigator },
UserProfile130040: { screen: UserProfile130040Navigator },
Maps130000: { screen: Maps130000Navigator },
Add-Item129999: { screen: Add-Item129999Navigator },
Maps129995: { screen: Maps129995Navigator },
UserProfile129991: { screen: UserProfile129991Navigator },

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
