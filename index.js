/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';
import Provider from './src/context';

const ProviderWrapper = ()=>{
    return(
        <Provider>
            <App/>
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => ProviderWrapper);
