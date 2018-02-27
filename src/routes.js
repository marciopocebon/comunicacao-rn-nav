import { StackNavigator } from 'react-navigation';

import Main from './main';

const Routes = StackNavigator({
  Main: { screen: Main },
});

export default Routes;
