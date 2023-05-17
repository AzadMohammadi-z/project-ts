import React, { FunctionComponent } from 'react';

//screen
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// balance back icon
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../components/color';
import Greeting from '../components/Header/Greeting';
import Profile from '../components/Header/Profile';
import Avi from '../../assets/avi/persion.png';
import { CardProps } from '../components/Cards/types';
import Balance from '../screens/Balance';

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
    Balance: CardProps;
};

const Stack = createStackNavigator<RootStackParamList>();

import { StackScreenProps } from '@react-navigation/stack';
type Props = StackScreenProps<RootStackParamList, 'Welcome'>;

const RootStack: FunctionComponent<Props> = () => {
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
                initialRouteName="Welcome"
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
                <Stack.Screen
                    name="Balance"
                    component={Balance}
                    options={({ navigation, route }) => ({
                        headerTitle: route?.params?.alias,
                        headerTitleAlign: 'center',
                        headerRight: (props) => (
                            <Ionicons
                                name="chevron-forward"
                                {...props}
                                size={25}
                                color={colors.secondary}
                                onPress={() => navigation.goBack()}
                            />
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;
