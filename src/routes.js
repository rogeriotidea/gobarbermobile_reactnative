import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import signin from './pages/signin';
import signup from './pages/signup';

export default createAppContainer(
  createSwitchNavigator({
    signin,
    signup,
  })
);
