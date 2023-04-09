import React, { FunctionComponent } from 'react';

//screen
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from '../components/color';
import Greeting from '../components/Header/Greeting';
import Profile from '../components/Header/Profile';
import Avi from '../../assets/avi/persion.png';

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.primary,
                        borderBottomWidth: 0,
                        shadowColor: 'transparent',
                        shadowOpacity: 0,
                        elevation: 0,
                        height: 120,
                    },
                    headerTintColor: colors.secondary,
                    headerLeftContainerStyle: {
                        paddingLeft: 25,
                    },
                    headerRightContainerStyle: {
                        paddingRight: 20,
                    },
                    headerLeft: () => <Profile img={Avi} />,
                }}
                initialRouteName="Home"
            >
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitle: '',
                        headerRight: (props) => (
                            <Greeting
                                mainText="صفحه اصلی"
                                subText="خوش اومدی"
                                {...props}
                            />
                        ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;
