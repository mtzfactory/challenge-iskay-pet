// Import Jest Native matchers
import '@testing-library/jest-native/extend-expect';

import 'react-native-gesture-handler/jestSetup.js';

require('react-native-reanimated/lib/module/reanimated2/jestUtils').setUpTests();

// Import modules to be mocked
import './mocks/modules';
