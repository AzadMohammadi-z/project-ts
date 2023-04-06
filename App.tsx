import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Welcome from './src/screens/Welcome';
import { useFonts } from 'expo-font';
import { StyleSheet, View } from 'react-native';

export default function App() {
    const [fontsLoaded] = useFonts({
        'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
        'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View onLayout={onLayoutRootView} style={styles.container}>
            <Welcome />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
