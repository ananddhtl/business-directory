import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

import * as WebBrowser from "expo-web-browser";
WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);
    return (
        <View>
            <View style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 50
            }}>
                <Image source={require('./../assets/images/react-logo.png')}
                    style={{
                        width: 250,
                        height: 300,
                        borderRadius: 20,
                        borderWidth: 6,
                        borderColor: '#000'
                    }}
                />
            </View>
            <View style={styles.SubContainer}>
                <Text style={{
                    Color: Colors.PRIMARY,
                    fontSize: 35,
                    fontFamily: 'outfit-bold',
                    textAlign: 'center'
                }}>Your Ultimate Business Community</Text>
                <Text style={{
                    fontSize: 15,
                    fontFamily: 'outfit',
                    textAlign: 'center',
                    marginVertical: 15,
                    color: Colors.GRAY
                }}>Find Your Business Near Your and Post Your Business</Text>

                <TouchableOpacity style={styles.btn} onPress={onPress}>
                    <Text style={{
                        color: '#FFFFFF',
                        fontFamily: 'outfit',
                        textAlign: 'center'
                    }}>
                        Let's Get Started
                    </Text>
                </TouchableOpacity>
            </View>

        </View>


    );
}
const styles = StyleSheet.create({
    SubContainer: {
        backgroundColor: '#fff', padding: 20,
        marginTop: -15,
    },
    btn: {
        backgroundColor: Colors.PRIMARY,
        padding: 16,
        borderRadius: 99,
        marginTop: 20


    }
})

