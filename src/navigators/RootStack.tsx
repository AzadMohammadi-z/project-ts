import React, { FunctionComponent } from 'react';

//screen
import Welcome from '../screens/Welcome';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
    welcome: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="welcome" component={Welcome} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;
