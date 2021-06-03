import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>This is Home Component</Text>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
        </View>
    )
}
export default Home;